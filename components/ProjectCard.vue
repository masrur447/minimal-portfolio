<script setup lang="ts">


defineProps({
    id: Number,
    title: String,
    description: String,
    image: String,
    link: String,
    icons: Array<String>,
});
</script>

<template>
    <div class="relative bg-gradient-to-br to-[#04071D] from-[#0C0E23]/25 rounded-lg overflow-hidden shadow-lg p-6">
        <div class="bg-[#13162D] p-6 pb-0 rounded-lg">
            <img :src="image" alt="project-{{ id }}" class="w-full h-full object-cover rounded-lg" />
            <!-- overly image -->
            <div class="absolute inset-0 top-0 left-0 bg-[url('/project/bg.webp')] bg-cover opacity-65"></div>
        </div>
        <div class="relative py-3">
            <h4 class="font-bold text-lg line-clamp-1 md:text-[32px] md:leading-9">
                {{ title }}
            </h4>
            <p class="text-sm md:text-xl line-clamp-2 py-2">
                {{ description }}
            </p>
            <div
                class="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between  space-y-2 md:space-y-0 py-2">
                <div class="flex space-x-3 items-center justify-center">
                    <i v-for="(icon, i) in icons" :key="i" :class="icon" />
                </div>
                <a :href="link"
                    class="font-medium text-base md:text-xl tracking-[-.48px] text-[#CBACF9] flex items-center justify-center rounded-full mr-2 hover:text-[#A78BFA] transition duration-300 ease-in-out"
                    target="_blank">
                    Check Live Site
                    <i class="fa-solid fa-arrow-right nline-block -rotate-45 ml-1"></i>
                </a>
            </div>
        </div>
    </div>
</template>
