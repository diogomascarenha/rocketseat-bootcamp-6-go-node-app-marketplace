FROM node:10

#RUN apk add python

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

USER node

EXPOSE 3000

CMD ["yarn","start"]
