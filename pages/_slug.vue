<template>
  <section class="container">
		<div>
			<h1>{{page.fields.title}}</h1>
      <div v-if="page.fields.featuredImage" class="c-Banner">
        <img :src="`${page.fields.featuredImage.fields.file.url}`+'?fm=jpg&fl=progressive'">
      </div>
      <div v-html="richTextHtml"></div>
		</div>
	</section>
</template>

<script>
import client from '~/plugins/contentful'
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

export default {
  asyncData({params, error}) {
    return client.getEntries({
			content_type: 'page',
			'fields.slug': params.slug
    }).then(entries => {
      return {
        page: entries.items[0],
        richTextHtml: documentToHtmlString(entries.items[0].fields.content)
      }
    }).catch(e => {
      error({ statusCode: 404, message: 'Page not found' })
      console.log(e)
    })
  },
  head() {
    return {
			title: this.page.fields.title
		}
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.c-Banner {
  width: 100%;
}
.c-Banner img {
  width: 100%;
  height: auto;
}
</style>

