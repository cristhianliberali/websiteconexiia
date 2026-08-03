FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Variáveis públicas (client-side) precisam existir em tempo de BUILD, pois o
# Vite as embute no bundle estático — configure-as no Easypanel e faça um
# rebuild sempre que mudar alguma delas (um restart não é suficiente).
ARG VITE_SITE_URL
ARG VITE_RECAPTCHA_SITE_KEY
ARG VITE_FACEBOOK_PIXEL_ID
ENV VITE_SITE_URL=$VITE_SITE_URL \
    VITE_RECAPTCHA_SITE_KEY=$VITE_RECAPTCHA_SITE_KEY \
    VITE_FACEBOOK_PIXEL_ID=$VITE_FACEBOOK_PIXEL_ID

RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/.output ./.output
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
