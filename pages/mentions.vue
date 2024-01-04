<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('mentions', () =>
  prismic.client.getByUID('legal', 'mentions')
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
