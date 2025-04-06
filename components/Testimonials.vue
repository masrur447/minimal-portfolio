<template>
    <section class="bg-primary p-4" id="testimonials">
        <h5 class="text-center font-sans font-bold text-3xl md:text-5xl leading-normal">
            Kind words from <span class="text-[#CBACF9]">satisfied clients</span>
        </h5>
        <!-- testimonials -->
        <div class="relative gap-4 py-10">
            <LazyCarousel :gap="20" snap-align="center" :items-to-show="1" :items-to-scroll="1" :wrap-around="true"
                :autoplay="3000" :pause-autoplay-on-hover="true" :mouse-drag="true" :touch-drag="true"
                :mouse-wheel="{ threshold: 20 }" :transition="500" :breakpoints="{
                    700: {
                        itemsToShow: 2,
                        snapAlign: 'center',
                    },
                    1000: {
                        itemsToShow: 1.5,
                        snapAlign: 'center',
                    },
                }">
                <LazySlide v-for="slide in 10" :key="slide">
                    <LazyCarouselItem />
                </LazySlide>
            </LazyCarousel>
        </div>
        <!-- logos -->
        <LazyLogos />
    </section>
</template>
