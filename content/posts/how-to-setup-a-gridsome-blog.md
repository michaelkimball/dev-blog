---
title: "How to setup a Gridsome blog"
description: "Build out a Markdown blog with Gridsome, Vuetify, and HighlightJS"
date: 2020-05-30
---
I built this blog to keep track of my self-learning journey. Hopefully this will help you learn some new things as well!


### 1.	Install gridsome cli
Open up your terminal and install the cli with this command:
```shell
npm install -g @gridsome/cli
```

### 2.	Create your project
Use the gridsome cli to bootstrap your new blog.
```shell
gridsome create my-blog
```

### 3.	Check project
Now let's do a quick sanity check to make sure that everything installed correctly.
```shell
cd my-blog
gridsome develop
```
Now navigate to [http://localhost:8080](http://localhost:8080) to see your gridsome project running!

`Ctrl+C` in the terminal if you want to shutdown the server.

### 4.	Add ability to transform markdown to html
Let's install some dependencies. One to read the filesystem and one to read markdown.
```shell
npm install @gridsome/source-filesystem @gridsome/transformer-remark -D
```

### 5.	Create a blog post

Create a new file `./content/posts/my-first-blog-post.md`

Fill it with this
```
---
title: "My First Blog Post"
description: "This first blog post of many! Featuring – Hipster Ipsum!"
date: 2020-05-30
---
Sartorial mustache man bun irony, live-edge gochujang kombucha. Before they sold out pour-over hoodie chambray vape, pickled cronut photo booth. Polaroid chambray freegan lo-fi shoreditch gentrify. Bushwick sriracha whatever, aesthetic portland cliche iceland four dollar toast raw denim distillery. Four dollar toast neutra mlkshk blog biodiesel, godard lomo subway tile cronut lyft post-ironic kitsch. Hoodie letterpress chartreuse quinoa polaroid cliche bicycle rights.

Iceland austin shabby chic 90's. Polaroid YOLO leggings lyft pabst fashion axe seitan kogi meditation health goth you probably haven't heard of them lomo. +1 cronut locavore enamel pin, biodiesel swag aesthetic. Slow-carb you probably haven't heard of them palo santo fashion axe. Snackwave bushwick you probably haven't heard of them post-ironic distillery, readymade beard stumptown disrupt fam. Four loko green juice gastropub tattooed, authentic hashtag echo park intelligentsia vape truffaut humblebrag etsy direct trade health goth. Shaman enamel pin raclette brooklyn taiyaki, waistcoat green juice trust fund live-edge glossier.
```

### 6.	Add markdown plugin to gridsome.config.js

Open `./gridsome.config.js` and add the following:
```js
module.exports = {
…
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
…
}
```

### 7.	Create a post template

Create a new file `./src/templates/Post.vue`
Insert the following:
```html
<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <h3>{{$page.post.date}}</h3>
    <p v-html='$page.post.content' />
  </Layout>
</template>
<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      title
      content
      date (format: "D MMMM YYYY")
    }
  }
</page-query>
<style>
</style>
```

### 8.	Check out the blog post

Navigate to [http://localhost:8080/blog/my-first-blog-post](http://localhost:8080/blog/my-first-blog-post) to view your new blog post!

### 9.	Add Vuetify

Install some new dependencies:
```shell
npm install vuetify --save
npm install webpack-node-externals -D
```

Update `./gridsome.server.js` with this so webpack behaves.

```js
module.exports = function (api) {
…
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })
…
}
```

Update `./src/main.js` to have the new Vuetify configuration.

```js
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// if you want to use customize your theme with Vuetify colors
// import colors from 'vuetify/lib/util/colors'
Import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient, appOptions }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    theme: {
      options: {
        customProperties: true
      }
    }
  };

  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)

}
```

Change `./src/layouts/Default.vue` to add the Vuetify wrapper.

```html
<template>
…
  <v-app>
    <slot/>
  </v-app>
…
</template>
```

Update `./src/templates/Post.vue` to use a fancy new Vuetify layout.

```html
<template>
  <Layout>
    <v-card class='post'>
      <g-link to='/'>&larr; Go Back</g-link>
      <v-card-title>{{$page.post.title}}</v-card-title>
      <v-card-subtitle>{{$page.post.date}}</v-card-subtitle>
      <v-card-text v-html='$page.post.content'></v-card-text>
    </v-card>
  </Layout>
</template>
…
<style>
.post {
  margin: 1em;
  padding: 1em;
}
</style>
```

### 10.	Check out the new styling!

Navigate to [http://localhost:8080/blog/my-first-blog-post](http://localhost:8080/blog/my-first-blog-post) to view your new styling!

### 11.	Add HighlightJS

Add the highlight dependency:

```shell
npm install remark-highlight.js -D
```

Update `./src/templates/Post.vue` with some dazzling new HighlightJS styles

```html
…
<style>
…
/*

Atom One Dark by Daniel Gamage
Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

*/

.v-application code {
  overflow-x: auto;
  color: #abb2bf;
  background: #282c34;
  padding: 0.75em;
  margin-top: 0.5em;
}
.v-application code.hljs {
  display: block;
  min-height: 2.5em;
}

.hljs-comment,
.hljs-quote {
  color: #5c6370;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #c678dd;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75;
}

.hljs-literal {
  color: #56b6c2;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #98c379;
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: #e6c07b;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
code.hljs::before, code.hljs::after {
  content: '';
}
</style>
```

Update `./gridsome.config.js` to have remark use the highlightjs plugin.

```js
module.exports = {
…
  transformers: {
    remark: {
      plugins: [
        'remark-highlight.js'
      ]
    }
  },
}
```

Update your `./content/posts/my-first-blog-post.md` with a code block to test your new syntax highlighting!
````
…
```html
<p class='fancy'>The prestigious paragraph tag</p>
```
Make sure that you use the `<p>` tag wisely!
````
### 12.	Check out the final product

Navigate to [http://localhost:8080/blog/my-first-blog-post](http://localhost:8080/blog/my-first-blog-post) to view your new syntax highlighting.

Hopefully that was helpful in getting you up and running with a JAMStack blog!