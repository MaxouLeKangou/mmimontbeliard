<template>
    <header class="bg-dark-300 text-light-200 font-poppins text-base font-medium transition" :class="{ 'disable-scroll': menuIsOpen }">
    
        <div class="flex items-center h-[100px] px-[6%] xl:px-[10%]">
            <div class="max-md:w-full flex justify-between">
                <NuxtLink to="/">
                    <img class="h-[35px] w-full lg:h-full" src="/img/LOGO.png" alt="Logo du département MMI de Montbéliard">
                </NuxtLink>
                <div @click="toggleMenu" class="md:hidden">
                    <span class="bar" :class="{ 'open': menuIsOpen }"></span>
                    <span class="bar" :class="{ 'open': menuIsOpen }"></span>
                    <span class="bar" :class="{ 'open': menuIsOpen }"></span>
                </div>
            </div>
            <nav class="hidden md:flex-1 md:flex justify-center">
                <ul class="flex text-sm lg:text-base gap-2 lg:gap-5">
                    <li class="px-3 py-2 lg:px-4">
                        <NuxtLink to="/training" class="duration-300 ease-in-out lg:px-4 hover:text-light-100">B.U.T</NuxtLink>
                    </li>
                    <li class="px-3 py-2 lg:px-4">
                        <NuxtLink to="/departement" class="duration-300 ease-in-out hover:text-light-100">Département</NuxtLink>
                    </li>
                    <li class="px-3 py-2 lg:px-4">
                        <NuxtLink to="/international" class="duration-300 ease-in-out hover:text-light-100">International</NuxtLink>
                    </li>
                    <li class="px-3 py-2 lg:px-4">
                        <NuxtLink to="/faq" class="duration-300 ease-in-out hover:text-light-100">F.A.Q</NuxtLink>
                    </li>
                    <li class="px-3 py-2 lg:px-4">
                        <NuxtLink to="/contact" class="duration-300 ease-in-out hover:text-light-100">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
            <Button class="hidden md:block" buttonLink="/extras" buttonText="S'INSCRIRE"/>
        </div>
        <nav v-show="menuIsOpen" class="h-screen w-screen bg-dark-300 px-[14%] flex flex-col gap-12 pt-12">
            <ul class="flex flex-col gap-4 text-2xl text-light-100 " @click="closeMenu">
                <li class="py-2 border-b-2 border-light-200">
                    <NuxtLink to="/training">B.U.T</NuxtLink>
                </li>
                <li class="py-2 border-b-2 border-light-200">
                    <NuxtLink to="/departement">Département</NuxtLink>
                </li>
                <li class="py-2 border-b-2 border-light-200">
                    <NuxtLink to="/international">International</NuxtLink>
                </li>
                <li class="py-2 border-b-2 border-light-200">
                    <NuxtLink to="/faq">F.A.Q</NuxtLink>
                </li>
                <li class="py-2 border-b-2 border-light-200">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
            <Button buttonLink="/extras" buttonText="S'INSCRIRE" @click="closeMenu"/>
        </nav>
    
    </header>
</template>

<style scoped>
    .bar {
        display: block;
        width: 24px;
        height: 3px;
        background-color: #E5E7EB;
        margin: 5px 0;
        transition: 0.4s;
    }

    .open:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .open:nth-child(2) {
        opacity: 0;
    }

    .open:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
</style>


<script>
    export default {
        data() {
            return {
                menuIsOpen: false,
            };
        },
        methods: {
            toggleMenu() {
                this.menuIsOpen = !this.menuIsOpen;
                document.body.classList.toggle('disable-scroll', this.menuIsOpen);
            },
            closeMenu() {
                this.menuIsOpen = false;
                document.body.classList.toggle('disable-scroll', this.menuIsOpen);
            },
        },
    };
</script>