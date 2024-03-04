<template>
    <div class="ged-country">
        <div class="content">
            <h2>GED လက်ခံသော တရုတ် နိုင်ငံရှိ Universities များ</h2>
            <router-link to="/ged-university/china">Read Detail <i class="fa-solid fa-arrow-right ps-3"></i></router-link>
        </div>
        <div class="school-wrapper">
            <swiper
                :slidesPerView="1"
                :slidesPerGroupSkip="1"
                :spaceBetween="30"
                :centerSlide="true"
                :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }"
                :keyboard="{
                enabled: true,
                }"
                :breakpoints="{
                    '350': {
                        slidesPerView:1,
                        slidesPerGroup:1,
                        },
                
                }"
                :pagination="{
                    clickable: true,
                    dynamicBullets:true,
                }"
                :modules="modules"
                class="mySwiper"
                id="my-swiper"
                >
                <swiper-slide v-for="i in 8" :key="i" class="swiper-slide">
                    <div class="img-card">
                        <img :src="require(`@/assets/images/china-school/${i}.jpg`)" alt="">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";

    import "swiper/css/scrollbar";
    import "swiper/css/navigation";
    import "swiper/css/pagination";


    // import required modules
    import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
    import { ref } from 'vue';
    export default {
        components: {Swiper,SwiperSlide,},

        setup() {
            const slider = ref(null);
            return {modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        },
    }
</script>

<style scoped>
</style>