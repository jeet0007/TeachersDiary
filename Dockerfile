FROM node:14

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# Bundle app source
COPY . .

EXPOSE 5000
EXPOSE 5432
ENV POSTGRES_USER=user
ENV POSTGRES_PASS=pass
ENV POSTGRES_HOST=host
ENV POSTGRES_DATABASE=db
ENV PORT=5000


CMD [ "yarn", "dev" ]