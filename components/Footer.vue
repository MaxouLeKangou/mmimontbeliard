<template>
    <footer class="bg-dark-300 border-t-2 border-dark-100 text-light-100 font-poppins text-sm font-medium flex flex-col gap-8 items-center py-12 px-[6%] xl:px-[10%] space-x-auto transition lg:flex-row lg:h-[120px]">

        <ul class="flex gap-4 lg:gap-8">
            <li><a href="https://www.linkedin.com/school/mmimontbeliard/" target="_blank" title="LinkedIn"><iconsLINKEDIN class="max-lg:h-[36px]" /></a></li>
            <li><a href="https://www.tiktok.com/@mmi_montbeliard" target="_blank" title="Tiktok"><iconsTIKTOK class="max-lg:h-[36px]" /></a></li>
            <li><a href="https://www.instagram.com/mmi_montbeliard/" target="_blank" title="Instagram"><iconsINSTAGRAM class="max-lg:h-[36px]" /></a></li>
        </ul>

        <nav class="flex-1 flex justify-center">
            <ul class="flex flex-col text-center gap-2 lg:flex-row lg:gap-8">
                <li class="px-4 py-2 duration-300 ease-in-out hover:text-light-200">
                    <NuxtLink class="px-4 py-2" to="/">Mentions Légales</NuxtLink>
                </li>
                <li class="px-4 py-2 duration-300 ease-in-out hover:text-light-200">
                    <NuxtLink class="px-4 py-2" to="/">Cookies</NuxtLink>
                </li>
                <li class="px-4 py-2 duration-300 ease-in-out hover:text-light-200">
                    <NuxtLink class="px-4 py-2" to="/">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
  
        <p class="duration-300 ease-in-out text-light-200">© 2023 ・ MMI Montbéliard</p>
    </footer>
</template>