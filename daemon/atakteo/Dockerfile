FROM node 
WORKDIR /src
COPY package.json /src
RUN npm i 
COPY . /src
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]