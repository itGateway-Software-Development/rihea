<template >
    <div class="activities">
        <div data-aos="zoom-in" class="section-header mt-5">
            <h2>SCHOOL ACTIVITIES</h2>
        </div>
        <div class="images">
            <div data-aos="zoom-in" class="img">
                <img src="../assets/images/miga/miga1.jpg" alt="">
            </div>
            <div data-aos="fade-up" class="img">
                <img src="../assets/images/miga/miga2.jpg" alt="">
            </div>
            <div data-aos="fade-up" class="img">
                <img src="../assets/images/miga/miga3.jpg" alt="">
            </div>
            <div data-aos="zoom-in" class="img">
                <img src="../assets/images/miga/miga4.jpg" alt="">
            </div>
            <div data-aos="fade-right" class="img">
                <img src="../assets/images/miga/miga5.jpg" alt="">
            </div>
            <div data-aos="fade-up" class="img">
                <img src="../assets/images/miga/miga6.jpg" alt="">
            </div>
            <div data-aos="fade-up" class="img">
                <img src="../assets/images/miga/miga7.jpg" alt="">
            </div>
            <div data-aos="fade-left" class="img">
                <img src="../assets/images/miga/miga8.jpg" alt="">
            </div>
        </div>
        <div class="activities-btn" @click="stuActivities">
            <button >Students Activities </button>
            <i class="fa-solid fa-universal-access"></i>
        </div>
    </div>
</template>

<script>
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();

            let stuActivities = () => router.push('/students-activities');

            return {stuActivities}
        }

    }
</script>

<style scoped>
    .activities {
        padding: 30px 10% 40px;
        background: #E8EAF6;
    }
    .images {
        padding: 40px 5% 30px;
        display: flex;justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: .8rem;
        /* background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg2.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover; */
    }
    .img {
        overflow: hidden;
    }
    .img img {
        width: 300px;
        height: 250px;
        object-fit: cover;
        object-position: center;
        transition: .5s ease;
    }
    .img img:hover {
        transform: scale(1.1);
    }
    .activities-btn {
        width: 210px;
        display: flex ;
        background: #23085a;
        border-radius: 12px;
        transition: .5s ease;
        margin: 0 auto;
    }

    button {
        display: inline-block;
        color: rgb(238,185,36);
        padding: 5px 10px;
        border: none;
        border-radius: 20px 0 0 20px;
        background: none;
    }

    .activities-btn i{
        font-size: 1.5rem;
        color: rgb(238,185,36);
        padding: .3rem 10px 0 5px;
    }

    .activities-btn:hover {
        background: #23085a;
        border: 1px solid #23085a;
        box-shadow: 0 0 1rem var(--main-text-color);
    }

    .activities-btn:hover button, .activities-btn:hover i {
        color: #fff;
    }

    @media (max-width:1500px) {
        .activities {
            padding: 30px 5% 30px;
        }
    }

    @media (max-width: 1200px) {
        .activities {
            padding: 30px 2% 30px;
        }
    }

    @media (max-width:850px) {
        .section-header h2 {
            font-size: 1.5rem !important;
        }
        .img img {
            width: 280px;
            height: 230px;
        }
    }

    @media (max-width: 768px) {
        .activities {
            padding: 30px 1% 30px;
        }

        .img img {
            width: 200px;
            height: 230px;
        }
    }

    @media (max-width:470px) {
        .section-header h2 {
            font-size: 1.5rem !important;
        }
        .activities-btn {
            width: 170px;
        }

        button {
            font-size: 12px;
        }

        .activities-btn i{
            font-size: 18px;
        }

        .img img {
            width: 350px;
            height: 230px;
        }
    }
</style>
