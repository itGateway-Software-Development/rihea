<template>
    <div class="university-detail">
        <div class="header">
            <h2>GED လက်ခံသော တရုတ်နိုင်ငံရှိ Universities များ </h2>
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
                    Official Website : <a :href="university.link" target="_blink"> {{university.site}}</a>
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
                    img: require('@/assets/images/china-school/2.jpg'),
                    title: "𝐓𝐬𝐢𝐧𝐠𝐡𝐮𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "တရုတ်နိုင်ငံရဲ့ Ranked #1 ထိပ်တန်းတက္ကသိုလ်တစ်ခုဖြစ်ပြီး Best Global Universities စာရင်းမှာလည်း Ranked #23 ရရှိထားတဲ့ကျောင်းဖြစ်ပါတယ်။ တရုတ်ကို ပညာတော်သင်သွားဖို့ ပြင်နေသူတစ်ယောက်ဆိုရင် Tsinghua University ကို လူတိုင်းသိကြမှာပါနော်။ Beijing မှာရှိတဲ့ Public University တစ်ခုဖြစ်ပြီး 1991 ခုနှစ်က စတင်တည်ထောင်ခဲ့တာဖြစ်ပါတယ်။ ရွေးချယ်စရာများပြားတဲ့ Academic Programs တွေ၊ ခမ်းနားထည်ဝါတဲ့ Library တွေလည်းပါရှိပါတယ်။",
                    link: "https://www.tsinghua.edu.cn/en/",
                    site: '𝐓𝐬𝐢𝐧𝐠𝐡𝐮𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲'
                },
                {
                    img: require('@/assets/images/china-school/3.jpg'),
                    title: "𝐂𝐡𝐢𝐧𝐚 𝐌𝐞𝐝𝐢𝐜𝐚𝐥 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 (𝐂𝐌𝐔)",
                    content: "China Medical University (CMU) ကို 1931 ခုနှစ်က စတင်တည်ထောင်ခဲ့ပြီး Ministry of Health (MOH) နဲ့ အချိတ်အဆက်ရှိခဲ့ပါတယ်။ ယခုဆိုလျှင် Ministry of Education, National Health တို့မှ အသိအမှတ်ပြုလက်ခံရရှိထားတဲ့ ဆေးကျောင်းတစ်ကျောင်းလည်းဖြစ်ပါတယ်။ ကျောင်းကို လျှောက်လိုတယ်ဆိုရင် GED Scores 75% or Above ရရှိဖို့ လိုအပ်ပြီး ဘာသာရပ်တစ်ခုစီတိုင်းအတွက် Minimum Scores 150 ရရှိထားဖို့ လိုအပ်ပါတယ်နော်။",
                    link: " https://apply.china-admissions.com/mbbs-at-china-medical-university-cmu/d/pBCMU4250/?fbclid=IwAR05rgr_p7n8payefha64tP22Am65LrJT_JACnV0HK0dSh6fLvQxtWJZEIE",
                    site: '𝐂𝐡𝐢𝐧𝐚 𝐌𝐞𝐝𝐢𝐜𝐚𝐥 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲'
                },
                {
                    img: require('@/assets/images/china-school/4.jpg'),
                    title: "𝐒𝐡𝐚𝐧𝐠𝐡𝐚𝐢 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "တရုတ်နိုင်ငံရဲ့အကြီးဆုံး တက္ကသိုလ်တစ်ခုဖြစ်တဲ့ Shanghai University က “Project 211” ရဲ့ အဖွဲ့ဝင်တစ်ကျောင်းလည်းဖြစ်ပါတယ်။ လက်ရှိ University ရဲ့ President က Professor CHIEN ဖြစ်ပြီး သူက ကျော်ကြားတဲ့ educator, scientist, social activist တစ်ဦးလည်းဖြစ်သလို Chinese Academy of Sciences ရဲ့ အဖွဲ့ဝင်တစ်ယောက်လည်းဖြစ်ပါတယ်။ ဒီကျောင်းကိုလျှောက်မယ်ဆိုရင်တော့ Average Score က 80% or above ရှိဖို့ လိုပါတယ်နော်။",
                    link: " https://apply.shu.edu.cn/",
                    site: '𝐒𝐡𝐚𝐧𝐠𝐡𝐚𝐢 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲'
                },
                {
                    img: require('@/assets/images/china-school/8.jpg'),
                    title: "𝐍𝐚𝐧𝐣𝐢𝐧𝐠 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐨𝐟 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐚𝐧𝐝 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲",
                    content: "Nanjing University of Science and Technology ကလည်း တရုတ်နိုင်ငံရဲ့ အထင်ကရ ကျောင်းတစ်ခုဖြစ်ပါတယ်။ တရုတ်နိုင်ငံရဲ့ လှပတဲ့ Nanjing ပြည်နယ်မှာ တည်ရှိပြီး ကျောင်းပေါင်း ၁၅ နိုင်ငံ၊ အတွေ့အကြုံရှိ Professors ပေါင်း 1,200 ကျော်၊ Bachelor’s , Master’s Degree ကို တက်ရောက်ပညာသင်ကြားနေတဲ့ကျောင်းသားပေါင်း 31,000 ကျော်က တက်ရောက်ပညာသင်ကြားလျက်ရှိတဲ့ ကျောင်းကြီးတစ်ကျောင်းလည်းဖြစ်ပါတယ်။ နိုင်ငံတကာအဆင့်မှီ Academic Programs ပေါင်းများစွာ သင်ကြားပို့ချပေးနေတဲ့အတွက်ကြောင့် နာမည်ကျော်ကြားလှတဲ့ကျောင်းလည်းဖြစ်ပါတယ်နော်။ ဒီလို နာမည်ကျော်ကြားတဲ့အတွက်ကြောင့် ကျောင်းလျှောက်ချင်တယ်ဆိုရင် GED Scores 75% or Above ရှိဖို့ လိုအပ်ပါတယ်နော်။ ဒါ့အပြင် Scholarship တွေလည်းပေးတဲ့အတွက်ကြောင့် Scholarship လျှောက်ချင်တယ်ဆိုရင်တော့ IT ကျောင်းဖြစ်တဲ့အလျောက် Mathematics တို့လို Science Subjects တွေမှာ ထူးချွန်ထားဖို့ လိုပါတယ်။",
                    link: " https://english.njust.edu.cn/",
                    site: '𝐍𝐚𝐧𝐣𝐢𝐧𝐠 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐨𝐟 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐚𝐧𝐝 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲'
                },

                {   img: require('@/assets/images/china-school/6.jpg'),
                    title: "𝐙𝐡𝐞𝐧𝐠𝐳𝐡𝐨𝐮 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "Zhengzhou University ကလည်း တရုတ်နိုင်ငံရဲ့ နာမည်ကြီးကျောင်းအဖွဲ့ဝင်ဖြစ်တဲ့ “211 Project” ရဲ့ အဖွဲ့ဝင် ကျောင်းတစ်ကျောင်းဖြစ်ပါတယ်။ University အနေနဲ့ Zhengzhou University, Zhengzhou University သ် Technology, Henan Medical University ဆိုပြီး ကျောင်းခွဲ ၃ ခုလည်း ခွဲထားပါသေးတယ်။ ကျောင်းလျှောက်ချင်တယ်ဆိုရင် GED Scores 70% or Above ရှိဖို့ လိုအပ်ပါတယ်။",
                    link: " http://english.zzu.edu.cn/",
                    site: '𝐙𝐡𝐞𝐧𝐠𝐳𝐡𝐨𝐮 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲'
                },
                {   img: require('@/assets/images/china-school/5.jpg'),
                    title: "𝐁𝐞𝐢𝐣𝐢𝐧𝐠 𝐅𝐨𝐫𝐞𝐢𝐠𝐧 𝐒𝐭𝐮𝐝𝐢𝐞𝐬 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "မြန်မာနိုင်ငံရဲ့ကျောင်းသားတွေကြား နာမည်ကြီးတဲ့ Beijing Foreign Studies University မှာလည်း GED ကို လက်ခံပါတယ်တဲ့နော်။ 1941 ခုနှစ်ကတည်းက တည်ထောင်ခဲ့ပြီး BFSU က Foreign Language Studies တွေအတွက် ပထမဆုံးတက္ကသိုလ်တစ်ခုလည်းဖြစ်ပါတယ်။ ကိုယ်က တရုတ်စာကို Specilaized သင်ယူချင်တယ်ဆိုရင် BFSU က အကောင်းဆုံးရွေးချယ်မှုတစ်ခုပါပဲ။ BFSU မှာ မြန်မာစာအပြင် Language Literacture တွေကို ပို့ချပေးလျက်ရှိပြီး နိုင်ငံခြားကျောင်းသားတွေ တက်ရောက်ပညာသင်ကြားလျက်ရှိပါတယ်။ ကျောင်းလျှောက်ချင်တယ်ဆိုရင် GED Scores 70% or Above ရှိဖို့ လိုအပ်ပါတယ်။",
                    link: " http://en.bfsu.edu.cn/",
                    site: '𝐁𝐞𝐢𝐣𝐢𝐧𝐠 𝐅𝐨𝐫𝐞𝐢𝐠𝐧 𝐒𝐭𝐮𝐝𝐢𝐞𝐬 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲'
                },
                {   img: require('@/assets/images/china-school/7.jpg'),
                    title: "𝐁𝐞𝐢𝐣𝐢𝐧𝐠 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲",
                    content: "Science, Engineering ကို သင်ယူချင်တယ်ဆိုတဲ့ကျောင်းသားများအတွက် Beijing Institute of Technology က အကောင်းဆုံးရွေးချယ်မှုပါပဲ။ Beijing Institute of Technology ကို 1940 ခုနှစ်ကတည်းက တည်ထောင်ထားပြီး “Project 211” အဖွဲ့ဝင်ကျောင်းလည်းဖြစ်ပါတယ်။ ကျောင်းလျှောက်ချင်တယ်ဆိုရင် GED Total Score 600 နဲ့အထက် ရှိဖို့ လိုအပ်ပါတယ်။",
                    link: "https://english.bit.edu.cn/",
                    site: '𝐁𝐞𝐢𝐣𝐢𝐧𝐠 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲'
                },
                
            ];

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {universities}
        }
    }
</script>

