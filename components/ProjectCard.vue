<script setup lang="ts">
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}
defineProps({
    projects: {
        type: Array as () => Project[],
        required: true,
    },
});
</script>

<template>
    <div class="relative bg-gradient-to-br to-[#04071D] from-[#0C0E23]/25 rounded-lg overflow-hidden shadow-lg p-6"
        v-for="project in projects" :key="project.id">
        <div class="bg-[#13162D] p-6 pb-0 rounded-lg">
            <img :src="project.image" alt="project-1" class="w-full h-full object-cover rounded-lg" />
            <!-- overly image -->
            <div class="absolute inset-0 top-0 left-0 bg-[url('/project/bg.png')] bg-cover opacity-65"></div>
        </div>
        <div class="relative py-3">
            <h4 class="font-bold text-lg line-clamp-1 md:text-[32px] md:leading-9">
                {{ project.title }}
            </h4>
            <p class="text-sm md:text-xl line-clamp-2 py-2">
                {{ project.description }}
            </p>
            <div
                class="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between  space-y-2 md:space-y-0 py-2">
                <div class="flex">
                    <button class="flex items-center justify-center w-10 h-10 rounded-full bg-[#13162D] mr-2">
                        <img src="/assets/icons/react.svg" class="size-full object-cover" alt="" />
                    </button>
                    <button class="flex items-center justify-center w-10 h-10 rounded-full bg-[#13162D] mr-2">
                        <img src="/assets/icons/tailwind.svg" class="size-full object-cover" alt="" />
                    </button>
                    <button class="flex items-center justify-center w-10 h-10 rounded-full bg-[#13162D] mr-2">
                        <img src="/assets/icons/typescript.svg" class="size-full object-cover" alt="" />
                    </button>
                    <button class="flex items-center justify-center w-10 h-10 rounded-full bg-[#13162D] mr-2">
                        <img src="/assets/icons/three-js.svg" class="size-full object-cover" alt="" />
                    </button>
                </div>
                <LazyNuxtLink :to="project.link"
                    class="font-medium text-base md:text-xl tracking-[-.48px] text-[#CBACF9] flex items-center justify-center rounded-full mr-2 hover:text-[#A78BFA] transition duration-300 ease-in-out">
                    Check Live Site
                    <Icon name="ph:arrow-up-bold" class="inline-block rotate-45" />
                </LazyNuxtLink>
            </div>
        </div>
    </div>
</template>
