const fs = require('fs');
const pluginNavigation = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy({
    'src/main.css': 'assets/main.css',
    'src/images': 'assets/img',
    'src/js': 'assets/js',
});

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('docs/404.html');

        browserSync.addMiddleware("*", (req, res) => {
        });
      }
    }
  });

  // Filters
  eleventyConfig.addFilter('artSpotlightFilter', function(collection) {
      return collection.find(item => item.data.spotlight === true)
  });

  eleventyConfig.addFilter('getAmount', function(collection, amount) {
    if (amount === undefined || amount === null) {
      return collection;
    }
    return collection.slice(0, amount);
  });

  return {
    dir: {
      input: "views",
      output: "docs",
      includes: "includes",
      data: "data",
    },
    pathPrefix: "/Portfolio",
    templateFormats: ["html", "liquid", "md", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
}