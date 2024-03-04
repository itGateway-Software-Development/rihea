<template>
  <nav class="nav1 top-bg-color">
    <div class="">
      <div class="d-flex me-3">
        <div class="email d-flex pt-2 me-3">
          <i class="bx bx-envelope me-2 fs-5"></i>
          <p class="">www.rihea.education</p>
        </div>

        <div class="phone d-flex pt-2">
          <i class="bx bx-phone me-2 fs-5"></i>
          <p>09 - 942 000 120</p>
        </div>
      </div>
    </div>
  </nav>
  <header
    class="header main-bg shadow"
    ref="header"
    :class="{ stick: isTop >= 35 }"
  >
    <div class="brand pointer" @click="goHome">
      <router-link to="/"
        ><img src="@/assets/images/logo.png" alt=""
      /></router-link>
      <div class="mt-3 ms-2">
        <p>
          <span>RIHEA</span><br />
          Education Center
        </p>
      </div>
    </div>
    <i
      @click="isResponsive = !isResponsive"
      class="bx bx-menu"
      :class="{ 'bx-x': isResponsive }"
      id="menu-icon"
    ></i>
    <nav class="navbar" :class="{ active_mobile: isResponsive }">
      <ul>
        <li class="dropdown">
          <a
            class="pointer"
            @click="isHome = !isHome"
            :class="{
              active: isActiveRoute,
            }"
            >Home<i class="bx bx-chevron-down"></i
          ></a>
          <ul v-if="isHome">
            <li><router-link to="/about-us">About Us</router-link></li>
            <!-- <li><router-link to="/contact-us">Contact Us</router-link></li> -->
            <li><router-link to="/our-services">Our Services</router-link></li>
            <li>
              <router-link to="/students-activities"
                >Our Activities</router-link
              >
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a
            class="pointer"
            @click="isCourse = !isCourse"
            :class="{
              active: currentRoute.substring(0, 14) == '/course-detail',
            }"
            >Courses <i class="bx bx-chevron-down"></i
          ></a>
          <ul v-if="isCourse">
            <li>
              <router-link
                :to="{ name: 'CourseDetail', params: { slug: 'pre-ged' } }"
                >Pre GED</router-link
              >
            </li>
            <li><router-link to="/course-detail/ged">GED</router-link></li>
            <li>
              <router-link to="/course-detail/pre-igcse">Pre IGCSE</router-link>
            </li>
            <li>
              <router-link to="/course-detail/o-igcse"
                >O Level IGCSE</router-link
              >
            </li>
            <li>
              <router-link to="/course-detail/eng-4-skills"
                >Eng 4 Skills</router-link
              >
            </li>
          </ul>
        </li>
        <!-- <li class="dropdown">
                    <a class="pointer" @click="isCampus = !isCampus" :class="{active: currentRoute.substring(0,7) == '/campus'}">Campuses <i class='bx bx-chevron-down'></i></a>
                    <ul v-if="isCampus">
                        <li><router-link to="/campus/campus1">Campus 1</router-link></li>
                        <li><router-link to="/campus/campus2">Campus 2</router-link></li>
                        <li><router-link to="/campus/campus3">Campus 3</router-link></li>
                        <li><router-link to="/campus/campus4">Campus 4</router-link></li>
                        <li><router-link to="/campus/campus5">Campus 5</router-link></li>
                        <li><router-link to="/campus/campus6">Campus 6</router-link></li>
                    </ul>
                </li> -->
        <li><router-link to="/partners">Partners</router-link></li>
        <li><router-link to="/all-blogs">Blog</router-link></li>
        <li><router-link to="/videos">Vlog</router-link></li>
        <li class="contact"><a href="/contact-us">Contact Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    let router = useRouter();
    let isResponsive = ref(false);
    let isHome = ref(false);
    let isCourse = ref(false);
    let isCampus = ref(false);
    let goHome = () => router.push("/");
    let browserWidth = ref(window.innerWidth);
    let currentRoute = ref("");
    let header = ref("");
    let isTop = ref(false);

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const headerTop = header.value ? header.value.offsetTop : 0;
      isTop.value = scrollTop > headerTop ? scrollTop - headerTop : 0;
    });

    let resize = () => {
      browserWidth.value = window.innerWidth;
      if (browserWidth.value > 850) {
        isHome.value = isCourse.value = isCampus.value = true;
      } else {
        isHome.value = isCourse.value = isCampus.value = false;
      }
    };

    window.onresize = resize;

    onMounted(() => {
      if (browserWidth.value > 850) {
        isHome.value = isCourse.value = isCampus.value = true;
      }
    });

    //for route active
    router.afterEach((to) => {
      currentRoute.value = to.path;
    });

    let isActiveRoute = computed(() => {
      let routes = ["/about-us", "/contact-us", "/our-services"];
      return routes.includes(currentRoute.value);
    });

    return {
      isResponsive,
      goHome,
      isHome,
      isCourse,
      isCampus,
      currentRoute,
      isActiveRoute,
      header,
      isTop,
    };
  },
};
</script>

