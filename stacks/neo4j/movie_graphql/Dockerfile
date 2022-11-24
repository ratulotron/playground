FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["./src/package.json", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY ./src .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
# CMD ["npm", "start"]

CMD ["/bin/sh", "-c", ""]
