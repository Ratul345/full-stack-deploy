# Build Stage
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build



#Production Stage
FROM node:22-alpine

WORKDIR /app

RUN npm install -g serve
ENV PATH="/usr/local/bin:$PATH"

COPY --from=build /app/dist ./dist

COPY package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]