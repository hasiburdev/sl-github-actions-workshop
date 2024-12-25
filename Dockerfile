FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]