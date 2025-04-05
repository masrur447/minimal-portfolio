<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    image: String
});
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-[#00042D] p-8 rounded-lg">
        <div class="relative flex flex-col md:flex-row items-center justify-start gap-4">
            <div class="avatar w-[94] h-[87] overflow-hidden">
                <img :src="image" alt="Experience" class="object-cover rounded-lg" />
            </div>
            <div class="experience-details mt-4">
                <h5 class="text-[26px] font-bold">{{ title }}</h5>
                <p class="text-base">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
