<template>
    <section class="bg-primary text-white grid grid-cols-5 justify-items-center place-items-center gap-4 p-4">
        <div class="col-span-3">
            <div class="relative border border-primary rounded-lg overflow-hidden">
                <img src="/bg/img-1.png" alt="project" class="w-full h-full object-cover rounded-lg" />

                <!-- project title -->
                <h2 class="font-sans font-bold text-white text-4xl/10 absolute w-2/3 left-10 bottom-14 z-[2]">
                    I prioritize client collaboration, fostering <br />
                    open communication
                </h2>

                <!-- overly background -->
                <div
                    class="absolute inset-0 bg-gradient-to-br from-black via-white/10 to-black opacity-100 rounded-lg z-[1]">
                </div>
            </div>
        </div>
        <div class="col-span-2 flex flex-col gap-y-4">
            <div class="relative flex flex-col justify-center items-center h-full rounded-xl">
                <div class="w-[600px] bg-[url('/bg/box.png')] bg-cover bg-center bg-no-repeat z-[1] rounded-xl p-4">
                    <div class="relative z-[2] h-full py-3">
                        <p class="font-sans font-bold text-3xl px-4 py-5 leading-snug tracking-wide">
                            I’m very flexible with time <br />
                            zone communications
                        </p>
                        <div class="flex items-center justify-between my-5">
                            <button
                                class="border border-[#181f5e] backdrop-filter bg-gradient-to-tr to-[#161A31]/10 from-[#06091F]/10 text-white font-sans py-2.5 px-5 rounded-lg">
                                USA
                            </button>
                            <button
                                class="border border-[#181f5e] backdrop-filter bg-gradient-to-tr to-[#161A31]/10 from-[#06091F]/10 text-white font-sans py-2.5 px-5 rounded-lg absolute top-2/3 left-1/2 transform translate-y-2/3 -translate-x-1/2">
                                Germany
                            </button>
                            <button
                                class="border border-[#181f5e] backdrop-filter bg-gradient-to-tr to-[#161A31]/10 from-[#06091F]/10 text-white font-sans py-2.5 px-5 rounded-lg">
                                Afghanistan
                            </button>
                        </div>
                    </div>

                    <!-- overly background -->
                    <div
                        class="absolute inset-0 bg-gradient-to-bl from-[#070C35] via-white/10 to-[#070C35] opacity-100 rounded-xl z-[1]">
                    </div>
                </div>
            </div>
            <!-- my tech stack -->
            <TechStack />
        </div>
    </section>
</template>
