FROM node:16

ENV PORT=3000

EXPOSE 3000

USER root

WORKDIR /app

COPY . .

RUN ls -a

RUN yarn install

CMD [ "yarn", "start" ]
