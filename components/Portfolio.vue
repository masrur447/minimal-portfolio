<template>
    <section class="bg-primary text-white p-4">
        <div class="grid grid-cols-1 md:grid-cols-5 justify-items-center place-items-center gap-4">
            <div class="md:col-span-3">
                <div class="relative border border-primary rounded-lg overflow-hidden">
                    <img src="/bg/img-1.png" alt="project" class="w-full h-full object-cover rounded-lg" />

                    <!-- project title -->
                    <h2
                        class="font-sans font-bold text-white text-lg md:text-4xl/10 absolute w-2/3 left-10 bottom-14 z-[2]">
                        I prioritize client collaboration, fostering <br />
                        open communication
                    </h2>

                    <!-- overly background -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-black via-white/10 to-black opacity-100 rounded-lg z-[1]">
                    </div>
                </div>
            </div>
            <div class="md:col-span-2 flex flex-col gap-y-4">
                <!-- flexible time -->
                <div class="relative flex flex-col justify-center items-center rounded-xl">
                    <div
                        class="w-full md:w-[600px] bg-[url('/bg/box.png')] bg-cover bg-center bg-no-repeat z-[1] rounded-xl p-4">
                        <div class="relative z-[2] h-full py-5">
                            <p class="font-sans font-bold text-base md:text-3xl px-4 py-6 leading-snug tracking-wide">
                                I’m very flexible with time <br />
                                zone communications
                            </p>
                            <div class="flex items-center justify-between space-y-2 py-5">
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
                <LazyTechStack />
            </div>
        </div>
        <!-- box 2 -->
        <div class="relative grid grid-cols-1 md:grid-cols-5 justify-items-center place-items-center gap-4">
            <!-- left box -->
            <div class="col-span-2">
                <div class="flex flex-col items-center justify-center gap-3 rounded-lg">
                    <!-- box 1 -->
                    <div class="relative w-full h-44 border p-2 bg-[#04071D] rounded-xl border-transparent">
                        <p class="font-sans font-bold text-2xl leading-relaxed z-[2]">Tech enthusiast with a passion for
                            development.</p>
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-black/75 via-white/10 to-black/55 opacity-100 rounded-xl z-[1]">
                            <img src="/bg/section-input.png" class="absolute right-0 bottom-0">
                        </div>
                    </div>
                    <!-- box 2 -->
                    <div
                        class="relative flex flex-col items-center justify-center w-full h-44 border p-2 bg-[#04071D] rounded-xl border-transparent">
                        <p class="font-sans font-bold text-2xl leading-relaxed text-center z-[2]">Do you want to start a
                            project
                            together?</p>
                        <button
                            class="flex items-center justify-center gap-x-1.5 text-sm font-sans text-white bg-[#181f5e] py-2 px-4 rounded-lg mt-3 cursor-pointer z-[2]">
                            <Icon name="ph:copy-thin" class="inline-block" />
                            Copy my email address
                        </button>
                        <div class="z-[1]">
                            <img src="/bg/backgroundblobservicepng.png" class="absolute left-0 bottom-0 rounded-lg">
                        </div>
                    </div>
                </div>
            </div>
            <!-- right box -->
            <div class="col-span-3">
                <div class="relative bg-[#04071D] w-full rounded-lg">
                    <div class="flex flex-col md:flex-row p-3">
                        <div class="relative flex flex-col items-center justify-center">
                            <p class="text-base">The Inside Scoop</p>
                            <h3 class="font-sans font-bold md:text-[32px] text-center">Currently building a
                                JS Animation library</h3>
                        </div>
                        <div class="relative">
                            <img src="/bg/code.png" class="size-full object-cover rounded-lg">
                        </div>
                    </div>
                    <!-- overly image -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-[1]">
                        <img src="/bg/code-bg.png" class="size-full object-contain">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
