require 'html-proofer'

SITE_DIRECTORY = './_site'

files_to_ignore = [
  './_site/akamai-sureroute-test-object.html',
  './_site/api-reference-deprecated/v3.html'
]

urls_to_ignore = [
  '/docs/overviews/partner-applications.html',
  './_site/akamai-sureroute-test-object.html',
  /^https:\/\/github.com\/concur\/developer.concur.com\/blob\/preview\/blog\/tag/,
  /^https:\/\/www.concursolutions.com\/api/,
  /^https:\/\/jekyllrb.com/,
  /^https:\/\/concur.webex.com/,
  'https://speakerdeck.com/statik/complianceops-containers-in-regulated-environments',
  'https://github.com/concur/developer.concur.com/commit/0',
  'https://www.linkedin.com/company/5822',
  'https://www.tcconline.com/listNumbersByCode.action?confCode=3608516019',
  'https://tools.ietf.org/html/rfc7519#section-7.2',
  'https://tools.ietf.org/html/rfc6749#section-4.1',
  'https://tools.ietf.org/html/rfc7517',
  'https://open.concur.com'
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
  checks_to_ignore: ['ImageCheck', 'ScriptCheck']
}

HTMLProofer.check_directory(SITE_DIRECTORY, options).run