<style scoped>
.navbar ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
}

.nav1 {
  height: 35px;
  padding: 10px 14% 0px;
  display: flex;
  justify-content: end;
  align-items: center;
}
.nav1 p {
  font-size: 15px;
  color: #d1ac18;
}

.email i,
.phone i {
  color: #d1ac18;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 15px;
  color: #403174;
  white-space: nowrap;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
}

.navbar .contact a {
  background: var(--main-text-color);
  text-align: center;
  padding: 8px 10px;
  margin-left: 20px;
  border-radius: 7px;
  color: var(--main-color);
  font-size: 13px;
}

.navbar .contact a:hover {
  color: #fff;
}

.navbar a i,
.navbar a:focus i {
  font-size: 13px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar a:hover i {
  color: #e9b313;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #23085a;
  border-bottom: 5px solid #e9b313;
  box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
}

.navbar .dropdown ul li {
  min-width: 150px;
}

.navbar .dropdown ul a {
  padding: 10px 15px 5px;
  text-transform: none;
  font-weight: normal;
}

.navbar .dropdown ul a {
  color: #fff;
}

.navbar .dropdown ul a:hover {
  color: #e9b313;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  visibility: visible;
  top: 100%;
}

.header {
  width: 100%;
  height: 75px;
  padding: 1.9rem 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: #ffffff !important;
}

header.stick {
  position: fixed;
  top: 0;
}

.header .brand {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.header img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.header p {
  font-weight: bold;
  font-size: 18px;
}

.header span {
  font-size: 20px;
}
.router-link-active {
  color: rgb(238, 185, 36) !important;
}

.active {
  color: #e79f19 !important;
}

#menu-icon {
  font-size: 3rem;
  color: var(--text-color);
  display: none;
}

@media (max-width: 1500px) {
  .nav1 {
    height: 25px;
    padding: 10px 7% 0px;
  }

  .nav1 p {
    font-size: 12px;
  }

  .email i,
  .phone i {
    font-size: 15px !important;
    padding-top: 2px;
  }

  .header {
    width: 100%;
    height: 60px;
    padding: 1.5rem 8.5%;
  }

  .header img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .header p {
    font-size: 15px;
  }

  .header span {
    font-size: 18px;
  }

  .navbar a {
    padding: 10px 0 10px 20px;
    font-size: 14px;
  }

  .navbar .contact a {
    font-size: 11px;
  }

  .navbar .dropdown ul li {
    min-width: 130px;
  }

  .navbar .dropdown ul a {
    padding: 7px 10px 5px;
    font-size: 12px;
  }
}

@media (max-width: 850px) {
  .nav1 {
    display: none;
  }
  #menu-icon {
    display: block;
    font-size: 2.5rem;
  }

  .header {
    width: 100%;
    height: 70px;
    padding: 1.9rem 3%;
  }

  header {
    position: fixed !important;
  }

  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0 9% 0 3%;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    display: none;
    background: #2b2e4d;
  }

  .navbar.active_mobile {
    display: block;
  }

  .navbar ul {
    display: inline-block;
    font-size: 1rem;
    margin: 2rem 0;
    padding-left: 20px;
  }

  .navbar .dropdown ul {
    display: block;
    position: static;
    left: 30;
    top: calc(100% + 30px);
    margin-left: 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 2;
    visibility: visible;
    top: 100%;
    background: rgb(74, 39, 106);
    box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
  }

  .navbar a {
    color: #fff;
  }

  .navbar .dropdown ul li a:hover {
    color: #e9b313;
  }
  .navbar .dropdown i {
    color: #fff;
  }

  .navbar .dropdown:hover > ul {
    display: block;
    top: 100%;
  }
  .navbar a,
  .navbar a:focus {
    display: block;
  }
  header.stick {
    position: fixed;
    top: 0px;
  }
}

@media (max-width: 450px) {
  .nav1 {
    display: none;
  }
  .header {
    padding: 1.5rem 7.8%;
  }
  .navbar,
  .navbar ul {
    padding: 0;
  }
  .navbar a {
    padding: 10px 0 10px 10px;
  }
  .navbar .dropdown a {
    font-size: 12px;
  }

  .header img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .header .brand p {
    display: none;
  }
}
</style>
