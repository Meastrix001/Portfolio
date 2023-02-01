const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
console.log(" JS running")
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy({
        'src/main.css': 'assets/main.css',
        'src/images': 'assets/img',
        'src/js': 'assets/js',
    });


  return {
    dir: {
      input: "views",
      output: "docs",
      includes: "includes",
      data: "data",
    },
    pathPrefix: window.location.pathname.includes("localhost") ? "" : "Portfolio",
    templateFormats: ["html", "liquid", "md", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
}