
<template>
  <v-card shaped class="excerpt">
    <v-card-title>{{post.title}}</v-card-title>
    <v-card-subtitle>{{post.date}}</v-card-subtitle>
    <v-card-text>{{post.description}}</v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn text color="primary"><g-link :to="post.path" class="read">Read More <span class="visuallyhidden">about {{post.title}}</span></g-link></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.excerpt {
  margin-bottom: .5em;
}
.read {
  text-decoration: none;
}
.visuallyhidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
.visuallyhidden:focus {
  display: inline-block;
  padding: 15px 23px 14px;
  width: auto;
  height: auto;
  clip: auto;
  color: #000000;
  background-color: #ffffff;
  clip-path: unset;
}
</style>