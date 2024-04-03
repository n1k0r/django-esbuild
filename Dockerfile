FROM alpine:3.18

WORKDIR /app

RUN apk --update add python3 py3-pip \
    && rm -rf /var/cache/apk/*
COPY requirements.txt .
RUN pip3 install -r requirements.txt \
    && rm -r /root/.cache/pip

COPY . .
RUN buildDeps="npm" \
    && apk add --update $buildDeps \
    && npm i \
    && npm run build \
    && apk del $buildDeps \
    && rm -r node_modules/ /root/.npm /var/cache/apk/*

RUN apk add --update uwsgi uwsgi-python3 \
    && rm -rf /var/cache/apk/*

EXPOSE 80

VOLUME ["/var/app/media"]

ENV DJANGO_SETTINGS_MODULE project.local_settings
ENV UWSGI_PROTOCOL http

CMD python3 manage.py migrate --noinput \
    && python3 manage.py collectstatic --noinput \
    && uwsgi --socket 0.0.0.0:80 --protocol $UWSGI_PROTOCOL --plugin python3 --wsgi project.wsgi
