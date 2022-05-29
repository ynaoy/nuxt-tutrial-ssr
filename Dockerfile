FROM node:lts-alpine

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add git && \
    npm install -g npm@latest nuxi nuxt3
    
COPY start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["sh", "/start.sh"]

USER node
