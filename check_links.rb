require 'html-proofer'

SITE_DIRECTORY = './_site'

files_to_ignore = [
  './_site/akamai-sureroute-test-object.html'
]

urls_to_ignore = [
  '/docs/overviews/partner-applications.html',
  './_site/akamai-sureroute-test-object.html',
  /^https:\/\/github.com\/concur\/developer.concur.com\/blob\/preview\/blog\/tag/,
  /^https:\/\/www.concursolutions.com\/api/,
  /^https:\/\/jekyllrb.com/,
  /^https:\/\/concur.webex.com/,
  /^https:\/\/tools.ietf.org/,
  /^http:\/\/digitalbush.com\/projects\/masked-input-plugin/,
  'https://speakerdeck.com/statik/complianceops-containers-in-regulated-environments',
  'https://github.com/concur/developer.concur.com/commit/0',
  'https://www.linkedin.com/company/5822',
  'https://www.tcconline.com/listNumbersByCode.action?confCode=3608516019',
  'https://open.concur.com',
  'http://fortawesome.github.com/Font-Awesome/',
  'http://fortawesome.github.io/Font-Awesome/icons/',
  'http://matoilic.github.com/jquery.placeholder',
  'http://runnable.com/UtWlKVi9ZnsnAABx/upload-receipts-to-concur-using-php-curl'
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
