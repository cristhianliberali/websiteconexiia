# Política de Privacidade — Conexi IA

**Vigência:** a partir de 24/09/2026
**Última atualização:** 24/09/2026
**Versão vigente publicada em:** https://conexiia.com.br/privacidade/

A **Conexi IA** ("Conexi IA", "nós"), operada por **[RAZÃO SOCIAL COMPLETA]**, inscrita no CNPJ sob o nº **62.506.786/0001-70**, valoriza a privacidade e a proteção de dados pessoais e atua em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – "LGPD"), com o Marco Civil da Internet (Lei nº 12.965/2014) e com as políticas das plataformas com as quais nos integramos, incluindo os *Meta Platform Terms* e as *Developer Policies* da Meta.

Esta Política explica **quais dados pessoais coletamos, como os utilizamos, com quem os compartilhamos, por quanto tempo os guardamos e como você pode exercer seus direitos**, incluindo o de solicitar a exclusão dos seus dados.

---

## 1. Definições

**Plataforma:** o software Conexi IA, oferecido como serviço (SaaS), que reúne em uma única caixa de entrada as conversas de WhatsApp, Instagram, Facebook e webchat, com agentes de inteligência artificial, automações e relatórios.

**Site:** https://conexiia.com.br/ e seus subdomínios.

**Cliente:** empresa ou profissional que contrata a Plataforma e é titular de uma Conta.

**Usuário:** pessoa física cadastrada pelo Cliente para operar a Plataforma (administrador ou atendente).

**Contato (Usuário Final):** pessoa que conversa com o Cliente por meio dos canais conectados à Plataforma — por exemplo, o consumidor que envia uma mensagem ao WhatsApp de uma empresa que usa a Conexi IA.

**Visitante:** pessoa que navega no Site sem possuir Conta.

**Titular:** pessoa natural a quem os dados pessoais se referem (Usuário, Contato ou Visitante).

**Controlador / Operador:** conforme a LGPD, Controlador é quem toma as decisões sobre o tratamento; Operador é quem trata os dados em nome do Controlador.

**Meta:** Meta Platforms, Inc., WhatsApp LLC e afiliadas, provedoras das APIs do WhatsApp, Instagram e Facebook.

**Dados de Plataforma (Meta):** dados obtidos por meio das APIs da Meta, como identificadores de contas comerciais (WABA ID, Phone Number ID, Page ID, Instagram Account ID), tokens de acesso, números de telefone, nomes de perfil, conteúdo e metadados de mensagens.

**Tratamento:** qualquer operação realizada com dados pessoais (coleta, armazenamento, uso, compartilhamento, eliminação etc.).

---

## 2. A quem esta Política se aplica

Esta Política se aplica a:

- **Visitantes** do Site;
- **Clientes** e seus **Usuários**, em relação aos dados de cadastro, faturamento, acesso e uso da Plataforma;
- **Contatos**, em relação aos dados que transitam pela Plataforma quando conversam com um Cliente.

