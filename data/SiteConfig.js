const config = {
  siteTitle: "resto-finder", // Site title.
  siteTitleShort: "resto-finder", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "resto-finder", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024", // Logo used for SEO and manifest.
  siteUrl: "https:/resto-finder.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Resto Finders Template", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
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

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
