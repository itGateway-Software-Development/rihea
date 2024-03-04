<template>
    <div class=" info">
        <div class="row mt-5">
            <div data-aos="zoom-in" class="col-lg-6 col-md-12 col-sm-12 col-12 img-head mb-5">
                <img src="../assets/images/miga/7.jpg" alt="">
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 ">
                <h2 data-aos="fade-left" class="text-dark"><span>RIHEA </span>Gives You Guaranteed Facilities</h2>
                <div data-aos="zoom-in-left" class="info-content">
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>A Flexible schedule to fit your needs</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>Small class sizes for personalized attention</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>Experienced teachers dedicated to your success</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>A comprehensive curriculum designed to prepare you for the IGCSE and GED tests</p></div>
                    <div class="d-flex"><i class='bx bxs-bookmark me-2'></i><p>Support every step of the way as you work towards achieving your academic goals</p></div>
                </div>
                <hr>
                <p data-aos="zoom-in-left" class="info-text mb-5">At RIHEA we’ve helped more than three million students achieve their goals. Whether you are a beginner or a more advanced level, our unique and proven method will help you learn, progress and improve.</p>

                <div class="contact-btn" @click="goContact">
                    <button>Contact Us </button>
                    <i class='bx bx-envelope' ></i>
                </div>

                
            </div>
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
    .info {
        padding: 40px 15% ;
        /* background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg1.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover; */
    }

    .img-head  img{
        width: 100%;
        height: 550px;
        object-fit: cover;
    }

    .info-content {
        margin-top: 2.5rem;
    }

    .info-content i {
        color: var(--main-text-color);
        padding-top: 3px;
    }

    .info-content div p {
        font-size: 17px;
        line-height: 28px;
        color: #000;
    }

    .info-text {
        font-size: 16px;
        color: #000000;
    }

    .contact-btn {
        width: 150px;
        display: flex ;
        background: var(--main-text-color);
        border-radius: 12px;
        transition: .5s ease;
    }

    button {
        display: inline-block;
        color: #3a2d7c;
        padding: 5px 10px;
        border: none;
        border-radius: 20px 0 0 20px;
        background: none;
    }

    .contact-btn i{
        font-size: 1.5rem;
        color: #3a2d7c;
        padding: .3rem 10px 0 5px;

    }

    .contact-btn:hover {
        background: #3a2d7c;
        border: 1px solid var(--main-text-color);
        box-shadow: 0 0 1rem var(--main-text-color);
    }

    .contact-btn:hover button, .contact-btn:hover i {
        color: #fff;
    }

    @media (max-width: 1600px) {
        .info {
            padding: 10px 9%;
          
        }
        .img-head  img{
            width: 100%;
            height: 400px;
        }

        .info h2 {
            font-size: 22px;
        }

        .info-content i {
            color: var(--main-text-color);
            padding-top: 5px;
        }
    
        .info-content div p {
            font-size: 14px;
            line-height: 20px;
        }
    
        .info-text {
            font-size: 13px;
            margin-bottom: 15px !important;
        }

        .contact-btn {
            width: 120px;
            display: flex ;
            background: var(--main-text-color);
            border-radius: 12px;
            transition: .5s ease;
        }

        button {
            display: inline-block;
            padding: 2px 7px;
            border: none;
            font-size: 12px;
            border-radius: 20px 0 0 20px;
            background: none;
        }

        .contact-btn i{
            font-size: 1rem;
            padding: .3rem 10px 0 5px;
    
        }
    }


    @media (max-width:990px) {
        .info {
            padding: 40px 20%;
            height: auto;
        }

        .img-head img {
            width: 100%;
            height: 400px;
        }
        .info h2 {
            font-size: 20px;
        }
        .info-content i, .info-content p, .info-text  {
            font-size: 12px;
        }
        .contact-btn {
            font-size: 12px;
            width: 130px;
        }
        .contact-btn i {
            padding: .1rem 10px 0 5px;
            font-size: 1.2rem;
        }
    }

    @media (max-width:480px) {
        .info {
            padding: 40px 9%;
            height: auto;
        }

        .row {
            margin-top: 0 !important;
        }
        .img-head img {
            height: 230px;
        }
        .info h2 {
            font-size: 16px;
        }
        .info-content{
            margin-top: 1.2rem;
        }

        .info-content p {
            font-size: 11px;
        }
    }
</style>
