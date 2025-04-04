<script setup lang="ts">


interface Menu {
    title: string;
    href: string;
}

const menus: Menu[] = [
    {
        title: 'Home',
        href: '#home'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Testimonials',
        href: '#testimonials'
    },
    {
        title: 'Contact',
        href: '#contact'
    }
]

</script>

<template>
    <nav
        class="fixed top-5 bg-gradient-to-r from-[#0C0E23] to-[#04071D] text-white py-4 px-6 rounded-md inline-block border border-[#1D2029] z-50">
        <ul class="flex justify-center space-x-8 py-4">
            <li v-for="(menu, index) in menus" :key="index" class="font-sans font-medium text-base">
                <NuxtLink :href="menu.href">{{ menu.title }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>