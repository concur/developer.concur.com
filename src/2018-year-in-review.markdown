---
title: SAP Concur Developer Center - 2018 Year In Review
layout: reference
---

## Contributors

The health of our developer center is 100% due to the contributions from our vibrant community of contributors. The following individuals made a significant contribution to the overall quality of our website this year:

> In most cases the GitHub user name has been replaced with the real world name.

Contributor|Commits|Additions|Deletions
---|---|---|---
Brittany West|85|1,439|460
Sarra Loew|74|1,048|819
Doug Staab|68|636|1,279
RoAnn Corbisier|53|830|743
Laurent Lhermine|35|4,112|2,511
Harish Ramachandran|32|1,857|691
Brian Hague|22|181,992|213,260
Ketan Shrikhande|15|295|264
Erik Hansen|10|50|54
Loke Tan|8|59|35
retrosight|7|164|66
Samartha Tumkur Vani|7|530|174
Heath Henning|7|417|301
muhammadjunaidkhan-sap|6|45|30
Lukas Knotek|6|16|7
Merit Trompeter|5|90|59
sagarwal25|4|30|123
Anand Patil|4|2,030|2,030
Hayden Lam|5|77|17
Laurel Clippinger|7|122|87
Tim Nied|3|18|1
Christelle Thiebaut|3|2,196|1,101
Parisack Soumpholphakdy|3|5|5
Tames Trachy|3|10|1
joshuaconcur|3|5|5
Howard Dierking|3|447|341
Charlie Owen|173|18,937|17,657

In addition the following individuals had 1 or 2 commits for this year: bboddu, Patrick Bowers, shinyay-jptc, MahoT, jpueda, Tyler Shields, Matt Harrington, Joe Hottinger, HNozakiC, stepancannuscio, babithabalan, Bing Hu, Balaji Subramani, TheRealTesty, vbimba, ewichern, krezac, Tom Bigwood

## Initiatives

We had several big initiatives this year and were generally successful in each.

### Increase the amount of participation

Since inception of the current website in 2015 we've seen less investment by teams and individuals, year over year. We set out to reverse this trend and did so across the board, in some cases quite enthusiastically. These numbers only include contributors with 3 or more commits in the calendar year.

Year|People|Total Commits|Total Additions|Total Deletions|Average Commits|Average Additions|Average Deletions
---|---|---|---|---|---|---|---
2018|27 <span style="color:green">135%<span>|649 <span style="color:green">122%<span>|217,455 <span style="color:green">378%<span>|242,119 <span style="color:green">712%<span>|24|8,054 <span style="color:green">280%<span>|8,967 <span style="color:green">528%<span>
2017|20 <span style="color:green">105%<span>|531 <span style="color:red">80%<span>|57,510 <span style="color:red">71%<span>|33,969 <span style="color:red">65%<span>|27|2,876 <span style="color:red">68%<span>|1,698 <span style="color:red">61%<span>
2016 [1]|19 <span style="color:green">105%<span>|661 <span style="color:red">37%<span>|80,802 <span style="color:red">12%<span>|52,511 <span style="color:red">5%<span>|35|4,253 <span style="color:red">12%<span>|2,764 <span style="color:red">5%<span>
2015|18|1792|659,855|966,368|100|36,659|53,687

> [1] 2015 was the year we actually created the site, moving from Drupal, with a lot of bulk move of content. It is expected the numbers would drop rather dramatically from 2015 to 2016.

### Unwind the deprecation morass

Due to past choices in how we structured and documented APIs we created an unhealthy environment for developers.

When we started the year any navigation to a deprecated API resulted in the following:

1. The messaging was way too subtle. The only hint it was a deprecated API was because the URI contained `/api-reference-deprecated` and the left navigation top link noted `API Reference (Deprecated)`.
1. There was no standard way of documenting the deprecated status of an API.
1. Most of the pages didn't even note the API was actually deprecated nor did they link to the deprecation policy.
1. Once you navigated to a deprecated API the only list of APIs you would see in the left navigation bar were other deprecated APIs.
1. Deprecated APIs enjoyed marquee treatment listed as a peer in the navigation header present in all pages.
1. URIs to pages could no longer be expected to be long lasting or stable; the location of the API documentation changed as the result of it being marked as deprecated.
1. Deprecated APIs tended to be spread out over multiple pages unnecessarily.

We have addressed all of these issues for most of the deprecated APIs:

