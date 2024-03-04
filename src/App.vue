<template>
  <Nav />
  <ChatBot />
  <router-view/>
  <Footer></Footer>
</template>

<script>
  import Nav from './views/Nav.vue'
  import ChatBot from './components/ChatBot.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {Nav, ChatBot, Footer},
  }
</script>

<style>
:root {
  --main-text-color : #e79f19;
  --main-color: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  max-width: 1920px;
  margin: 0 auto;
}

body {
  position: relative;
  background: #fff;
} 

.section-header {
  margin: 20px auto;
}


.section-header h2{
    text-align: center;
    font-size: 2rem;
    color: #23085a;
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .btn {
    background: #23085a;
    color: var(--main-text-color);
    border-radius: 6px;
    font-weight: bold;
    transition: .5s ease;
  }
  .btn:hover {
    color: var(--main-text-color);
    box-shadow: 0 0 1.4rem var(--main-text-color);
    transform: scale(1.03);
  }
  .pointer {
    cursor: pointer;
  }

  .card-wrapper #my-swiper .swiper-button-next::after, .card-wrapper #my-swiper .swiper-button-prev::after{
    font-size: 30px !important;
    margin-bottom: 1.5rem;
    color: var(--main-text-color);
  }

  span {
    color: var(--main-text-color);
  }

</style>
