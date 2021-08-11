FROM alpine:3.13.5
MAINTAINER SAP Concur Platform <platform@concur.com>

WORKDIR /tmp

ADD requirements.txt .

RUN apk --no-cache add \
    bash \
    py3-pip \
    python3 && \
  pip install --upgrade --no-cache-dir \
    pip \
    setuptools &&\
  pip install --no-cache-dir \
    python-dateutil && \
  pip install -r requirements.txt --no-cache-dir && \
  rm -rf /tmp/* && \
  mkdir ~/.aws && \
  chmod 700 ~/.aws

# Expose volume for adding credentials
VOLUME ["/root/.aws"]

CMD ["/bin/bash", "--login"]
