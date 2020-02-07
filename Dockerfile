FROM node:10

#create working directory 

WORKDIR /app

COPY . .

RUN npm --verbose install 

EXPOSE 3000

CMD ["npm" ,  "start"]