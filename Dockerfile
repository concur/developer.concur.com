FROM jekyll/jekyll:3.6.2

WORKDIR /opt/Concur/DevCenter

ADD ./Gemfile ./Gemfile
ADD ./Gemfile.lock ./Gemfile.lock

RUN bundle install

ADD ./src ./src
ADD ./_config.yml ./_config.yml

CMD bash -c "jekyll serve --watch --incremental"
