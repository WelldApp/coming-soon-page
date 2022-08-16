FROM alpine

# Adding some comments

WORKDIR /opt

COPY site site

COPY default.conf /etc/nginx/http.d/

RUN apk add nginx

EXPOSE 8080

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
