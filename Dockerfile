FROM nginx:1.13.1

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/site.template /etc/nginx/conf.d/site.template

ADD target /usr/share/nginx/html/
#ENV uri "\$uri"
CMD /bin/bash -c "uri='\$uri' envsubst < /etc/nginx/conf.d/site.template > /etc/nginx/conf.d/default.conf && cat /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