**Importante para Contatos:** quando você conversa com uma empresa que utiliza a Conexi IA, essa empresa (o Cliente) é a **Controladora** dos seus dados e decide por que e como eles são tratados. A Conexi IA atua como **Operadora**, processando os dados em nome da empresa e sob suas instruções. Para saber como aquela empresa usa seus dados, consulte a política de privacidade dela. Ainda assim, você pode acionar a Conexi IA diretamente para pedir a exclusão de dados que estejam em nossa infraestrutura — veja a Seção 10 e as [Instruções de Exclusão de Dados](https://conexiia.com.br/exclusao-dados/).

---

## 3. Quais dados coletamos e como

### 3.1. Dados fornecidos diretamente por Clientes e Usuários

- **Identificação e contato:** nome, e-mail, telefone/WhatsApp, cargo, nome da empresa, CNPJ/CPF.
- **Credenciais:** senha (armazenada apenas em formato de *hash* irreversível), tokens de sessão, configuração de autenticação em dois fatores.
- **Dados de faturamento:** dados necessários à emissão de nota fiscal e à cobrança. Dados completos de cartão de crédito são coletados e armazenados exclusivamente pelo provedor de pagamentos, não pela Conexi IA.
- **Configurações:** nomes de caixas de entrada, equipes, etiquetas, automações, macros, respostas prontas, prompts e bases de conhecimento dos agentes de IA.
- **Chaves de API de terceiros (opcional):** chaves de provedores de IA (por exemplo, OpenAI, Anthropic) cadastradas pelo Cliente, armazenadas de forma criptografada.
- **Comunicações:** mensagens enviadas ao nosso suporte, formulários do Site, avaliações e pesquisas.

### 3.2. Dados dos Contatos que transitam pela Plataforma

Ao conectar um canal, o Cliente passa a receber na Plataforma as mensagens dos seus Contatos. Em nome do Cliente, a Conexi IA armazena:

- **Identificação do Contato:** número de telefone (WhatsApp), nome de perfil, identificador de conta (Instagram/Facebook), foto de perfil (quando disponibilizada pelo canal), e-mail e demais campos que o Cliente cadastrar ou que o Contato informar.
- **Conteúdo das conversas:** textos, áudios, imagens, vídeos, documentos, localização, reações e figurinhas trocados entre o Contato e o Cliente (incluindo respostas dos agentes de IA e dos atendentes).
- **Metadados:** data e hora, canal de origem, status de entrega/leitura, etiquetas, atributos personalizados, notas internas dos atendentes, histórico de atribuição.
- **Dados de webchat:** quando o Contato usa o chat do site do Cliente, coletamos também endereço IP, navegador, página de origem e identificador de sessão.

### 3.3. Dados de Plataforma obtidos das APIs da Meta

Quando o Cliente conecta WhatsApp (API Oficial via *Embedded Signup*), Instagram ou Facebook, recebemos da Meta, mediante autorização do Cliente, os dados estritamente necessários para operar o canal:

- identificadores técnicos: **WABA ID, Phone Number ID, Business ID, Page ID, Instagram Account ID, App-Scoped IDs**;
- **tokens de acesso** (armazenados criptografados) e permissões concedidas (por exemplo, `whatsapp_business_messaging`, `whatsapp_business_management`, `pages_messaging`, `instagram_manage_messages`);
- nome de exibição, número de telefone, status de verificação, classificação de qualidade e limites de envio do número;
- modelos de mensagem (templates) e seus status de aprovação;
- eventos de webhook contendo mensagens recebidas/enviadas, status de entrega e notificações de conta.

Utilizamos esses dados **exclusivamente** para prestar as funcionalidades da Plataforma solicitadas pelo Cliente (receber e enviar mensagens, gerenciar templates e números, exibir métricas), conforme os *Meta Platform Terms*. **Não vendemos Dados de Plataforma, não os usamos para publicidade, não os usamos para criar perfis fora do serviço e não os transferimos a corretores de dados.**

### 3.4. Dados coletados automaticamente

- **Registros de acesso (logs):** endereço IP, data e hora, dispositivo, sistema operacional, navegador, páginas e ações realizadas na Plataforma — mantidos por, no mínimo, 6 meses, conforme o art. 15 do Marco Civil da Internet.
- **Dados de uso:** funcionalidades utilizadas, volume de conversas, consumo de créditos de IA, erros e desempenho, utilizados de forma agregada para melhoria do produto.
- **Cookies e tecnologias similares:** conforme a Seção 11.

---

## 4. Para que utilizamos os dados

| Finalidade | Exemplos | Base legal (LGPD) |
|---|---|---|
| Prestar o serviço contratado | Criar e manter a Conta, receber/enviar mensagens, operar agentes de IA, gerar relatórios, prestar suporte | Execução de contrato (art. 7º, V) |
| Operar os canais da Meta | Autenticar a conexão, gerenciar WABA/números/templates, receber webhooks | Execução de contrato (art. 7º, V) |
| Processar respostas de IA | Enviar o conteúdo da conversa e a base de conhecimento ao provedor de IA para gerar a resposta | Execução de contrato (art. 7º, V); o Cliente responde pela base legal perante seus Contatos |
| Faturamento e cobrança | Emitir notas fiscais, processar pagamentos, controlar inadimplência | Execução de contrato e obrigação legal (art. 7º, II e V) |
| Segurança e prevenção a fraudes | Registrar acessos, detectar abusos, spam e uso indevido, proteger a conta de *Tech Provider* junto à Meta | Legítimo interesse e obrigação legal (art. 7º, II e IX) |
| Cumprir obrigações legais e regulatórias | Guardar registros de acesso, atender ordens judiciais, obrigações fiscais | Obrigação legal (art. 7º, II) |
| Comunicação sobre o serviço | Avisos de manutenção, alterações de termos, incidentes, atualizações de produto | Execução de contrato e legítimo interesse (art. 7º, V e IX) |
| Marketing para Clientes e leads | Envio de novidades, ofertas e conteúdos; você pode se descadastrar a qualquer momento | Consentimento ou legítimo interesse (art. 7º, I e IX) |
| Melhoria do produto | Análises estatísticas agregadas e anonimizadas sobre o uso da Plataforma | Legítimo interesse (art. 7º, IX) |
| Exercício regular de direitos | Defesa em processos administrativos, judiciais ou arbitrais | Art. 7º, VI |

**Não utilizamos** o conteúdo das conversas dos Contatos para treinar modelos de IA de uso geral, para publicidade ou para qualquer finalidade própria da Conexi IA além da prestação do serviço ao Cliente.

---

## 5. Papéis na proteção de dados: quem é responsável pelo quê

### 5.1. Conexi IA como Controladora

Somos Controladores dos dados de **Visitantes, Clientes e Usuários** relacionados a cadastro, faturamento, suporte, marketing, logs e uso da Plataforma.

### 5.2. Conexi IA como Operadora

Somos Operadores dos dados dos **Contatos** (identificação, conversas, mídias e metadados) e dos **Dados de Plataforma da Meta** relacionados às contas dos Clientes. Nesses casos, tratamos os dados apenas conforme as instruções do Cliente, refletidas na configuração e no uso da Plataforma, e não os utilizamos para fins próprios.

### 5.3. O que a Conexi IA não faz com os dados dos Contatos

- Não acessa o conteúdo das conversas dos Clientes, exceto: (i) quando o Cliente solicita suporte que exige esse acesso; (ii) para investigar violação dos Termos de Uso ou das políticas da Meta; (iii) por obrigação legal ou ordem de autoridade.
- Não vende, aluga, comercializa nem compartilha dados de Contatos com terceiros para fins de marketing.
- Não utiliza dados de Contatos para publicidade direcionada nem para treinar modelos de IA.

### 5.4. Responsabilidades do Cliente

O Cliente, como Controlador, é responsável por: obter as bases legais e consentimentos (opt-in) para se comunicar com seus Contatos; informá-los sobre o uso de atendimento automatizado e IA; atender aos pedidos de direitos dos titulares que receber; e não inserir na Plataforma dados além do necessário. Detalhes nos [Termos de Uso](https://conexiia.com.br/termos/).

---

## 6. Com quem compartilhamos os dados

Compartilhamos dados apenas na medida necessária para prestar o serviço, cumprir a lei ou proteger direitos, com as seguintes categorias de destinatários:

### 6.1. Operadores e suboperadores (tratam dados em nosso nome)

| Categoria | Finalidade | Localização |
|---|---|---|
| Provedor de nuvem e hospedagem | Servidores, banco de dados, armazenamento de mídias e backups da Plataforma | **[país/região — ex.: Brasil / EUA]** |
| Provedores de modelos de IA (ex.: OpenAI, Anthropic e outros disponibilizados na Plataforma) | Processar o conteúdo das conversas e bases de conhecimento para gerar respostas dos agentes de IA. Utilizamos APIs empresariais cujos termos vedam o uso dos dados para treinamento dos modelos. Quando o Cliente usa chaves próprias, o provedor é contratado diretamente por ele. | EUA |
| CDN, proxy reverso e proteção contra ataques | Entrega segura do tráfego, mitigação de DDoS | Global |
| Serviços de e-mail transacional e notificações | Envio de e-mails de sistema (convites, redefinição de senha, avisos) | **[país]** |
| Monitoramento e registro de erros | Diagnóstico de falhas e desempenho | **[país]** |
| Suporte, CRM e e-mail marketing | Atendimento a Clientes e comunicação comercial | **[país]** |
| Transcrição de áudio (quando ativado) | Converter mensagens de voz em texto para leitura e processamento pela IA | EUA |

### 6.2. Controladores independentes (parceiros)

- **Meta (WhatsApp, Instagram, Facebook):** para transmitir e receber mensagens pelos canais conectados. A Meta trata os dados conforme suas próprias políticas (https://www.whatsapp.com/legal/privacy-policy e https://www.facebook.com/privacy/policy). Na API Oficial do WhatsApp, as mensagens são criptografadas em trânsito e a Meta atua como processadora em nome do Cliente.
- **Plataformas de pagamento:** para processar cobranças e emitir recibos; tratam os dados de pagamento sob suas próprias políticas.
- **Sistemas integrados pelo Cliente (CRM, ERP, automações via API/webhook):** quando o Cliente ativa uma integração, os dados enviados passam a ser regidos pela política do sistema de destino, sob responsabilidade do Cliente.

### 6.3. Autoridades e terceiros por obrigação legal

Poderemos compartilhar dados com autoridades públicas, órgãos reguladores ou terceiros mediante ordem judicial, requisição legal, ou quando necessário para proteger direitos, segurança e integridade da Conexi IA, dos Clientes ou de terceiros.

### 6.4. Operações societárias

Em caso de fusão, aquisição ou reorganização societária, os dados poderão ser transferidos ao sucessor, que ficará vinculado a esta Política, com comunicação aos titulares.

---

## 7. Transferência internacional de dados

Alguns dos nossos fornecedores estão localizados fora do Brasil (especialmente Estados Unidos e União Europeia). Nesses casos, adotamos as salvaguardas previstas no art. 33 da LGPD e na regulamentação da ANPD, como cláusulas-padrão contratuais, garantias contratuais de nível de proteção adequado e verificação de certificações de segurança dos fornecedores (por exemplo, SOC 2 e ISO 27001).

A transmissão de mensagens pelos canais da Meta implica necessariamente o tratamento de dados pela Meta em sua infraestrutura global, conforme as políticas e os mecanismos de transferência da própria Meta.

---

## 8. Por quanto tempo guardamos os dados

| Categoria | Prazo |
|---|---|
| Dados de cadastro de Clientes e Usuários | Durante a vigência da Conta e por até 5 anos após o encerramento, para exercício regular de direitos e obrigações fiscais |
| Contatos, conversas, mídias e metadados (dados do Cliente) | Durante a vigência da Conta. Após cancelamento, o Cliente tem **30 dias** para exportar; em seguida os dados são eliminados definitivamente em até **90 dias** |
| Dados de Plataforma da Meta (tokens, identificadores) | Enquanto o canal permanecer conectado; eliminados em até 30 dias após a desconexão do canal, o encerramento da Conta ou a revogação da permissão pelo Cliente na Meta |
| Chaves de API de IA cadastradas pelo Cliente | Até serem removidas pelo Cliente ou até o encerramento da Conta |
| Registros de acesso (logs de aplicação) | Mínimo de 6 meses (art. 15 do Marco Civil da Internet); logs de segurança por até 12 meses |
| Dados de faturamento e documentos fiscais | 5 anos, conforme legislação tributária |
| Comunicações de suporte | Até 2 anos após o encerramento do atendimento |
| Backups | Sobrescritos em ciclos de até 30 dias; dados eliminados desaparecem dos backups ao fim do ciclo |
| Dados de marketing (leads) | Até a revogação do consentimento/oposição ou 2 anos de inatividade |

Solicitações de exclusão antecipada podem ser feitas conforme a Seção 10 e as [Instruções de Exclusão de Dados](https://conexiia.com.br/exclusao-dados/). Após os prazos, os dados são eliminados de forma segura ou anonimizados.

---

## 9. Como protegemos os dados

Adotamos medidas técnicas e organizacionais compatíveis com o estado da técnica, incluindo:

- criptografia em trânsito (TLS) em todas as comunicações e criptografia em repouso de bancos de dados, backups, tokens e chaves de API;
- isolamento lógico das Contas de cada Cliente (multi-tenant com segregação por conta);
- controle de acesso por perfis e permissões, autenticação em dois fatores disponível para Usuários e obrigatória para a equipe interna;
- registro e monitoramento de eventos de segurança, proteção contra ataques (WAF/DDoS) e gestão de vulnerabilidades;
- acesso interno ao ambiente de produção restrito, registrado e limitado ao mínimo necessário;
- política interna de resposta a incidentes: em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, comunicaremos a ANPD e os Clientes afetados nos prazos da LGPD e da regulamentação da ANPD.

Nenhum sistema é totalmente imune a riscos. Os Clientes e Usuários também são responsáveis por proteger suas credenciais e dispositivos. Para relatar vulnerabilidades, escreva para **contato@conexiia.com.br** com o assunto "Segurança".

---

## 10. Seus direitos como titular

Nos termos do art. 18 da LGPD, você pode, a qualquer momento e gratuitamente, solicitar:

- confirmação da existência de tratamento e **acesso** aos seus dados;
- **correção** de dados incompletos, inexatos ou desatualizados;
- **anonimização, bloqueio ou eliminação** de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;
- **portabilidade** dos dados a outro fornecedor, observados os segredos comercial e industrial;
- **eliminação** dos dados tratados com base no consentimento;
- **informação** sobre as entidades com as quais compartilhamos seus dados;
- informação sobre a possibilidade de **não fornecer consentimento** e as consequências da negativa;
- **revogação do consentimento**;
- **oposição** a tratamento realizado com base em legítimo interesse;
- **revisão de decisões** tomadas unicamente com base em tratamento automatizado;
- apresentar **reclamação à Autoridade Nacional de Proteção de Dados (ANPD)**.

**Como exercer:** envie e-mail para **contato@conexiia.com.br** com o assunto "Direitos do Titular – LGPD" ou "Solicitação de Exclusão de Dados", informando seu nome, o número de telefone ou identificador usado nas conversas e o que deseja. Poderemos solicitar informações adicionais para confirmar sua identidade e evitar a exclusão indevida de dados de terceiros. Responderemos em até **15 (quinze) dias**, prorrogáveis mediante justificativa.

**Se você é Contato de um Cliente:** encaminharemos a solicitação ao Cliente responsável (Controlador) e o auxiliaremos no atendimento, ou, quando se tratar de dados armazenados em nossa infraestrutura e não houver base legal para retenção, realizaremos a exclusão diretamente. O procedimento detalhado, inclusive para dados obtidos via Meta, está nas [Instruções de Exclusão de Dados](https://conexiia.com.br/exclusao-dados/).

**Se você é Cliente:** você pode excluir Contatos, conversas, Usuários e canais diretamente na Plataforma, revogar as permissões concedidas à Conexi IA nas configurações do seu Meta Business Portfolio e solicitar o encerramento total da Conta.

---

## 11. Cookies e tecnologias similares

Utilizamos cookies e tecnologias semelhantes no Site e na Plataforma:

- **Estritamente necessários:** autenticação, sessão, segurança, preferências de idioma e funcionamento do webchat. Não dependem de consentimento.
- **Estatísticos e de desempenho:** medem audiência e uso do Site para melhorá-lo (por exemplo, ferramentas de análise de tráfego). Dependem do seu consentimento no banner de cookies.
- **Marketing:** medem a eficácia de campanhas e permitem anúncios mais relevantes (por exemplo, pixels de redes sociais). Dependem do seu consentimento.

Você pode aceitar, rejeitar ou alterar suas preferências a qualquer momento pelo banner de cookies ou pelas configurações do seu navegador. A rejeição de cookies opcionais não impede o uso do Site ou da Plataforma.

---

## 12. Crianças e adolescentes

A Plataforma é destinada a empresas e profissionais e não é direcionada a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes como Clientes ou Usuários. Caso um Cliente atenda menores de idade por meio dos canais conectados, ele é responsável por observar o art. 14 da LGPD e a legislação aplicável. Se tomarmos conhecimento de coleta indevida, eliminaremos os dados.

---

## 13. Links e serviços de terceiros

O Site e a Plataforma podem conter links para sites e serviços de terceiros (Meta, provedores de IA, integrações, conteúdos incorporados). Esta Política não se aplica a eles; recomendamos a leitura das respectivas políticas de privacidade.

---

## 14. Encarregado de Proteção de Dados e contato

**Encarregado (DPO):** [NOME DO ENCARREGADO]
**E-mail para privacidade e LGPD:** contato@conexiia.com.br
**Suporte geral:** contato@conexiia.com.br
**Endereço:** [ENDEREÇO COMPLETO — CIDADE/UF]

---

## 15. Alterações desta Política

Podemos atualizar esta Política para refletir mudanças operacionais, legais ou nas plataformas com as quais nos integramos. Alterações relevantes serão comunicadas por e-mail aos Clientes ou por aviso na Plataforma e no Site, com indicação da nova data de vigência. Recomendamos a consulta periódica. A versão vigente estará sempre disponível em https://conexiia.com.br/privacidade/.

---

**Conexi IA**
CNPJ: 62.506.786/0001-70
E-mail: contato@conexiia.com.br
Site: https://conexiia.com.br/
Termos de Uso: https://conexiia.com.br/termos/
Exclusão de Dados: https://conexiia.com.br/exclusao-dados/
