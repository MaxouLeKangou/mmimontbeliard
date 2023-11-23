<template>
    <NuxtLink :to="buttonLink" class="text-light-100 rounded-xl bg-gradient-to-r from-purple to-pink hover:from-pink hover:to-purple p-0.5">
        <p class="rounded-xl py-3 px-6 flex h-full w-full items-center justify-center bg-dark-200 text-light-100 lg:py-3 lg:px-10">{{ buttonText }}</p>
    </NuxtLink>
</template>

<script>
    export default {
        props: {
            buttonLink: {
                type: String,
                required: true
            },
            buttonText: {
                type: String,
                required: true
            }
        }
    }
</script>