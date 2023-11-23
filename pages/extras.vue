<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('extras', () =>
  prismic.client.getByUID('page', 'extras')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>

<template>
  <div class="text-light-100">
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
