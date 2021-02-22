FROM node:14.5.0

LABEL "container"="Charisma Bot" \
"version"="0.0.0" \
"env"="testing"

WORKDIR /usr/bot/app

COPY . .
RUN yarn install
RUN yarn build

CMD ["/bin/bash", "-c", "yarn run-bot"]