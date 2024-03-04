<template>
    <div class="ged-country">
        <div class="content">
            <h2>GED လက်ခံသော ဂျပန်နိုင်ငံရှိ Universities များ</h2>
            <router-link to="/ged-university/japan">Read Detail <i class="fa-solid fa-arrow-right ps-3"></i></router-link>
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
                <swiper-slide v-for="i in 11" :key="i" class="swiper-slide">
                    <div class="img-card">
                        <img :src="require(`@/assets/images/japan-school/${i}.jpg`)" alt="">
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

<style >
    .ged-country {
        padding: 60px 15% 40px;
        background: #fff;
        display: flex;
        align-items: center;
        gap: 60px;
        padding-bottom: 120px;
    }

    .ged-country > div.school-wrapper {
        width: 700px;
    }

    .ged-country .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .ged-country .content h2 {
        font-size: 35px;
        font-weight: bold;
        color: rgb(170, 122, 0);
        text-align: center;
    }

    .ged-country .content a {
        text-decoration: none;
        font-weight: bold;
        color: #24057c;
    }

    .ged-country .content a i {
        color: #24057c;
        font-size: 20px;
    }

    .ged-country .img-card img {
        width: 100%;
        height: 450px;
        object-fit: fill;
        border-radius: 50px;
    }

    @media (max-width: 1500px) {
        .ged-country {
            padding: 60px 9% 40px;
            gap: 60px;
            padding-bottom: 120px;
        }
    
        .ged-country > div.school-wrapper {
            width: 700px;
        }
    
        .ged-country .content h2 {
            font-size: 30px;
        }
    
    
        .ged-country .img-card img {
            width: 100%;
            height: 400px;
            object-fit: fill;
        }
    }

    @media (max-width: 1250px) {
        .ged-country {
            padding: 60px 9% 40px;
            gap: 60px;
            padding-bottom: 100px;
        }
    
        .ged-country > div.school-wrapper {
            width: 600px;
        }
    
        .ged-country .content h2 {
            font-size: 30px;
        }
    
    
        .ged-country .img-card img {
            height: 430px;
            object-fit: fill;
        }
    }

    @media (max-width: 1110px) {
        .ged-country {
            padding: 60px 3% 40px;
            gap: 60px;
            padding-bottom: 100px;
        }
    
        .ged-country > div.school-wrapper {
            width: 600px;
        }
    
        .ged-country .content h2 {
            font-size: 24px;
        }
    
    
        .ged-country .img-card img {
            height: 400px;
            object-fit: fill;
        }
    }

    @media (max-width: 850px) {
        .ged-country {
            padding: 60px 3% 40px;
            gap: 60px;
            flex-wrap: wrap;
            padding-bottom: 100px;
            justify-content: center;
        }
    
        .ged-country > div.school-wrapper {
            width: 600px;
        }
    
        .ged-country .content h2 {
            font-size: 24px;
        }
    
    
        .ged-country .img-card img {
            height: 400px;
            object-fit: fill;
        }
    }

    @media (max-width: 680px) {
    
        .ged-country > div.school-wrapper {
            width: 80vw;
        }
    
        .ged-country .content h2 {
            font-size: 24px;
        }
    
    
        .ged-country .img-card img {
            height: auto;
            object-fit: fill;
            border-radius: 10px;
        }
    }

</style>
