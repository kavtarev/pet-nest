FROM node:14.17.0-alpine3.13

ENV TYPEORM_DATABASE=pet_nest
ENV TYPEORM_USERNAME=postgres
ENV TYPEORM_PASSWORD=pass
ENV TYPEORM_TYPE=postgres
ENV TYPEORM_HOST=host.docker.internal
ENV TYPEORM_PORT=5432

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY tsconfig.json tsconfig.build.json nest-cli.json .eslintrc.js ./

COPY src src/

RUN npm run build

CMD exec npm run start:dev
EXPOSE 3100