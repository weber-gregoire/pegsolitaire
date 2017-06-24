FROM        node:7.10-alpine
MAINTAINER  Grégoire Weber <ic.weber.gregoire@gmail.com>

WORKDIR     /solitaire

COPY        package.json .
RUN         npm install

COPY        src/ src/

ENTRYPOINT  ["npm", "start"]