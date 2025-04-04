<script setup lang="ts">

interface Project {
    id: number
    title: string
    description: string
    image: string
    link: string
}

const projects = ref<Project[]>([
    {
        id: 1,
        title: '3D Solar System Planets to Explore',
        description: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
        image: '/project/img-1.png',
        link: '#'
    },
    {
        id: 2,
        title: 'Yoom - Video Conferencing App',
        description: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
        image: '/project/img-2.png',
        link: '#'
    },
    {
        id: 2,
        title: 'AI Image SaaS - Canva Application',
        description: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
        image: '/project/img-3.png',
        link: '#'
    },
    {
        id: 2,
        title: 'Animated Apple Iphone 3D Website',
        description: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
        image: '/project/img-4.png',
        link: '#'
    },
])

</script>


<template>
    <section class="py-8">
        <h4 class="text-center font-sans font-bold text-4xl md:text-5xl">
            A small selection of <span class="text-[#CBACF9]">recent projects</span>
        </h4>

        <!-- project card -->
        <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <ProjectCard :projects="projects" />
        </div>
    </section>
</template>
