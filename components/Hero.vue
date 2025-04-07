<template>
    <section class="flex flex-col items-center justify-center bg-primary text-white py-32 px-5" id="home">
        <p
            class="text-center text-[#E4ECFF] font-sans font-medium text-sm md:text-base/[120%] uppercase tracking-[4px] py-4">
            Dynamic Web Magic with Nuxt.js
        </p>
        <h1 class="hidden md:block font-sans font-bold text-3xl md:text-7xl text-center leading-[1.2]">
            Transforming Concepts into
            <br />
            Seamless <span class="text-[#CBACF9]">User Experiences</span>
        </h1>
        <!-- mobile -->
        <h1 class="md:hidden font-sans font-bold text-3xl md:text-7xl text-center leading-[1.2]">
            Transforming Concepts into Seamless <span class="text-[#CBACF9]">User Experiences</span>
        </h1>
        <!-- desktop -->
        <h2 class="hidden md:block text-center font-sans md:text-2xl/[120%] font-normal space-x-2 capitalize py-5">
            Hi! I’m Eyaheya Masrur, a
            <span class="relative text-transparent inline-block animate-text" style="--i: 1"
                data-text="Next/Nuxt.JS Developer">Next/Nuxt.JS Developer</span>
            <span class="relative text-transparent inline-block animate-text" style="--i: 2"
                data-text="Vue Developer">Vue Developer</span>
            <span class="relative text-transparent inline-block animate-text" style="--i: 3"
                data-text="React Developer">React Developer</span>
            <span class="relative text-transparent inline-block animate-text" style="--i: 4"
                data-text="Laravel Developer">Laravel Developer</span>
            based in Bangladesh.
        </h2>
        <!-- mobile -->
        <h2 class="md:hidden text-center font-sans text-xl font-normal space-x-2 capitalize py-5">
            Hi! I’m Eyaheya Masrur, <br /> a
            <span class="relative text-transparent inline-block animate-text" style="--i: 1"
                data-text="Next/Nuxt.JS Developer">Next/Nuxt.JS Developer</span>
            <span class="relative text-transparent inline-block animate-text" style="--i: 2"
                data-text="Vue Developer">Vue Developer</span>
            <span class="relative text-transparent inline-block animate-text" style="--i: 3"
                data-text="React Developer">React Developer</span>
            <span class="relative text-transparent inline-block animate-text" style="--i: 4"
                data-text="Laravel Developer">Laravel Developer</span>
            <br />
            based in Bangladesh.
        </h2>
        <button
            class="border border-[#CBACF9] bg-[#CBACF9]/[10%] text-white font-sans font-bold text-base/[120%] py-4 px-8 rounded-md hover:bg-transparent hover:text-[#CBACF9] transition duration-300 ease-in-out">
            See My Work
            <i class="fa-solid fa-arrow-right nline-block -rotate-45"></i>
        </button>
    </section>
</template>

<style scoped>
.animate-text {
    -webkit-text-stroke: 0.7px #cbacf9;
    animation: display-text 16s linear infinite;
    animation-delay: calc(-4s * var(--i));
}

@keyframes display-text {

    25%,
    100% {
        display: none;
    }
}

.animate-text::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-right: 2px solid #cbacf9;
    color: #cbacf9;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 4s linear infinite;
}

@keyframes typing {

    10%,
    100% {
        width: 0;
    }

    70%,
    90% {
        width: 100%;
    }
}
</style>
