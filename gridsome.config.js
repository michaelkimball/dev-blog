// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Developer Blog',
  siteDescription: 'Learn along with me',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:title'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-highlight.js'
      ]
    }
  }
}
