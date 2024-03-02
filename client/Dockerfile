ARG NODE_TAG

ARG NGINX_TAG

from node:${NODE_TAG} as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-production

FROM nginx:${NGINX_TAG} as deploy

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]