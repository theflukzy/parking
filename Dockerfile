# base image

FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app


# start app
CMD ["npm", "start"]
