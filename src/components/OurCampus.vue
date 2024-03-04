<template>
    <div class="campus-section">
        <div class="section-header text-center mb-5">
            <h2 data-aos="zoom-in">RIHEA CAMPUSES IN MYANMAR</h2>
            <p data-aos="fade-left" class="mt-4">Currently <span style="color: var(--main-text-color); font-weight: bold;">6 Campuses in Myanmar</span> including Yangon, Sagaing and Mon</p>
        </div>
        <div class="campus-location">
            <div data-aos="zoom-in-right" class="campus-card mb-3" v-for="(data, index) in datas" :key="index">
                <img :src="data.img" alt="">
                <div class="location" @click="campusDetail(data.campus)">
                    <h5 class=" mb-1 p-0">{{ data.name }}</h5>
                    <p >{{data.location}}</p>
                </div>
                <div class="campus-state text-center mt-2">
                    <i class="fa-solid fa-location-dot me-2"></i>{{data.state}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();
            let datas = ref([
                {
                    img: require('../assets/images/campus1.jpg'),
                    name: 'Campus 1',
                    location: 'KyoutDaDar',
                    state: 'Yangon',
                    campus: 'campus1',
                },
                {
                    img: require('../assets/images/campus2.jpg'),
                    name: 'Campus 2',
                    location: 'Myaynighone',
                    state: 'Yangon',
                    campus: 'campus2',
                },
                {
                    img: require('../assets/images/campus3.jpg'),
                    name: 'Campus 3',
                    location: 'Thingangyun',
                    state: 'Yangon',
                    campus: 'campus3',
                },
                {
                    img: require('../assets/images/campus4.jpg'),
                    name: 'Campus 4',
                    location: 'KyoutDaDar',
                    state: 'Yangon',
                    campus: 'campus4',
                },
                {
                    img: require('../assets/images/campus1.jpg'),
                    name: 'Campus 5',
                    location: 'Sagaing',
                    state: 'Sagaing',
                    campus: 'campus5',
                },
                {
                    img: require('../assets/images/campus2.jpg'),
                    name: 'Campus 6',
                    location: 'Mawlamying',
                    state: 'Mon',
                    campus: 'campus6',
                },
            ]);

            let campusDetail = (name) => {
                router.push(`/campus/${name}`)
            }
            return {datas, campusDetail}
        }
    }
</script>

<style scoped>
    .campus-section{
        background: #e0dcdc;
        padding: 80px 15%;
    }
    .section-header p{
        color: #2c1d4a;
    }
    .campus-card {
        overflow: hidden;
    }
    .campus-location img {
        width: 182px;
        height: 210px;
        border-radius: 12px 12px 0 0;
        transition: .5s ease;
        object-fit: cover;
        object-position: center;
    }
    .campus-location img:hover {
        transform: scale(1.04);
    }
    .campus-location {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.3rem;
    }
    .location {
        height: 48px;
        width: 182px;
        text-align: center;
        padding-top: 5px;
        background: #23085a;
        border-radius: 0 0 12px 12px;
        cursor: pointer;
    }
    .location h5 {
        font-size: 16px;
        color: var(--main-text-color);
    }
    .location p {
        font-size: 12px;
        color: var(--main-text-color);
    }
    .campus-state, .campus-state i {
        color: var(--main-text-color);
        font-size: 14px;
    }

    @media (max-width: 1600px) {
        .campus-section{
            background: #e0dcdc;
            padding: 50px 12%;
        }
    }

    @media (max-width: 850px) {
        .section-header h2 {
            font-size: 1.5rem;
        }
        .section-header p {
            font-size: 14px;
        }
    }

    @media (max-width:450px) {
        .section-header h2 {
            font-size: 1.1rem;
        }
        .section-header p {
            font-size: 12px;
        }
    }
</style>
