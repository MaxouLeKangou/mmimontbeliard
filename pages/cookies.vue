<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('cookies', () =>
  prismic.client.getByUID('legal', 'cookies')
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
