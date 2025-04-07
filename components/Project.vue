<script setup lang="ts">
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    icons: Array<string>;
}

const projects = ref<Project[]>([
    {
        id: 1,
        title: "Student Management System",
        description:
            "Manage student records, grades, and attendance efficiently with this comprehensive system.",
        image: "/project/emschool.webp",
        link: "#",
        icons: [
            "fa-brands fa-laravel fa-lg text-[#FF2D20]",
            "fa-brands fa-vuejs fa-lg text-[#42b883]",
            "nline-block w-6 h-6 bg-[url('https://www.svgrepo.com/show/374118/tailwind.svg')] bg-contain bg-no-repeat",
            "fa-brands fa-php fa-lg text-[#8892BF]",
        ],
    },
    {
        id: 2,
        title: "Academic Website",
        description:
            "A modern academic website with a clean design and user-friendly interface.",
        image: "/project/academy.webp",
        link: "https://academy-one-flame.vercel.app/",
        icons: [
            "fa-brands fa-react fa-lg text-[#61DAFB]",
            "nline-block w-6 h-6 bg-[url('https://www.svgrepo.com/show/374118/tailwind.svg')] bg-contain bg-no-repeat",
        ],
    },
    {
        id: 3,
        title: "Modern Blog Website",
        description:
            "A modern blog website with a clean design and user-friendly interface.",
        image: "/project/tail-news.webp",
        link: "https://tail-news.vercel.app",
        icons: [
            "fa-brands fa-react fa-lg text-[#61DAFB]",
            "nline-block w-6 h-6 bg-[url('https://www.svgrepo.com/show/374118/tailwind.svg')] bg-contain bg-no-repeat",
        ],
    },
    {
        id: 4,
        title: "Tutors - Online Tutoring Platform",
        description:
            "An online platform connecting students with tutors for personalized learning.",
        image: "/project/tutors.webp",
        link: "https://tutors-silk.vercel.app",
        icons: [
            "fa-brands fa-react fa-lg text-[#61DAFB]",
            "nline-block w-6 h-6 bg-[url('https://www.svgrepo.com/show/374118/tailwind.svg')] bg-contain bg-no-repeat",
        ],
    }
]);
</script>

<template>
    <section class="py-8" id="projects">
        <h4 class="text-center font-sans font-bold text-4xl md:text-5xl">
            A small selection of <span class="text-[#CBACF9]">recent projects</span>
        </h4>

        <!-- project card -->
        <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <LazyProjectCard v-for="project in projects" :key="project.id" :id="project.id" :title="project.title"
                :description="project.description" :image="project.image" :link="project.link" :icons="project.icons" />
        </div>
    </section>
</template>
