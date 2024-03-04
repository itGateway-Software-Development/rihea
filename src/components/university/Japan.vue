<template>
    <div class="university-detail">
        <div class="header">
            <h2>GED လက်ခံသော ဂျပန်နိုင်ငံရှိ Universities များ </h2>
        </div>

        <div class="content">
            <div class="university" v-for="(university, i) in universities" :key="i">
                <div class="img">
                    <img :src="university.img" alt="">
                </div>
                <h2>{{university.title}}</h2>
                <p>
                    {{ university.content }}
                </p>
                <div class="program" v-html="university.program"></div>
                <p>
                    ကျောင်းအကြောင်းအသေးစိတ်သိရှိလိုပါက အောက်ပါ Website ကတစ်ဆင့်ဖတ်နိုင်ပါပြီ။
                </p>
                <span>
                    Official Website : <a :href="university.link" target="_blink"> {{university.link}}</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
    export default {
        setup() {
            const universities = [
                {
                    img: require('@/assets/images/japan-school/7.jpg'),
                    title: "Tokyo International University",
                    content: "Tokyo International University ဆိုသည်မှာ International University တစ်ခုဖြစ်ပြီး Undergraduate, Postgraduate Degrees တွေကို English လိုသင်ကြားပို့ချပေးလျက်ရှိပါတယ်။ နိုင်ငံတကာကျောင်းသားပေါင်း 1,400 ကျော်က တက်ရောက်လျက်ရှိပြီး ဂျပန်နိုင်ငံအပြင် နိုင်ငံပေါင်း ၂ နိုင်ငံမှာ Campuses 4 ခု ဖွင့်လှစ်ထားလျက်ရှိပါတယ်။",
                    link: "https://www.tiu.ac.jp/"
                },
                {
                    img: require('@/assets/images/japan-school/3.jpg'),
                    title: "𝐊𝐞𝐢𝐨 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲, 𝐓𝐨𝐤𝐲𝐨",
                    content: "နိုင်ငံတကာအခွင့်အလမ်းတွေပေါများလှတဲ့ Keio University က Tokyo ရဲ့နာမည်ကြီး University တစ်ခုလည်းဖြစ်ပါတယ်။ 1858 ခုနှစ်ကတည်းက တည်ထောင်ထားပြီး နှစ်ပေါင်း ၁၆၀ ကျော်သက်တမ်းရှိတဲ့ University တစ်ခုလည်းဖြစ်ပါတယ်။",
                    link: "https://www.keio.ac.jp/en/"
                },
                {
                    img: require('@/assets/images/japan-school/9.jpg'),
                    title: "𝐖𝐚𝐬𝐞𝐝𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲, 𝐓𝐨𝐤𝐲𝐨",
                    content: "1882 ခုနှစ်ကတည်းက တည်ထောင်ထားတဲ့ Public University တစ်ခုလည်းဖြစ်ပါတယ်။ QS World Ranking #200 အတွင်းမှာတည်ရှိပြီး Overall Stars 3.8 ရရှိထားတဲ့ကျောင်းလည်းဖြစ်ပါတယ်။",
                    link: "https://www.waseda.jp/top/"
                },
                {
                    img: require('@/assets/images/japan-school/4.jpg'),
                    title: "𝐒𝐨𝐩𝐡𝐢𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲, 𝐓𝐨𝐤𝐲𝐨",
                    content: "ဂျပန်နိုင်ငံရဲ့ Top 3 Private University စာရင်းထဲမှာ ပါဝင်တဲ့ Sophia University မှာလည်း မြန်မာကျောင်းသားတွေအတက်များပါတယ်နော်။ 2023 ခုနှစ်မှာဆိုရင် 12,080 သော Undergraduate ကျောင်းသားတွေတက်ရောက်ခဲ့ပြီး Postgraduate ကျောင်းသားပေါင်း 1,357 ဝန်းကျင်ရှိပါတယ်။ Undergraduate Faculities 9 ခုရှိပြီး Graduate Schools 10 ခုရှိတဲ့အတွက်ကြောင့် ရွေးချယ်စရာ Programs တွေများပြားတဲ့ကျောင်းလည်းဖြစ်ပါတယ်။။",
                    link: "https://www.sophia.ac.jp/eng/"
                },

                {   img: require('@/assets/images/japan-school/2.jpg'),
                    title: "𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐂𝐡𝐫𝐢𝐬𝐭𝐢𝐚𝐧 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲, 𝐓𝐨𝐤𝐲𝐨",
                    content: "ICU လို့လူအသိများပြီး 1949 ခုနှစ်ကတည်းကတည်ထောင်ထားတဲ့ Private University တစ်ခုဖြစ်ပါတယ်။",
                    link: "https://www.icu.ac.jp/en/"
                },
                {   img: require('@/assets/images/japan-school/8.jpg'),
                    title: "𝐑𝐢𝐭𝐬𝐮𝐦𝐞𝐢𝐤𝐚𝐧 𝐀𝐬𝐢𝐚 𝐏𝐚𝐜𝐢𝐟𝐢𝐜 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 (𝐀𝐏𝐔), 𝐁𝐞𝐩𝐩𝐮",
                    content: "မြန်မာကျောင်းသားတွေကြား နာမည်ကြီးလှတဲ့ APU ကတော့ GED ကို တရားဝင်လက်ခံပြီး မြန်မာကျောင်းသားများအတွက် Up to 100% အထိ Scholarship ပေးနေတဲ့ကျောင်းလည်းဖြစ်ပါတယ်။ Business နဲ့နာမည်ကြီးတဲ့အတွက်ကြောင့် စီးပွားရေးနဲ့ပတ်သက်ပြီး တက်ဖို့ စိတ်ဝင်စားသူများ တစ်ချက် စစ်ဆေးကြည့်ပါနော်။ English Track Programs တွေလည်းရှိပါတယ်။",
                    link: "https://en.apu.ac.jp/home/"
                },
                {   img: require('@/assets/images/japan-school/10.jpg'),
                    title: "𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐨𝐟 𝐉𝐚𝐩𝐚𝐧, 𝐔𝐨𝐧𝐮𝐦𝐚",
                    content: "International University of Japan က မြစ်တွေ၊ တောင်တန်းတွေနဲ့ လှပလှတဲ့ ဂျပန်နိုင်ငံ Uonuma မြို့မှာတည်ရှိပြီး နိုင်ငံပေါင်း ၆၀ နိုင်ငံက နိုင်ငံတကာကျောင်းသားတွေကတက်ရောက်လျက်ရှိပါတယ်။ Courses တွေကိုလည်း English လို သင်ကြားပို့ချပေးလျက်ရှိပါတယ်။",
                    link: "https://www.iuj.ac.jp/"
                },
                {   img: require('@/assets/images/japan-school/11.jpg'),
                    title: "𝐊𝐚𝐧𝐝𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐨𝐟 𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐒𝐭𝐮𝐝𝐢𝐞𝐬, 𝐂𝐡𝐢𝐛𝐚",
                    content: "Makuhari, Mihama-ku, Chiba မှာရှိတဲ့ Kanda University of International Studies ကလည်း GED ကိုလက်ခံပါတယ်တဲ့။",
                    link: "https://www.kandagaigo.ac.jp/kuis/"
                },
                {   img: require('@/assets/images/japan-school/6.jpg'),
                    title: "𝐊𝐚𝐧𝐚𝐳𝐚𝐰𝐚 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲, 𝐈𝐬𝐡𝐢𝐤𝐚𝐰𝐚",
                    content: "Ishikawa , Nonoichi မြို့မှာရှိတဲ့ Kanazawa Institute of Technology မှာ အောက်ပါ Undergraduate Programs တွေအပြင် Postgraduate Programs တွေကိုလည်း သင်ကြားနိုင်မှာဖြစ်ပါတယ်။",
                    program: `
                        <h5>
                            𝐔𝐧𝐝𝐞𝐫𝐠𝐫𝐚𝐝𝐮𝐚𝐭𝐞 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐬
                        </h5>
                        <div>📌 College of Engineering (6 Departments)</div>
                        <div>📌 College of Environmental Engineering and Architecture (5 Departments)</div>
                        <div>📌 College of Informatics and Human Communication (4 Departments)</div>`,
                    link: "https://www.kandagaigo.ac.jp/kuis/"
                },
            ];

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {universities}
        }
    }
