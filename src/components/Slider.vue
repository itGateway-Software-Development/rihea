<template>
  <div class="slider">
    <div data-aos="zoom-in" class="section-header">
      <h2>Voices from Our Students</h2>
    </div>
    <div class="d-flex justify-content-center align-items-cente">
      <div class="slide-container my-5">
        <div class="slide-content">
          <div class="card-wrapper">
            <swiper
              :slidesPerView="1"
              :slidesPerGroupSkip="1"
              :spaceBetween="30"
              :centerSlide="true"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }"
              :keyboard="{
                enabled: true,
              }"
              :breakpoints="{
                '350': {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                '580': {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                '850': {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
              }"
              :navigation="true"
              :pagination="{
                clickable: true,
                dynamicBullets: true,
              }"
              :modules="modules"
              class="mySwiper"
              id="my-swiper"
            >
              <swiper-slide v-for="(data, index) in datas" :key="index">
                <div class="card-head">
                  <img :src="data.img" alt="" />
                  <div class="card-content">
                    <p class="">{{ data.description }}</p>
                    <h4 class="">{{ data.name }}</h4>
                    <p class="collage">({{ data.collage }})</p>
                    <p style="font-size: 14px">RIHEA Alumni</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
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
import { ref } from "vue";
export default {
  components: { Swiper, SwiperSlide },

  setup() {
    const slider = ref(null);
    const datas = ref([
      {
        description:
          "All the teachers are patient, sociable and take care of each student based on our needs. Not only students but also parents can discuss with teachers and the admission team all the time. The best thing I really love is that teaching methods are compiled with a students-centric approach.",
        img: require("../assets/images/stu-voice/1.png"),
        name: "Aung Khant Htoo ",
        collage: "GED Batch 2 ",
      },
      {
        description:
          "The school provides ample opportunities for community service and giving back, which has helped me develop a sense of empathy and social responsibility. And then. It also has a strong support system for students who need additional academic or emotional support.",
        img: require("../assets/images/stu-voice/2.png"),
        name: "Phoo Myat Ingyin",
        collage: "GED Batch 3 ",
      },
      {
        description:
          "RIHEA ကဆရာဆရာမတွေ အကုန်လုံးက ကလေးတွေကို နွေးနွေးထွေးထွေးဆက်ဆံပေးတဲ့အပြင် မရတဲ့စာတွေကိုလည်း စိတ်ရှည်ရှည်နဲ့ ရှင်းပြပေးပါတာလို့ လုံးဝကို 5 stars ပေးပါတယ်ရှင့်။ အဲ့တာကြောင့် RIHEA ကျောင်းကို လာရောက်ဖို့အတွက် ဖိတ်ခေါ်ပါတယ်။",
        img: require("../assets/images/stu-voice/3.png"),
        name: "May Yoon Htet & May Tan Zin ",
        collage: "GED Batch 2 ",
      },
      {
        description:
          "My father investigates for me. After consulting for my education pathway, I decided to attend IGCSE at RIHEA. The teachers are really good at teaching and they care about our studying.",
        img: require("../assets/images/stu-voice/4.png"),
        name: "Kyawt Kay Zin Thwe",
        collage: "IGCSE",
      },
      {
        description:
          "Studying at RIHEA I found many ways that I need to continue on a bright educational path which lays on a foundation for a successful future and I like studying at RIHEA because I feel really familiar with teachers. They teach us very well even though I don't need to attend the extra classes. ",
        img: require("../assets/images/stu-voice/5.png"),
        name: "Thadar Phyu Sin ",
        collage: "IGCSE",
      },
    ]);

    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination, Autoplay],
      datas,
    };
  },
};
</script>

<style scoped>
.slider {
  padding: 50px 15% 10px;
  background: #e8eaf6;
}
.slide-container {
  width: 100%;
  padding: 20px 0;
}
.slide-content {
  margin: 10px 20px;
  overflow: hidden;
}

.card-wrapper .card-head {
  margin-left: 0.4rem;
}

.card-head {
  border-radius: 12px;
  text-align: center;
  padding-top: 10px;
  height: 500px;
}
.card-head img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.card-content {
  padding: 12px 20px;
  text-align: center;
  margin-top: 20px;
}

.card-content p {
  color: #353232 !important;
  font-size: 16px;
}

.card-content h4 {
  font-size: 19px;
  color: #23085a !important;
  margin-bottom: 1rem;
}

.swiper {
  padding-bottom: 50px;
}

@media (max-width: 1600px) {
  .slider {
    padding: 50px 6% 10px;
  }

  .slide-content {
    margin: 10px 50px;
    overflow: hidden;
  }

  .card-head {
    height: 450px;
  }
  .card-head img {
    width: 170px;
    height: 170px;
  }

  .card-content p {
    font-size: 12px;
  }

  .card-content h4 {
    font-size: 16px;
    color: #23085a !important;
    margin-bottom: 1rem;
  }
}

@media (max-width: 850px) {
  .section-header {
    font-size: 1.5rem;
  }
  .slider {
    height: auto;
  }
}
@media (max-width: 450px) {
  .section-header h2 {
    font-size: 1.2rem;
  }
  .slide-content {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
