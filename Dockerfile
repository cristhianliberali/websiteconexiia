FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
COPY --from=builder /app/.output/public /usr/share/nginx/html
```//ajuste conforme o que aparecer no passo 2

Você tem como rodar `npm run build` localmente (ou no terminal do Lovable) depois de fazer essa mudança no `vite.config.ts`? Isso vai confirmar o caminho exato antes de mexer no Dockerfile de novo.