</script>

<style >
    .university-detail {
        padding: 30px 3%;
    }

    .university-detail .header {
        text-align: center;
        background: var(--main-color);
        padding: 15px 20px;
        border-radius: 7px;
    }

    .university-detail .header h2 {
        color: var(--main-text-color);
        font-weight: bold;
    }

    .university-detail .content {
        margin: 50px 0 20px;
        display: flex;
        flex-wrap: wrap;
    }

    .university-detail .university {
        width: 48%;
        margin-bottom: 70px;
    }

    .university-detail .university .img {
       display: flex;
       justify-content: center;
       margin-bottom: 20px;
    }

    .university-detail .university img {
        width: 80%;
        border-radius: 20px;
    }

    .university-detail .university h2 {
        font-weight: bold;
        text-align: center;
        color: var(--main-text-color);
        margin-bottom: 20px;
        padding: 0 3%;
    }

    .university-detail .university p {
        padding: 0 9%;
        font-size: 17px;
        line-height: 30px;
        text-align: justify;
        text-indent: 50px;
    }

    .university-detail .university .program {
        padding: 0 9%;
        margin: 20px 0;
    }

    .university-detail .university span {
        padding: 0 9%;
        display: inline-block;
        margin-top: 20px;
        font-size: 18px;
        font-weight: bold;
    }

    @media (max-width: 1600px) {
        .university-detail {
            padding: 30px 3%;
        }
    
        .university-detail .header {
            padding: 10px 15px 7px;
        }
    
        .university-detail .header h2 {
            font-size: 28px;
        }
    
        .university-detail .university {
            width: 48%;
            margin-bottom: 70px;
        }
    
        .university-detail .university img {
            width: 70%;
        }
    
        .university-detail .university h2 {
            margin-bottom: 20px;
            font-size: 24px;
        }
    
        .university-detail .university p {
            padding: 0 9%;
            font-size: 14px;
            line-height: 25px;
            text-indent: 50px;
        }
    
        .university-detail .university .program {
            padding: 0 9%;
            margin: 20px 0;
        }
    
        .university-detail .university span {
            padding: 0 9%;
            margin-top: 10px;
            font-size: 14px;
        }
    }

    @media (max-width: 1200px) {
        .university-detail {
            padding: 30px 0%;
        }

        .university-detail .university img {
            width: 80%;
        }
    }

    @media (max-width: 920px) {
        .university-detail .university {
            width: 95%;
            margin-bottom: 70px;
        }

        .university-detail .university p {
            font-size: 16px;
            line-height: 30px;
        }
    
        .university-detail .university span {
            font-size: 15px;
        }
    }

    @media (max-width: 500px) {
        .university-detail .university h2 {
            font-size: 20px;
        }
    }
</style>
