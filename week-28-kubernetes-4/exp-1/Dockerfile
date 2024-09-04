FROM node:20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN tsc -b
COPY . .
CMD ["node", "index-js"]
