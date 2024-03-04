<template>
    <div>
        <div class="ourservice-img">
            <img src="../assets/images/miga/5.jpg" alt="">
            <div class="service-header text-center">
                <p class="m-0 p-0">RIHEA</p>
                <h4 class="my-2 p-0">OUR SERVICES</h4>
            </div>
        </div>
        <div class="section-header mt-5 text-center">
            <h2>OUR SERVICES</h2>
            <p class="mt-3">One-stop solution service for your study-abroad dream</p>
        </div>
        <div class="services container mt-5 pb-5">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 offset-lg-2 service-card" @click="goService('pre-ged')">
                    <div class="text-center">
                        <img src="../assets/images/usa-flag.svg.png" alt="">
                        <button class="btn my-4">Service 01</button>
                        <h4 class="my-3">PRE GED (ONLINE, CAMPUS)</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12  service-card" @click="goService('ged')">
                    <div class="text-center">
                        <img src="../assets/images/usa-flag.svg.png" alt="">
                        <button class="btn my-4">Service 02</button>
                        <h4 class="my-3">GED (ONLINE, CAMPUS)</h4>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('pre-igcse')">
                    <div class="text-center">
                        <img src="../assets/images/uk-flag.svg.png" alt="">
                        <button class="btn my-4">Service 03</button>
                        <h4 class="my-3">PRE IGCSE (ONLINE, CAMPUS)</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('o-igcse')">
                    <div class="text-center">
                        <img src="../assets/images/uk-flag.svg.png" alt="">
                        <button class="btn my-4">Service 04</button>
                        <h4 class="my-3">O LEVEL IGCSE (ONLINE, CAMPUS)</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/uk-flag.svg.png" alt="">
                        <button class="btn my-4">Service 05</button>
                        <h4 class="my-3">A LEVEL IGCSE (ONLINE, CAMPUS)</h4>
                    </div>
                </div>
    
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card" @click="goService('eng-4-skills')">
                    <div class="text-center">
                        <img src="../assets/images/eng-skills.png" alt="">
                        <button class="btn my-4">Service 06</button>
                        <h4 class="my-3">ACADEMIC ENGLISH 4 SKILLS</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/ielts.png" alt="">
                        <button class="btn my-4">Service 07</button>
                        <h4 class="my-3">IELTS Course</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/dulingo.png" alt="">
                        <button class="btn my-4">Service 08</button>
                        <h4 class="my-3">Duolingo Class</h4>
                    </div>
                </div>
    
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/counselling.png" alt="">
                        <button class="btn my-4">Service 09</button>
                        <h4 class="my-3">ADMISSION COUNSELING</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/visa.png" alt="">
                        <button class="btn my-4">Service 10</button>
                        <h4 class="my-3">VISA ASSISTANCE</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/notary.png" alt="">
                        <button class="btn my-4">Service 11</button>
                        <h4 class="my-3">NOTARY SERVICES</h4>
                    </div>
                </div>
    
                <div class="col-lg-4 offset-lg-4 col-md-6 col-sm-12 col-12 service-card">
                    <div class="text-center">
                        <img src="../assets/images/scholarship.png" alt="">
                        <button class="btn my-4">Service 12</button>
                        <h4 class="my-3">SCHOLARSHIP APPLICATION ASSESSMENT</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter(); 
            let goService = (name) => router.push(`/course-detail/${name}`);

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {goService}
        }
    }
</script>

<style scoped>
    .ourservice-img {
        width: 100%;
        height: 600px;
        position: relative;
        padding-bottom: 30px;
    }
    .ourservice-img img {
        width: 100%;
        height: 100%;
        filter: brightness(.8);
        object-fit: cover;
    }
    .service-header {
        position: absolute;
        top: 70%;
        left: 20%;
        transform: translate(-50%, -50%);
    }
    .service-header  p, .service-header  h4 {
        color: #fff;
        font-weight: bold;
    }
    .service-header  h4 {
        font-size: 2rem;
        background-color: #23085a;
        padding: 5px 30px !important;
    }
    .services img {
        width: 80%;
        height: 168px;
        object-fit: contain;
    }
    .services h4 {
        font-size: 18px;
        font-weight: bold;
    }
    .services p {
        font-size: 14px;
    }
    .services button {
        padding: 5px 40px;
        border-radius: 20px;
    }
    .service-card {
        margin-bottom: 70px;
    }

    @media (max-width:990px) {
        .ourservice-img {
            width: 100%;
            height: 400px;
        }
        .service-header h4 {
            font-size: 1.4rem;
        }
        .section-header h2 {
            font-size: 1.5rem;
        }
        .services img {
            width: 70%;
            height: 140px;
        }
        .services h4 {
            font-size: 16px;
            font-weight: bold;
        }
        .services p {
            font-size: 12px;
        }
        .services button {
            padding: 5px 30px;
            border-radius: 20px;
            font-size: 13px;
        }
        .service-card {
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width:450px) {
        .ourservice-img {
            width: 100%;
            padding-bottom: 20px;
            height: 230px;
        }
        .service-header {
            position: absolute;
            top: 60%;
            left: 30%;
            transform: translate(-50%, -50%);
        }
        .service-header h4 {
            font-size: 1rem;
        }
        .service-header p {
            font-size: 12px;
        }
        .section-header {
            margin-top: 20px !important;
        }
        .section-header h2 {
            font-size: 1.3rem;
        }
        .services img {
            width: 70%;
            height: 160px;
            object-position: center;
        }
        .services h4 {
            font-size: 16px;
            font-weight: bold;
        }
        .services p {
            font-size: 12px;
        }
        .services button {
            padding: 5px 30px;
            border-radius: 20px;
            font-size: 13px;
        }
        .service-card {
            margin-bottom: 50px;
        }
    }
</style>
