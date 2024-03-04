<template>
  <div class="home-page">
    <Carousel></Carousel>
    <SchoolInfo></SchoolInfo>
    <ExploreTopCourse></ExploreTopCourse>
    <!-- <WhatIsGED></WhatIsGED> -->
    <SchoolHistory></SchoolHistory>
    <GreetingVideo></GreetingVideo>
    <Slider></Slider>
    <GEDJapan></GEDJapan>
    <GEDKorea></GEDKorea>
    <GEDChina></GEDChina>
    <ImageShow></ImageShow>
    <!-- <OurCampus></OurCampus> -->
    <Partners></Partners>
    <LatestNews></LatestNews>
  </div>
    
</template>

<script>
import Partners from '../components/Partners'
import GEDChina from '../components/GEDChina'
import GEDKorea from '../components/GEDKorea'
import GEDJapan from '../components/GEDJapan'
import GreetingVideo from '../components/GreetingVideo'
import WhatIsGED from '../components/WhatIsGED'
import OurCampus from '../components/OurCampus'
import LatestNews from '../components/LatestNews'
import ImageShow from '../components/ImageShow'
import SchoolInfo from '../components/SchoolInfo'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import SchoolHistory from '../components/SchoolHistory'
import ExploreTopCourse from '../components/ExploreTopCourse'
import Carousel from '../components/Carousel'
import { onMounted } from 'vue'

export default {
  name: 'HomeView',
  components: {
    Partners,
    GEDChina,
    GEDKorea,
    GEDJapan,
    GreetingVideo,
    WhatIsGED,
    OurCampus,
    LatestNews,
    ImageShow,
    SchoolInfo,
    Slider,
    Footer,
    SchoolHistory,
    ExploreTopCourse, Carousel },

  
}
</script>

<style scoped>
  .home-page {
    overflow-x: hidden !important;
  }
  p {
    margin-top: 130px;
  }
  
</style>