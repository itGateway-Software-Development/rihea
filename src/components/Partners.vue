<template>
  <div class="partners">
    <div class="header">
      <h2>OUR PARTNERS</h2>
    </div>
    <div class="partner-content">
      <div class="partner-card" v-for="(partner, i) in partners" :key="i">
        <img :src="partner.img" :class="partner.logo" alt="" />
        <div class="site-link">
          <div class="social">
            <a :href="partner.fb" target="_blank"
              ><i class="fa-brands fa-facebook" style="color: #3b5998"></i
            ></a>
            <a target="_blank"
              ><i class="fa-brands fa-instagram" style="color: #e95950"></i
            ></a>
            <a target="_blank"
              ><i class="fa-brands fa-youtube" style="color: #c4302b"></i
            ></a>
            <a target="_blank"
              ><i class="fa-brands fa-twitter" style="color: #00aecc"></i
            ></a>
          </div>
          <a href="#" class="view-profile-btn">View Profile</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const partners = [
      {
        img: require("@/assets/images/partners/1.png"),
      },
      {
        img: require("@/assets/images/partners/2.png"),
      },
      {
        img: require("@/assets/images/partners/3.png"),
      },
      {
        img: require("@/assets/images/partners/4.png"),
      },
      {
        img: require("@/assets/images/partners/5.png"),
        fb: "https://www.facebook.com/pmcedu?mibextid=ZbWKwL",
      },
      {
        img: require("@/assets/images/partners/6.png"),
        logo: "dbu",
        fb: "https://www.facebook.com/devicebusinessuniversity?mibextid=ZbWKwL",
      },
      {
        img: require("@/assets/images/partners/7.png"),
        fb: "https://www.facebook.com/universityoftaxila?mibextid=ZbWKwL",
      },
    ];

    return { partners };
  },
};
</script>

<style scoped>
.partners {
  padding: 80px 15%;
  margin-bottom: 30px;
}

.partners .header {
  text-align: center;
}

.partners .header h2 {
  font-weight: bold;
  font-size: 33px;
}

.partners .partner-content {
  margin: 80px 0 50px;
  display: flex;
  flex-wrap: wrap;
}

.partner-content .partner-card {
  border: 1px solid #e6d7d7;
  padding: 10px;
  overflow: hidden;
  position: relative;
  height: 260px;
  transition: 0.5s ease;
}

.partner-card img {
  width: 300px;
  height: 200px;
  object-fit: contain;
}

.partner-card .dbu {
  background: #0057a7;
}

.partner-card .social {
  display: flex;
  justify-content: center;
  gap: 20px;
  transition: 0.3s ease-out;
}

.partner-card .social a {
  font-size: 20px;
  cursor: pointer;
}

.partner-card .site-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin: 10px auto;
  margin-bottom: 0px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  transform: translateY(0%);
  transition: 0.5s ease;
}

.partner-card:hover {
  background: rgb(231, 229, 229, 0.5);
}

.partner-card:hover .site-link {
  transform: translateY(-40px);
}

.partner-card:hover .site-link .view-profile-btn {
  transform: translateY(0);
}

.partner-card .site-link .view-profile-btn {
  text-decoration: none;
  background: rgb(226, 166, 13);
  padding: 3px 30px;
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  transform: translateY(200%);
  transition: 0.5s ease-in-out;
}

@media (max-width: 1500px) {
  .partners {
    padding: 40px 9%;
    margin-bottom: 30px;
  }

  .partners .header h2 {
    font-size: 30px;
  }

  .partner-content .partner-card {
    height: 210px;
  }
  .partner-card img {
    width: 200px;
    height: 150px;
  }

  .partner-card .social a {
    font-size: 16px;
  }

  .partner-card:hover .site-link {
    transform: translateY(-40px);
  }

  .partner-card .site-link .view-profile-btn {
    padding: 3px 20px;
    font-size: 11px;
    width: 50%;
  }
}

@media (max-width: 1200px) {
  .partners {
    padding: 40px 9%;
    margin-bottom: 0px;
  }

  .partners .header h2 {
    font-size: 28px;
  }
}

@media (max-width: 990px) {
  .partners {
    padding: 40px 9%;
    margin-bottom: 0px;
  }

  .partners .header h2 {
    font-size: 24px;
  }
}

@media (max-width: 510px) {
  .partner-content .partner-card {
    height: 290px;
    margin-bottom: 15px;
  }
  .partner-card img {
    width: 300px;
    height: 200px;
  }

  .partner-card .social a {
    font-size: 20px;
  }

  .partner-card .site-link {
    transform: translateY(-40px) !important;
  }

  .partner-card .site-link .view-profile-btn {
    transform: translateY(0);
  }

  .partner-card .site-link .view-profile-btn {
    padding: 3px 20px;
    font-size: 11px;
    width: 50%;
  }
}
</style>
