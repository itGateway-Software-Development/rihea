<template>
  <div class="videos">
    <div class="video-header">
      <span>RIHEA VIDEOS</span>
      <h2>ALL RESOURCE TO HELP YOU INDEED</h2>
    </div>
    <div class="tab shadow">
      <div
        @click="current_tab = 'school'"
        :class="{ active: current_tab == 'school' }"
      >
        School
      </div>
      <div
        @click="current_tab = 'student'"
        :class="{ active: current_tab == 'student' }"
      >
        Students
      </div>
    </div>
    <div class="video-wraper" v-if="current_tab == 'school'">
      <div class="video-card" v-for="(video, i) in school_videos" :key="i">
        <div class="video">
          <video controls>
            <source :src="video.src" />
          </video>
        </div>
        <div class="content">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="title">
            <h2>{{ video.title }}</h2>
            <p>{{ video.intro }}</p>
          </div>
        </div>
      </div>
      <div class="video-card">
        <div class="video">
          <iframe
            class="vid"
            src="https://www.youtube.com/embed/a-j2sYIYFTQ?si=kWY2iyqSBOtYQ2qK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="title">
            <h2>GED Mathematics Subject</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Student videos  -->
    <div class="video-wraper" v-else>
      <div class="video-card">
        <div class="video">
          <iframe
            class="vid"
            src="https://www.youtube.com/embed/rTSje6ej5ow?si=L4ofkAruUQ4jD3h5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="title">
            <h2>𝐎𝐮𝐫 𝐕𝐚𝐥𝐮𝐚𝐛𝐥𝐞 𝐑𝐈𝐇𝐄𝐀𝐢𝐚𝐧𝐬 💎</h2>
            <p>𝖫𝖾𝖺𝗋𝗇𝗂𝗇𝗀 𝗐𝗂𝗍𝗁 𝗎𝗌，𝗆𝗈𝗏𝗂𝗇𝗀 𝗍𝗈 𝖺 𝖻𝗋𝗂𝗀𝗁𝗍𝖾𝗋 𝖿𝗎𝗍𝗎𝗋𝖾！</p>
          </div>
        </div>
      </div>

      <div class="video-card">
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/Tk5GldVoJKw?si=XqRIjr6ZBFs3HzSY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="title">
            <h2>𝐎𝐮𝐫 𝐕𝐚𝐥𝐮𝐚𝐛𝐥𝐞 𝐑𝐈𝐇𝐄𝐀𝐢𝐚𝐧𝐬 💎</h2>
            <p>𝖫𝖾𝖺𝗋𝗇𝗂𝗇𝗀 𝗐𝗂𝗍𝗁 𝗎𝗌，𝗆𝗈𝗏𝗂𝗇𝗀 𝗍𝗈 𝖺 𝖻𝗋𝗂𝗀𝗁𝗍𝖾𝗋 𝖿𝗎𝗍𝗎𝗋𝖾！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let current_tab = ref("school");

    let school_videos = [
      {
        src: require("@/assets/videos/science.mp4"),
        title: "𝐆𝐄𝐃 𝐋𝐢𝐟𝐞 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐒𝐮𝐛𝐣𝐞𝐜𝐭 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧",
        intro:
          "GED ရဲ့ science subject ထဲက Life Science အပိုင်းမှာ သင်ကြားရမယ့် Chapter တွေအကြောင်းကို ဆရာမထက်ထက်က အကျဉ်းချုပ် ဝေမျှပေးသွားတာပဲဖြစ်ပါတယ်။",
      },
      {
        src: require("@/assets/videos/math.mp4"),
        title: "How to find the value of slope",
        intro:
          "Line တွေ အကြောင်း လေ့လာ မယ် ဆိုရင် slope, intercept တို့ inequality တို့ဆိုတာ မပါ မဖြစ်ပါပဲ။ အမှတ်၂ မှတ်ပေါ်မှာ မူ တည်ပြီး တော့ slope တန်ဖိုးလေး ကို ဘယ်လို ရှာလဲ ဆိုတာကတော့ video ‌လေးမှာ ကြည့်ရှု့လေ့လာနိုင်ပါတယ်။",
      },
    ];

    return { school_videos, current_tab };
  },
};
</script>

<style scoped>
.videos {
  padding: 30px 15.5%;
}

.video-header {
  text-align: center;
  padding: 30px 0 50px;
}

.video-header h2 {
  font-weight: bold;
}

.videos .tab {
  display: inline-flex;
  margin: 30px 0;
  border-radius: 100px;
  background: rgb(255, 255, 255);
  overflow: hidden;
}

.videos .tab div {
  margin-right: 0px;
  padding: 10px 30px;
  cursor: pointer;
  transition: 0.5s ease-out;
  margin: 10px 5px 10px 10px;
  border-radius: 100px;
}

.videos .tab .active {
  background: #e6eef9;
  color: #185ee0;
  font-weight: bold;
}

.video-wraper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: left;
}

.video-wraper .video-card {
  width: 400px;
}

#app > div.videos > div.video-wraper > div > div.video > video {
  width: 100%;
  height: 220px;
}

.video-wraper .video-card .video iframe {
  width: 400px;
  height: 220px;
}

.video-card .content {
  display: flex;
  gap: 10px;
}

.video-card .logo img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: contain;
}

.video-card .title h2 {
  font-size: 16px;
  font-weight: bold;
}

.video-card .title p {
  font-size: 12px;
  text-align: justify;
}

@media (max-width: 1500px) {
  .videos {
    padding: 30px 9%;
  }
}

@media (max-width: 999px) {
  .videos {
    padding: 30px 3%;
  }
  .video-wraper .video-card {
    width: 350px;
  }

  #app > div.videos > div.video-wraper > div > div.video > video {
    width: 100%;
    height: 220px;
  }

  .video-wraper .video-card .video iframe {
    width: 350px;
    height: 220px;
  }
}

@media (max-width: 770px) {
  .video-wraper .video-card {
    width: 300px;
  }

  #app > div.videos > div.video-wraper > div > div.video > video {
    width: 100%;
    height: 190px;
  }

  .video-wraper .video-card .video iframe {
    width: 300px;
    height: 190px;
  }

  .video-header h2 {
    font-size: 23px;
  }
}

@media (max-width: 660px) {
  .video-header span {
    font-size: 12px;
  }
  .video-header h2 {
    font-size: 18px;
  }

  .videos .tab {
    margin: 20px 0 50px;
  }

  .videos .tab div {
    padding: 5px 20px;
    cursor: pointer;
    transition: 0.5s ease-out;
    margin: 10px 5px 10px 10px;
    border-radius: 100px;
    font-size: 12px;
  }

  .video-wraper {
    justify-content: center;
  }

  .video-wraper .video-card {
    width: 450px;
  }

  #app > div.videos > div.video-wraper > div > div.video > video {
    width: 100%;
    height: 190px;
  }

  .video-wraper .video-card .video iframe {
    width: 450px;
    height: 190px;
  }

  .video-header h2 {
    font-size: 23px;
  }
}

@media (max-width: 490px) {
  .video-wraper .video-card {
    width: 390px;
  }

  #app > div.videos > div.video-wraper > div > div.video > video {
    width: 100%;
    height: 190px;
  }

  .video-wraper .video-card .video iframe {
    width: 390px;
    height: 190px;
  }
}

@media (max-width: 420px) {
  .video-wraper .video-card {
    width: 330px;
  }

  #app > div.videos > div.video-wraper > div > div.video > video {
    width: 100%;
    height: 190px;
  }

  .video-wraper .video-card .video iframe {
    width: 330px;
    height: 190px;
  }
}
</style>
