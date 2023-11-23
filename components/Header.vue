<script scope>
    const toggleMenu = ref(false);
</script>

<template>
    <header class="bg-dark-300 text-light-200 font-poppins text-base font-medium h-[100px] flex items-center px-[6%] transition xl:px-[10%]">
        
        <div class="max-md:w-full flex justify-between">
            <!-- Logo à gauche -->
            <NuxtLink to="/">
                <img class="h-[35px] lg:h-full" src="/img/LOGO.png" alt="Logo du département MMI de Montbéliard">
            </NuxtLink>

            <!-- Bouton du menu hamburger à droite -->
            <button @pointerdown="toggleMenu" class="md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
  
        <nav class="hidden md:flex-1 md:flex justify-center">
            <ul class="flex gap-2 lg:gap-5">
                <NuxtLink to="/" class="px-3 py-2 duration-300 ease-in-out text-sm lg:text-base lg:px-4 hover:text-light-100">B.U.T</NuxtLink>
                <NuxtLink to="/" class="px-3 py-2 duration-300 ease-in-out text-sm lg:text-base lg:px-4 hover:text-light-100">Département</NuxtLink>
                <NuxtLink to="/" class="px-3 py-2 duration-300 ease-in-out text-sm lg:text-base lg:px-4 hover:text-light-100">International</NuxtLink>
                <NuxtLink to="/" class="px-3 py-2 duration-300 ease-in-out text-sm lg:text-base lg:px-4 hover:text-light-100">F.A.Q</NuxtLink>
                <NuxtLink to="/" class="px-3 py-2 duration-300 ease-in-out text-sm lg:text-base lg:px-4 hover:text-light-100">Contact</NuxtLink>
            </ul>
        </nav>

        <Button class="hidden text-sm md:block lg:text-base" buttonLink="/extras" buttonText="S'INSCRIRE"/>
        
    </header>
</template>