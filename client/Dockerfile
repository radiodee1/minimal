FROM node:23-alpine3.20 

WORKDIR /app
COPY package.json package-lock.json ./

COPY  dist/ ./

RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173

EXPOSE 8008
#RUN npm run dev 

#FROM nginx:1.27.3-alpine

#COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf


#CMD ["/bin/sh", "-i"]
CMD ["npm", "run", "dev"]

#STOPSIGNAL SIGTERM
#CMD ["nginx", "-g", "daemon off;"]
