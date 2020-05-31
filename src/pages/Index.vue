<template>
  <Layout>
    <section class="posts">
      <PostExcerpt v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostExcerpt from "@/components/PostExcerpt";
export default {
  components: {
    PostExcerpt
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  posts: allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
}
</page-query>

<style>
</style>