<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('article', route.params.uid as string)
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <Header/>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
  <Footer/>
</template>
