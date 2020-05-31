<template>
  <Layout>
    <v-card class="post">
      <g-link to="/" class="link">  &larr; Go Back</g-link>
      <v-card-title>{{$page.post.title}}</v-card-title>
      <v-card-subtitle> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</v-card-subtitle>
      <v-card-text class="content" v-html="$page.post.content"></v-card-text>
    </v-card>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.post {
  padding: 1em;
}

.content > h3 {
  margin-top: 1em;
  padding: 1em 0 .5em .5em;
  border-top: .125em solid grey;
}

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