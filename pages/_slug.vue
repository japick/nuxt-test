<template>
  <section class="container">
		<div>
			<h1>{{post.fields.title}}</h1>
			<p>
				{{post.fields.content}}
			</p>
		</div>
	</section>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({params}) {
    return client.getEntries({
			content_type: 'post',
			'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    }).catch(e => {
      console.log(e)
    })
  },
  head() {
    return {
			title: this.post.fields.title
		}
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

