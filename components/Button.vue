<template>
    <button type="button" name="Button cliquable" class="flex">
        <NuxtLink :to="buttonLink" class="inline-block text-light-100 rounded-xl bg-gradient-to-r from-purple to-pink hover:from-pink hover:to-purple p-0.5">
            <p class="rounded-xl bg-dark-200 py-3 px-6 text-sm lg:text-base lg:py-3 lg:px-10">{{ buttonText }}</p>
        </NuxtLink>
    </button>
    
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