1. At the top of each page for an API which has been deprecated is a standardized boilerplate (defined [here](https://github.com/concur/developer.concur.com/blob/preview/src/_includes/deprecation-alert.html)) which clearly denotes the API as deprecated and links to the policy.
1. A link to a simple list of deprecated APIs has been added to the regular API Reference left navigation bar and the page header link has been removed.
1. Documentation has been moved into the normal and expected location within the site, from `/api-reference-deprecated/` to `/api-reference/`.
1. The left navigation bar always points to the most current version of the APIs, even if you navigate to a deprecated API.
1. A deprecated API can be deprecated in place the URI will remain stable no matter the deprecation status.
1. Deprecated APIs were condensed down to one page where applicable.

Here is a pretty good high level summary of the improvements:

![Summary](./2018-year-in-review-deprecation-before-after.jpg)

We have a few pages left for this initiative as each refactoring takes a while and typically includes the work for the other initiatives so you can still see some vestiges in the site it is anticipated this will wrap by the end of January 2019.

### Align to Markdown and HTML

Over the years the tendency within certain groups has been to move to Adobe Portable Document Format (PDF) for certain pages. This presents multiple challenges:

1. It is a black box, binary format in order to affect change you must have the original document. In most cases, the original(s) were lost as people left the company.
1. It cannot be updated except at the document level. For example, renaming our brand from `Concur` to `SAP Concur` can only happen by editing the original document and generating an entirely new document. See challenge immediately above.
1. As we update our style (fonts, colors, layout, etc.) the PDFs will remain unchanged.
1. Cannot participate in analytics, page redirection, indexing and more which you get automatically / easily with a standardized HTML approach.

As a result of these issues we have been on a journey to convert 100% of all appropriate PDFs to Markdown in the source on GitHub which translates to pure HTML + CSS + Javascript on the website thereby resolving all of the issues outlined above. In rare instances, primarily legal constraints where the PDF must adhere to a very strict document layout, you will still find PDFs on the site. This initiative will conclude by the end of the year and will leave us with exactly one PDF compared to approximately 45 at the start of the year.

### Adhere to the documentation template

We've had the documentation template a while now and took time this year to (a) help teams showing up with new APIs follow the template as well as (b) revisit old documentation (including deprecated APIs) to improve them wherever possible.

A special word of thanks to **Sarra** and **RoAnn** who were both instrumental in improving and revising the [document template](https://github.com/concur/developer.concur.com/blob/preview/src/document-template.markdown) as well as working with various teams to leverage same this year. We look forward to their continued assistance next year!

### Condense documentation for ease of use

Also due to unfortunate choices in the past we ‘over documented’ some APIs leading to a lot more confusion than was necessary. We set out to condense these back down so the developer could visit one page to understand a complete end-to-end API rather than having to navigate multiple pages and piece things together.

Our content management system is a GitHub repository and as such it is wired for continuous improvement. This plus the sheer magnitude of some of the improvements makes it a challenge to completely visualize a before and after of many improvements.

Let me give you one example of about thirty we have done this year for this condensation pivot – Image v1.

**Before**

You can follow these links to try and wrap your head around the API -- six different pages.

* [image-resource-entry-image-URL-get.markdown](https://github.com/concur/developer.concur.com/blob/6b4734768505dc9baf5d32a1a784042c277391c3/src/api-reference-deprecated/version-one/Image/image-resource-entry-image-URL-get.markdown)
* [image-url-resource.markdown](https://github.com/concur/developer.concur.com/blob/6b4734768505dc9baf5d32a1a784042c277391c3/src/api-reference-deprecated/version-one/Image/image-url-resource.markdown)
* [index.markdown](https://github.com/concur/developer.concur.com/blob/6b4734768505dc9baf5d32a1a784042c277391c3/src/api-reference-deprecated/version-one/Image/index.markdown)
* [payment-request-image-URL-get.markdown](https://github.com/concur/developer.concur.com/blob/6b4734768505dc9baf5d32a1a784042c277391c3/src/api-reference-deprecated/version-one/Image/payment-request-image-URL-get.markdown)
* [receipt-image-URL-get.markdown](https://github.com/concur/developer.concur.com/blob/6b4734768505dc9baf5d32a1a784042c277391c3/src/api-reference-deprecated/version-one/Image/receipt-image-URL-get.markdown)
* [report-image-URL-get.markdown](https://github.com/concur/developer.concur.com/blob/6b4734768505dc9baf5d32a1a784042c277391c3/src/api-reference-deprecated/version-one/Image/report-image-URL-get.markdown)

**After**

The six pages have been condensed to one, had the template applied to the available documentation and redirects put into place so all prior documentation redirects to the new documentation.

* [v1.image.markdown](https://github.com/concur/developer.concur.com/blob/preview/src/api-reference/image/v1.image.markdown)

#### Versioning

In many cases, different versions of the API were documented in different places and in many cases made it hard to discern between versions or make sure updates the documentation were included in other versions where applicable. This set of ongoing work co-locates all versions of an API documentation in the same path:

**Before**

Note there are three different paths to the documentation files and two files have duplicate names -- they cannot inhabit the same path.

```
/api-reference-deprecated/version-one/Travel/travel-request.markdown
/api-reference-deprecated/version-three/request/request.markdown
/api-reference/request/examples.markdown
/api-reference/request/get-started.markdown
/api-reference/request/request.markdown
/api-reference/request/response-codes.markdown
```

**After**

One path to the documentation files for the sum total of the API which are now clearly versioned.

```
/api-reference/request/v1.request.markdown
/api-reference/request/v3.request.markdown
/api-reference/request/v4.endpoints.markdown
/api-reference/request/v4.examples.markdown
/api-reference/request/v4.get-started.markdown
/api-reference/request/v4.response-codes.markdown
```
#### Lots of other small improvements add up

There were many, many additional small changes which add up to a lot of improvement site-wide – including grammar, spelling, formatting and phrasing.

Thank you all for your continued investment, care and love of our developer community.

We look forward to many more improvements in 2019...!
