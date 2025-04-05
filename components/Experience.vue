>
<script setup lang="ts">

interface Experience {
    title: string;
    description: string;
    image: string;
}

const experiences = ref(<Experience[]>[
    {
        title: 'ExperienceCard',
        description: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
        image: '/experience/frontend.svg'
    },
    {
        title: 'Mobile App Dev - JSM Tech',
        description: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
        image: '/experience/mobile.svg'
    },
    {
        title: 'Freelance App Dev Project',
        description: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
        image: '/experience/freelance.svg'
    },
    {
        title: 'Lead Frontend Developer',
        description: 'Developed and maintained user-facing features using modern frontend technologies.',
        image: '/experience/lead-frontend.svg'
    }
])

</script>


<template>
    <section class="bg-primary text-white p-5">
        <h4 class="text-center font-sans font-bold text-4xl md:text-5xl">
            Experience with <span class="text-[#CBACF9]">cutting-edge technologies</span>
        </h4>
        <!-- experience card -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-36 mt-10">
            <LazyExperienceCard v-for="(experience, index) in experiences" :key="index" :title="experience.title"
                :description="experience.description" :image="experience.image" />
        </div>
    </section>
</template>