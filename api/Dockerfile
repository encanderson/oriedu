FROM node:14 AS builder

# Create app directory
WORKDIR /ori-app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:14

COPY --from=builder /ori-app/node_modules ./node_modules
COPY --from=builder /ori-app/package*.json ./
COPY --from=builder /ori-app/dist ./dist
