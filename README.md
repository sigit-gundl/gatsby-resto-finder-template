
<div align="center"  style="margin-bottom:30px">
   <h1>Gatsby Resto Finder Template</h1>
</div>

# Gatsby Resto Finder Template

A starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

**NOTE**: This branch contains Gatsby v2 compatible version of the starter. To get the Gatsby v1 compatible version, use the [`v1`] branch.

## Lighthouse Audit Score

<div align="center">
    <a href="https://developers.google.com/web/tools/lighthouse/">
      <img src="docs/pwa-score.png" alt="Lighthouse Score" />
    </a>
</div>

Check out the [Features](#features) to read about all [Progressive Web App](https://developers.google.com/web/progressive-web-apps) capabilities of this starter in detail.

## Why?

This project aims to provide a minimal base for building advanced GatsbyJS powered websites.

It doesn't define any UI limitations in any way and only gives you the basic components for SEO/Social Media/etc while creating a comfortable development environment to get started.

You are free to use any UI framework/styling options.

## How can I use this?

If you are a newcomer to Gatsby who's interested in the implementations of most needed features, this is a great place to start.

If you are interested in a foundation for building ultra-fast websites, you can use this project as a "minimal" starter.


## Features

- Gatsby v2 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Pagination
  - Configurable via `SiteConfig.js`
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- [Disqus](https://disqus.com/) support
  - Notifications about new disqus comments
- `/static/` and content folders are available to use with [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) out of the box for optimized image generation
- High configurability
- Separate components for everything:
  - User social profiles
  - Copyright information
  - More!
- [NetlifyCMS](https://www.netlifycms.org) support out of the box
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google Analytics](https://marketingplatform.google.com/about/analytics/) support
  - Sitemap generation
  - robots.txt
  - General description tags
  - [Schema.org JSONLD (Google Rich Snippets)](https://schema.org/)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button
- Development tools
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration
  - [CodeClimate](https://codeclimate.com/) configuration file and badge

NOTE: Feel free to check out [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter) if you are interested in a more opinionated starter with Material Design in mind.

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
gatsby new YourProjectName
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js

module.exports = {
  siteTitle: "resto-finder", // Site title.
  siteTitleShort: "resto-finder", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "resto-finder", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024", // Logo used for SEO and manifest.
  siteUrl: "https:/resto-finder.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Resto Finders", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gatsby Resto Finder", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "resto-finder", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 6, // Amount of posts displayed per listing page.
  userName: "Advanced User", // Username to display in the author segment.
  userEmail: "AdvancedUser@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bandar Lampung, id", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Lorem Ipsum Dolor Sit asmet.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      url: "https://facebook.com/",
    },
    {
      url: "https://twitter.com/",
    },
    {
      url: "https://youtube.com/",
    },
    {
      url: "https://instagram.com/",
    }
  ],
  partners:[
  {
    owner:   "rush-hour"
  },
  {
    owner:  "betawi-corner"
  },
  {
    owner:  "collete-lola"
  },
  {
    owner:  "feedwell"
  },
  {
    owner:  "dki-catering"
  },
  {
    owner:  "s"
  },
  {
    owner:  "noni-sienna-catering"
  },
  {
    owner:  "cv-aleph-jireh"
  },
  {
    owner:  "cater-spot-catering"
  },
  {
    owner: "ma-la-tang"
  },
  {
    owner: "sushi-ya"
  },
  {
    owner: "twenty-eight"
  },
  {
    owner: "dill-in-the-box"
  },
  {
    owner: "naturale-kitchen"
  },
  {
    owner: "lau's-kopi"
  },
  {
    owner: "bread-life"
  },
  {
    owner: "twin-house"
  },
  {
    owner: "serasa"
  },
  {
    owner: "tastylicious"
  },
  {
    owner: "mangia"
  },
  {
    owner: "dapur-panglima"
  },
  {
    owner: "d-cost"
  },
  {
    owner: "pass-kaya-rasa"
  },
  {
    owner: "dapur-dafid"
  },
  {
    owner: "catering-bunda"
  }
  ],
  copyright: "Copyright © 2020. resto-finder", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
```

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway"
    }
  }
});
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/gatsby-advanced-starter" // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!

## Pagination

By default the starter will show 4 posts per page. The landing page is the first page located on `/` (controlled by the `Listing` component).

You can control the amount of posts via `SiteConfig` by setting the `postsPerPage: ${NUMBER}`.

NOTE: You can also disable the pagination by setting the `postsPerPage: 0`. In this case the landing page will be controlled by the `Landing` component.

## NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).

# Author

Sigit Pratomo ([@Sigit_gundl](https://twitter.com/sigit_gundl))
