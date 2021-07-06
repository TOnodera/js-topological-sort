FROM node:14

RUN apt update && apt install -y vim \
    && git config --global core.editor "/usr/bin/vim"
WORKDIR /home/node/app
RUN chown -R node:node /home/node
