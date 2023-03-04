# base image
FROM node:18.14.2-alpine3.17

# create a group & add user then add user in a group with limited permissions
RUN addgroup app && adduser -S -G app app

# define working directory
WORKDIR /app

# create data folder for storing volumne data
RUN mkdir data

# copy packages file
COPY package*.json ./

# install the dependencies
RUN npm install

# copy all the files
COPY . ./

# defined environment variables
ENV API_URL = https://manishhedau.in/

# exposing port
EXPOSE 3000

# running command in container to start a application
CMD ["npm", "run", "dev"]