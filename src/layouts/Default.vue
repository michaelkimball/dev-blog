<template>
  <v-app>
    <header class="header" primary>
        <h1 class="topbar display-3">{{$page.metadata.siteName}}</h1>
        <h2 class="font-weight-light">{{$page.metadata.siteDescription}}</h2>
    </header>
    <section class="layout" role="main">
      <slot/>
    </section>
    <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        &
        <a class="link" href="//vuetifyjs.com">Vuetify</a>
        &
        made by 
        <a class="link" href="//twitter.com/devdabbler">Michael Kimball</a>
      </p>
    </div>
  </v-app>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--v-primaryBackground-base);
  color: var(--v-accent-base);
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
  border-radius: 0 0 1em 1em;
  margin-bottom: .5rem;
}
.layout {
  max-width: 680px;
  margin: 0 auto;
}
.footer {
  padding-top: .5em;
  margin-top: .5rem;
  text-align: center;
  background-color: var(--v-accent-base);
  color: var(--v-primary-base);
}
</style>