---
layout: post
title: Integrating Bootstrap + Sass + Jekyll with the Concur Developer Center
date: 2016-12-09
tags:
    - UI
    - Documentation
author: Brian Hague
---

Recently, the Concur Developer Center has gone through some significant UI changes. As the amount of developer content and resources has grown, the UI has become a more important component when delivering developer documentation. This holds true across other documentation sites as well. See how [Stripe separates content from code in their 3-column layout](https://stripe.com/docs/api){:target="_blank"}, or how [Firebase organizes their documentation by platform](https://firebase.google.com/docs/reference/){:target="_blank"}. In both instances, the UI plays a major role in effectively communicating ideas to developers.

## The initial UI
In the early days of the Concur Developer Center, we were using a third-party Bootstrap template on top of [Jekyll](https://jekyllrb.com/){:target="_blank"}. This allowed the team to focus on delivering content and value to users, and less on the appearance of the site.

![DevCenter before UI overhaul](/blog/images/devcenter-before.png)

However, third-party templates have their own set of problems, mainly with bloat and maintainability.

* Of all the styles being loaded on each page, only a small percentage were being used on each page.
* Many plugins were either unused or unnecessary. For example, the splash image on the main page was being loaded using a carousel plugin, even though there was only one image being displayed.
* Updating and maintaining the UI meant overriding selectors in over 10 stylesheets, which were being loaded separately and un-minified on every page.

Accompanied by the need to adhere more to Concur’s [branding and design guidelines](https://developer.concur.com/manage-apps/go-market-docs/concur_brand_guidelines.pdf){:target="_blank"}, it made sense to move the UI to [Sass](http://sass-lang.com/){:target="_blank"} and [Bootstrap](http://getbootstrap.com/){:target="_blank"}.

## Why Sass + Bootstrap?
Sass, in comparison to other CSS preprocessors like [LESS](http://lesscss.org/){:target="_blank"} and [Stylus](http://stylus-lang.com/){:target="_blank"}, is written in Ruby, and therefore pairs quite nicely with Jekyll (Jekyll provides [built-in support for Sass](https://jekyllrb.com/docs/assets/#sassscss){:target="_blank"}). Combined with wide community support and Bootstrap’s embracement of Sass, it is one of the best choices for those who want to switch to a component-based UI.

Bootstrap is the most popular CSS framework, and therefore also has a lot of community support. It’s also been [ported to Sass](https://github.com/twbs/bootstrap-sass){:target="_blank"} and allows for increased productivity rather than spending time designing components from scratch.

## How we moved to Sass + Bootstrap
Moving to these new tools involved adding Sass + Jekyll Bootstrap SASS to the project, which was as simple as adding gems to the project’s Gemfile and running bundle install.

```ruby
gem 'bootstrap-sass'
gem 'jekyll-bootstrap-sass'
```

Since the Bootstrap Sass files will be copied to a directory outside the Jekyll project, it’s necessary to use a gem called jekyll-bootstrap-sass, which exposes the path of these files when we start importing Bootstrap in our own Sass files.

Jekyll has built-in support for Sass, so no additional setup is required. Additional customization, such as compression, can be done through the project’s `_config.yml` file.

```yml
# config.yml
sass:
    style: compressed
```

## Jekyll Conventions with Sass
When serving a Jekyll site, Jekyll looks for a folder called `_sass` and uses it to source any Sass files. In order to process those partials into a CSS file, an output file is placed outside the `_sass` folder.

Here’s the Developer Center’s `assets/style.scss` importing `_sass/main.scss`. Note that in order for Jekyll to parse the output file, we need to include front matter at the top. This won’t be necessary for files in the `_sass` folder.

```scss
---
# this is front matter here, so Jekyll can parse this file
# appropriately
---

@import "main";
```

Here’s an example `_sass/main.scss`. Note that we can import Bootstrap and our own defined partials, as well as define variables and CSS declarations.

```scss
@import "colors"

$font-family-base: "Helvetica Neue", "Segoe UI", Arial, sans-serif;

@import "components/navbar";
@import "pages/blog";

@import "bootstrap";

html {
  overflow-y: scroll;
}
```

In order to organize and maintain the stylesheets we create, it’s usually best to separate CSS declarations into files (also called partials), then import them into `main.scss`.

## File Structure
Within the `_sass` folder, we can structure files and folders however we want. In the case of the Developer Center, we created folders for components, pages, and third-party stylesheets. Components were defined as reusable UI elements, such as footers or buttons. Anything specific to a particular page, or multiple pages, went into the pages folder, and third-party stylesheets (such as [animate.css](https://daneden.github.io/animate.css/){:target="_blank"}) went into the vendor folder.

```
- _sass
  - components
    - buttons.scss
    - breadcrumbs.scss
    - footer.scss
    - navbar.scss
  - pages
    - _shared.scss
    - blog.scss
    - go-to-market.scss
  - vendor
    - animate.scss
    - github-markdown.scss
  - colors.scss
  _ main.scss
```

Whatever file structure chosen, it should separate concerns appropriately and ensure that any changes made to the site can be done without hunting through hundreds of lines of CSS. Additionally, by importing partials into a single Sass file, we end up with one file that can be minified and included on the site.

## Customizing Bootstrap Components
When it came down to creating components, bootstrap-sass made it incredibly simple to customize Bootstrap components in a DRY and easy-to-manage way. Colors and spacing could be overridden via Sass variables, reducing the need to override Bootstrap CSS declarations with more specific CSS selectors.

An example with the Developer Center navbar, `_sass/components/navbar.scss`

```scss
// bootstrap overrides
$navbar-default-bg: $off-black;
$navbar-height: 70px;
$navbar-border-radius: 0;
$navbar-default-link-color: $white;
$navbar-default-link-hover-color: $concur-blue;
$navbar-default-link-active-color: $navbar-default-link-color;

// eliminate margin between navbar and page content
nav.navbar {
  margin-bottom: 0;
}

.navbar-nav {
  // apply border so text doesn't jump on hover
  > li > a {
    border-bottom: 2px solid transparent;
    text-transform: uppercase;
  }
}
```

## Migrating styles
Migrating an entire site was a long, step-by-step process, involving frequent commits and thinking about what should be changed at every step. We found that the easiest way to migrate is to start with components, because they’re the most isolated from everything else.

Once components like buttons and navbars are migrated, then you can focus on migrating site-wide CSS rules, such as the grid layout and typography. One method to do this is to copy old rules to the Sass files, then work on consolidating and eliminating any unused rules.

## The Results

* Combined with other tasks such as compressing images, removing unused plugins, and applying Concur’s branding and design guidelines, here are the results:
* Elimination of 24 stylesheets being loaded on each page
* Elimination of 9 scripts being loaded on each page
* Initial home page load transfers are down to ~600KB vs. ~2.0MB in the old site
* Most popular API reference pages, such as authentication and expense reporting, load quicker

![DevCenter after UI overhaul](/blog/images/devcenter-after.png)

## Next Steps
The Concur Developer Center UI changes will lay the groundwork for implementing future features and continued improvement of API reference/documentation. There are additional improvements that need to be made in the coming months, especially when it comes to our PageSpeed insights. We’re continuously improving the site when it comes to this and the documentation.

If you want to inspect the source code for the Concur Developer Center, check out our Github repo at  [https://github.com/concur/developer.concur.com](https://github.com/concur/developer.concur.com){:target="_blank"}
