<template>
  <div class="c-Header">
    <nuxt-link :to="'/'">Home</nuxt-link>
    <ul>
      <li v-for="(page, index) in pages" :key="index">
        <nuxt-link :to="'/' + page.fields.slug">{{page.fields.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  data() {
    return {
      pages: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      return client.getEntries({
        content_type: 'page'
      }).then((entries) => {
        this.pages = entries.items
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
.c-Header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>