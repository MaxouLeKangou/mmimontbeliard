<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('faq', () =>
  prismic.client.getByUID('informative', 'faq')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>

<template>
  <Header />
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
  <Footer />
</template>
