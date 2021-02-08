FROM node:latest

# Create app directory
WORKDIR /usr/local/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY dockerpack*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 100
CMD [ "node", "app.js" ]

# docker build -t mynodejs .
