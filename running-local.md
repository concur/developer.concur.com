# Running the SAP Concur Developer Center locally

## Prerequisites

Ensure you have the following dependencies installed in your developer environment:

* Ruby (2.2.5)
* Node (6.11.3)
* Npm (3.10.10)

Set an environment variable for the Dev Center forms handler URL, which will typically be on `localhost:3000`.

```
export DEVCENTER_API_FORMS=http://localhost:3000
```

## Development

* Install bundler (`gem install bundler`)
* `bundle install` to install Ruby dependencies
* `npm install` to install Node dependencies
* `npm start` to run the development server. This command will ensure the following happens before starting the server.
  * Ruby gems are up-to-date.
  * Build Jekyll and Webpack assets.
* `bundle exec jekyll serve --watch --incremental` to run the development server
  * Navigate to http://localhost:4000 to view the site.
* `npm test` to run tests for app creation.
  * `npm run test:watch` to run tests in watch mode.

## Production

* `npm run build` to build all static files (Jekyll + Webpack)
* `npm run build:webpack` to only build Webpack assets
* `ruby check_links.rb` to run link checker
