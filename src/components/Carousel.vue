<template>
    <div class="carousel-container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active w-100">
                    <img src="../assets/images/miga/5.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <p data-aos="zoom-out">Learning Skills & Upgrade Your Life</p>
                        <h3 data-aos="fade-down" class="mb-5">WELCOME TO RIHEA</h3>
                        <button data-aos="fade-up" class="btn" @click="goContact">Contact Us</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/miga/2.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <p>Learning Skills & Upgrade Your Life</p>
                        <h3 data-aos="fade-down" class="mb-5">WELCOME TO RIHEA</h3>
                        <button class="btn" @click="goContact">Contact Us</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/images/miga/7.jpg" class="w-100" alt="...">
                    <div class="carousel-caption">
                        <p>Learning Skills & Upgrade Your Life</p>
                        <h3 class="mb-5">WELCOME TO RIHEA</h3>
                        <button class="btn" @click="goContact">Contact Us</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>


    import {useRouter} from 'vue-router'
    export default {
        setup() {
            let router = useRouter();
            let goContact = () => router.push('/contact-us');

            return {goContact}
        }
    }
</script>

<style scoped>

    .carousel-item img {
        width: 100%;
        height: 650px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.8);
    }

    .carousel-item .carousel-caption {
        margin-bottom: 80px;
    }

    .carousel-caption h3 {
        color: #fff;
        font-weight: bolder;
        font-size: 58px;
    }

    .carousel-caption p {
        font-size: 38px;
        font-weight: bold;
        color: rgb(231, 174, 16);
    }

    @media (max-width: 1600px) {
        .carousel-item img {
            width: 100%;
            height: 450px;
        }

        .carousel-item .carousel-caption {
            margin-bottom: 60px;
        }
    
        .carousel-caption h3 {
            font-size: 40px;
        }
    
        .carousel-caption p {
            font-size: 28px;
        }
    }

    @media (max-width: 850px) {
        .carousel-item img {
            height: 430px;
        }
        .carousel-item .carousel-caption {
            margin-bottom: 40px;
        }
        .carousel-caption h3 {
            font-size: 1.7rem;
        }
        .carousel-caption p {
            font-size: .9rem;
        }
        .carousel-caption button {
            font-size: 11px;
        }
    }

    @media (max-width:450px) {
        .carousel-item img {
            height: 230px;
        }
        .carousel-item .carousel-caption {
            margin-bottom: 20px;
        }
        .carousel-caption h3 {
            font-size: 1rem;
            margin-bottom: 8px !important;
        }
        .carousel-caption p {
            font-size: .6rem;
        }
        .carousel-caption button {
            font-size: 8px;
            padding: 5px;
        }
    }
</style>
