<template>
    <div class="university-detail">
        <div class="header">
            <h2>GED လက်ခံသော ကိုရီးယားနိုင်ငံရှိ Universities များ </h2>
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
                    img: require('@/assets/images/korea-school/2.jpg'),
                    title: "𝐒𝐔𝐍𝐘 𝐊𝐨𝐫𝐞𝐚",
                    content: "SUNY Korea ကတော့သူ့ရဲ့ Official Website မှာကိုတောင် GED လက်ခံကြောင်းတရားဝင်ပြောထားတဲ့ ကျောင်းဖြစ်ပါတယ်။ SUNY (State University of New York) ကလည်း United States ရဲ့ Public University တစ်ခုဖြစ်ပြီး ၁၉၄၈ ခုနှစ်မှာတည်ထောင်ခဲ့တာဖြစ်ပါတယ်။ SUNY အဖွဲ့မှာ တက္ကသိုလ်ပေါင်း ၆၄ ခုပါဝင်ပြီး State of New York မှာတည်ရှိတဲ့ Stony Brook University, The Fashion Institute of Technology, Binghamton University, The University at Buffalo အစရှိတဲ့ နာမည်ကြီးကျောင်းတွေလည်း ပါဝင်ပါတယ်။",
                    link: "https://www.sunykorea.ac.kr/en/html/sub01/0101.html"
                },
                {
                    img: require('@/assets/images/korea-school/3.jpg'),
                    title: "𝐆𝐞𝐨𝐫𝐠𝐞 𝐌𝐚𝐬𝐨𝐧 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "George Mason University ကတော့ United States, Virginia ပြည်နယ်ရဲ့ အကြီးဆုံး Public Research University တစ်ခုဖြစ်ပါတယ်။ အာရှတစ်ဝှမ်း နိုင်ငံတကာအဆင့်မြင့်ပညာရေးစနစ်ပေးနိုင်စေရန် Incheon Global Campus အဖွဲ့ဝင်အဖြစ် 2014 ခုနှစ်မှာ Korea မှာစတင်တည်ထောင်ခဲ့ခြင်းဖြစ်ပါတယ်။ US နိုင်ငံရဲ့နာမည်ကြီးတက္ကသိုလ်လည်းဖြစ်တဲ့အတွက်ကြောင့် ဒီ University ကို တစ်ချက်စုံစမ်းကြည့်ပါနော်။",
                    link: "https://www.gmu.edu/.../how.../george-mason-university-korea"
                },
                {
                    img: require('@/assets/images/korea-school/4.jpg'),
                    title: "𝐓𝐡𝐞 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐨𝐟 𝐔𝐓𝐀𝐇",
                    content: "The University of UTAH ကလည်း western United States ရဲ့ သက်တမ်းအကြီးဆုံး Institutions တစ်ခုဖြစ်ပြီး 1850 ခုနှစ်ကတည်းက World-Class Education ကို ပေးလျက်ရှိပါတယ်။ University of Utah Asia Campus ကလည်း US မှာရှိတဲ့ ပညာရေးနဲ့တန်းတူ အဆင့်မြင့်ပညာရေးစနစ်ကို ပေးလျက်ရှိပြီး ကျောင်းသားတွေကို Asia မှာရော United States မှာပါ ပညာသင်ကြားနိုင်စေမယ့် အခွင့်အလမ်းတွေကို ဖန်တီးပေးလျက်ရှိပါတယ်။",
                    link: "https://asiacampus.utah.edu/"
                },
                {
                    img: require('@/assets/images/korea-school/5.jpg'),
                    title: "𝐒𝐨𝐠𝐚𝐧𝐠 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "Center of Youth လို့တင်စားခေါ်ဝေါ်ရပြီး Korean Culture အငွေ့အသက်အပြည့်ကို ခံစားစေရမယ့် Sogang University က Seoul မြို့ Sinchon မှာတည်ရှိပါတယ်။ နိုင်ငံပေါင်း ၈၀ နိုင်ငံက နိုင်ငံတကာကျောင်းသားပေါင်း 4,000 ကျော်တက်ရောက်သင်ကြားလျက်ရှိပါတယ်နော်။",
                    link: "https://wwwe.sogang.ac.kr/wwwe/admissionprograms.html"
                },

                {   img: require('@/assets/images/korea-school/6.jpg'),
                    title: "𝐃𝐨𝐧𝐠𝐠𝐮𝐤 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲",
                    content: "၁၉၀၆ ခုနှစ်မှာ Myeongjin School ကနေ စတင်ခဲ့ပြီး University အဖြစ် ၁၉၅၃ ခုနှစ်မှာ ပြောင်းလဲခဲ့တာဖြစ်ပါတယ်။ Dongguk University က Korea နိုင်ငံက တစ်ခြားကျောင်းတွေနဲ့မတူ Buddhism ကျောင်းတစ်ခုဖြစ်ပြီးတော့ International Association of Buddhist Universities အဖွဲ့ဝင်လည်းဖြစ်ပါတယ်။ Undergraduate and Graduate ကျောင်းပေါင်း ၁၂၇ ခုတောင်ရှိတဲ့အတွက်ကြောင့်‌ ရွေးချယ်စရာ Programs တွေလည်းများပြားမှာဖြစ်ပါတယ်နော်။",
                    link: "https://www.dongguk.edu/eng/page/418#none"
                },
                
            ];

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {universities}
        }
    }
</script>

