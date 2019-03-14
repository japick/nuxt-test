<template>
  <div>
    <section class="container">
      <div>
        <h1>Latest Posts from Contentful</h1>
          <h2 v-for="(post, index) in posts" :key="index">
            <nuxt-link :to="'/post/' + post.fields.slug">{{post.fields.title}}</nuxt-link>
          </h2>
      </div>
    </section>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData() {
    return client.getEntries({
      content_type: 'post'
    }).then(entries => {
      return {
        posts: entries.items
      }
    }).catch(e => {
      console.log(e)
    })
  },
  head: {
    title: 'Latest Contentful Posts'
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

