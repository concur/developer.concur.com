require 'html-proofer'

SITE_DIRECTORY = './_site'

files_to_ignore = [
  './_site/akamai-sureroute-test-object.html',
  './_site/api-reference-deprecated/v3.html'
]

urls_to_ignore = [
  '/api-reference/travel/travel-profile/form-payment-resource.html',
  'Concur_Platform_Client_Facing_Release_Notes_September_2013.pdf',
  '/api-reference/travel/travel-profile/index.html',
  'App_Center_Release_Notes_client_final_May2014_0.pdf',
  'App_Center_Release20_Notes_Mar13_2015.pdf',
  'https://developer.concur.com/oauth-20/web-flow',
  'https://developer.concur.com/receipts/post-receipt',
  'https://developer.concur.com/api-reference/user/company-notification-subscription-resource/company-notification-subscription-resource-post.html',
  'https://developer.concur.com/node/42',
  '/api-reference/expense/expense-report/expense-entry-itemization-resource-post.html',
  'https://developer.concur.com/node/168',
  'https://developer.concur.com/expense-report/expense-form-resource/expense-form-resource-get',
  'https://developer.concur.com/expense-report/expense-form-field-resource/expense-form-field-resource-get',
  'https://developer.concur.com/attendee/attendee-type-resource',
  'https://developer.concur.com/attendee',
  '/preview/api-reference/image/index.html',
  'https://www.concursolutions.com/api/expense/v2.0/attendees',
  'https://developer.concur.com/node/434#idtypes',
  '/docs/overviews/partner-applications.html',
  '/docs/guides/index.html',
  '/docs/overviews/index.html',
  'https://developer.concur.com/go-market/app-certification',
  'http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/trip/trip-resource',
  'http://concur.github.io/developer.concur.com/api-reference/authentication/web-flow',
  'https://speakerdeck.com/statik/complianceops-containers-in-regulated-environments',
  './_site/akamai-sureroute-test-object.html',
  /^https:\/\/github.com\/concur\/developer.concur.com\/blob\/preview\/blog\/tag/,
  /^https:\/\/www.concursolutions.com\/api/,
  'https://developer.concur.com/api-documentation/web-services/expense-report',
  'https://developer.concur.com/api-documentation/web-services/itinerary/itinerary-resource/itinerary-resource-get',
  'https://github.com/Trudeaucj/Concur-java-examples',
  'https://developer.concur.com/expense-report/expense-report-resource/post-report-exceptions',
  '/api-reference/authentication/web-flow.html',
  'docs/get-started/setup-sandbox/',
  'https://github.com/concur/developer.concur.com/commit/0',
  'https://www.linkedin.com/company/5822'
]

options = {
  allow_hash_href: true,
  check_img_http: true,
  parallel: {
    in_processes: 10
  },
  hydra: {
    max_concurrency: 50
  },
  empty_alt_ignore: true,
  file_ignore: files_to_ignore,
  url_ignore: urls_to_ignore,
  checks_to_ignore: ['ImageCheck', 'ScriptCheck'],
  cache: {
    timeframe: '2w'
  }
}

HTMLProofer.check_directory(SITE_DIRECTORY, options).run
