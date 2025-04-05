<script setup lang="ts">


interface Menu {
    title: string;
    href: string;
}

const menus: Menu[] = [
    {
        title: 'Home',
        href: '/'
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

watchEffect(() => {
    if (typeof window === 'undefined') return;
    const navbar = document.querySelector('.scroll-navbar') as HTMLElement;
    const scrollHandler = () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    };
});

</script>

<template>
    <nav
        class="scroll-navbar w-full fixed top-0 bg-gradient-to-r from-[#0C0E23] to-[#04071D] text-white py-4 px-4 md:px-6 rounded-md inline-block border border-[#1D2029] z-50">
        <ul class="flex justify-center space-x-4 md:space-x-8 py-4">
            <li v-for="(menu, index) in menus" :key="index"
                class="font-sans font-medium text-base hover:text-[#CBACF9] transition-all duration-300 ease-in-out">
                <LazyNuxtLink :href="menu.href">{{ menu.title }}</LazyNuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.scroll-navbar {
    transition: all 0.3s ease-in-out;
}

.scroll-navbar.scrolled {
    background: rgba(255, 255, 255, 0.05) !important;
    backdrop-filter: blur(8px) !important;
}
</style>