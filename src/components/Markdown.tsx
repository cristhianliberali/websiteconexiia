import { Fragment, type ReactNode } from "react";

/**
 * Renderizador de Markdown leve para as páginas legais.
 * Suporta o subconjunto usado nos documentos: títulos (#, ##, ###), parágrafos,
 * listas, citações, tabelas, linhas horizontais, negrito, itálico, código,
 * links e URLs/e-mails soltos.
 */

const INLINE_PATTERN =
  /(`[^`]+`)|(\*\*[\s\S]+?\*\*)|(\*[^*\s][^*]*?\*)|(\[[^\]]+\]\([^)\s]+\))|(https?:\/\/[^\s)<]+)|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

const linkClass = "text-primary hover:underline";

function linkProps(href: string) {
  const isExternal =
    /^https?:\/\//.test(href) && !/^https?:\/\/([\w-]+\.)?conexiia\.com\.br/.test(href);
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

function renderInline(text: string, keyPrefix = "i"): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(INLINE_PATTERN.source, "g");

  while ((match = re.exec(text))) {
    const [token] = match;
    const key = `${keyPrefix}-${match.index}`;
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[1]) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-foreground"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else if (match[2]) {
      nodes.push(
        <strong key={key} className="font-semibold text-foreground">
          {renderInline(token.slice(2, -2), key)}
        </strong>,
      );
    } else if (match[3]) {
      nodes.push(<em key={key}>{renderInline(token.slice(1, -1), key)}</em>);
    } else if (match[4]) {
      const [, label, href] = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(token)!;
      nodes.push(
        <a key={key} href={href} className={linkClass} {...linkProps(href)}>
          {renderInline(label, key)}
        </a>,
      );
    } else if (match[5]) {
      // Pontuação final não faz parte da URL.
      const trailing = /[.,;:]+$/.exec(token)?.[0] ?? "";
      const href = token.slice(0, token.length - trailing.length);
      // O texto exibido omite o protocolo (https://); o link continua completo.
      nodes.push(
        <a key={key} href={href} className={linkClass} {...linkProps(href)}>
          {href.replace(/^https?:\/\//, "")}
        </a>,
      );
      if (trailing) nodes.push(trailing);
    } else if (match[6]) {
      nodes.push(
        <a key={key} href={`mailto:${token}`} className={linkClass}>
          {token}
        </a>,
      );
    }
    last = match.index + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Linhas consecutivas de um parágrafo são exibidas com quebra de linha. */
function renderLines(lines: string[], keyPrefix: string): ReactNode[] {
  return lines.map((line, index) => (
    <Fragment key={`${keyPrefix}-${index}`}>
      {index > 0 && <br />}
      {renderInline(line.trim(), `${keyPrefix}-${index}`)}
    </Fragment>
  ));
}

function splitRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

const isBlank = (line: string) => line.trim() === "";
const isHr = (line: string) => /^\s*(-{3,}|\*{3,})\s*$/.test(line);
const isHeading = (line: string) => /^#{1,6}\s/.test(line);
const isQuote = (line: string) => /^>\s?/.test(line);
const isUl = (line: string) => /^\s*[-*]\s+/.test(line);
const isOl = (line: string) => /^\s*\d+\.\s+/.test(line);
const isTable = (line: string) => /^\s*\|/.test(line);
const startsBlock = (line: string) =>
  isBlank(line) ||
  isHr(line) ||
  isHeading(line) ||
  isQuote(line) ||
  isUl(line) ||
  isOl(line) ||
  isTable(line);

export function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = `b-${i}`;

    if (isBlank(line)) {
      i++;
      continue;
    }

    if (isHr(line)) {
      blocks.push(<hr key={key} className="my-10 border-border" />);
      i++;
      continue;
    }

    if (isHeading(line)) {
      const [, hashes, content] = /^(#{1,6})\s+(.*)$/.exec(line)!;
      const children = renderInline(content.trim(), key);
      if (hashes.length === 1) {
        blocks.push(
          <h1 key={key} className="text-3xl font-bold text-foreground sm:text-4xl">
            {children}
          </h1>,
        );
      } else if (hashes.length === 2) {
        blocks.push(
          <h2 key={key} className="mt-10 text-xl font-semibold text-foreground sm:text-2xl">
            {children}
          </h2>,
        );
      } else {
        blocks.push(
          <h3 key={key} className="mt-6 text-lg font-semibold text-foreground">
            {children}
          </h3>,
        );
      }
      i++;
      continue;
    }

    if (isQuote(line)) {
      const quoted: string[] = [];
      while (i < lines.length && isQuote(lines[i])) quoted.push(lines[i++].replace(/^>\s?/, ""));
      blocks.push(
        <blockquote
          key={key}
          className="border-l-4 border-primary bg-muted/40 py-3 pl-4 pr-3 leading-relaxed text-muted-foreground"
        >
          {renderLines(quoted, key)}
        </blockquote>,
      );
      continue;
    }

    if (isUl(line) || isOl(line)) {
      const ordered = isOl(line);
      const matcher = ordered ? isOl : isUl;
      const items: string[] = [];
      while (i < lines.length && matcher(lines[i])) {
        items.push(lines[i++].replace(ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/, ""));
      }
      const ListTag = ordered ? "ol" : "ul";
      blocks.push(
        <ListTag
          key={key}
          className={`${ordered ? "list-decimal" : "list-disc"} space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-muted-foreground`}
        >
          {items.map((item, index) => (
            <li key={`${key}-${index}`} className="pl-1">
              {renderInline(item, `${key}-${index}`)}
            </li>
          ))}
        </ListTag>,
      );
      continue;
    }

    if (isTable(line)) {
      const rows: string[] = [];
      while (i < lines.length && isTable(lines[i])) rows.push(lines[i++]);
      const [header, , ...body] = rows;
      const headerCells = splitRow(header);
      blocks.push(
        <div key={key} className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                {headerCells.map((cell, index) => (
                  <th
                    key={`${key}-h-${index}`}
                    className="border-b border-border px-4 py-3 font-semibold text-foreground"
                  >
                    {renderInline(cell, `${key}-h-${index}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, rowIndex) => (
                <tr key={`${key}-r-${rowIndex}`} className="border-b border-border last:border-b-0">
                  {splitRow(row).map((cell, cellIndex) => (
                    <td
                      key={`${key}-r-${rowIndex}-${cellIndex}`}
                      className="px-4 py-3 align-top leading-relaxed text-muted-foreground"
                    >
                      {renderInline(cell, `${key}-r-${rowIndex}-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length && (paragraph.length === 0 || !startsBlock(lines[i]))) {
      paragraph.push(lines[i++]);
    }
    blocks.push(
      <p key={key} className="leading-relaxed text-muted-foreground">
        {renderLines(paragraph, key)}
      </p>,
    );
  }

  return <div className="space-y-4 [overflow-wrap:anywhere]">{blocks}</div>;
}
