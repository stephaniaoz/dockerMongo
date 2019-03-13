FROM ubuntu:14.04
MAINTAINER univalleDocker correo.com
RUN apt-get -y update; \
    apt-get -y upgrade;
RUN apt-get install -y nodejs;
RUN apt-get install -y mongodb;
ADD https://github.com/stephaniaoz/dockerMongo/blob/master/ConvertToCsv/pruebaCargue.csv /home/
ADD https://github.com/stephaniaoz/dockerMongo/blob/master/ConvertToCsv/index.js /home/
ADD https://github.com/stephaniaoz/dockerMongo/blob/master/ConvertToCsv/functions.js /home/
CMD ["bash","-D FOREGROUND"]