FROM gcr.io/google-appengine/nodejs AS base

RUN apt-get update || : && apt-get install python make g++ -y
WORKDIR /build

FROM base AS builder
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile  --production=false

FROM builder AS release
COPY package.json yarn.lock next-env.d.ts tsconfig.json ./
COPY src ./src
COPY public ./public
# RUN npx next telemetry disable
RUN yarn build
# COPY .next ./.next
RUN mkdir pages
CMD ["yarn", "start"]
