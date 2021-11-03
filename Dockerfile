FROM nginx:1.17.2

LABEL maintainer "yxh <xianhe_yan@sina.com>"

# 清理默认web
RUN cd /usr/share/nginx/html && rm -rf /usr/share/nginx/html/*

ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./dist /usr/share/nginx/html/

