<template>
    <div class="single-campus">
        <div class="campus">
            <img src="../assets/images/ygnview.webp" alt="">
            <div class="img-caption">
                <h2>RIHEA Campus in Yangon</h2>
            </div>
        </div>
        <div class="campus-content">
            <h2>RIHEA CAMPUS 1</h2>
            <p>
                Rangoon International Higher Education Academy (RIHEA) is a beacon of educational excellence, where students embark on a transformative journey of growth and discovery. With a dynamic curriculum, dedicated educators, and state-of-the-art facilities, we provide an enriching environment that nurtures the unique talents and passions of every student. Our holistic approach to education fosters critical thinking, creativity, and a global perspective, empowering students to become compassionate leaders of tomorrow. We strive to create a supportive community where learning is engaging, collaborative, and fun. At RIHEA, we are committed to unlocking the full potential of each student, equipping them with the skills and knowledge to succeed in an ever-evolving world.
            </p>
            <img src="../assets/images/campus.jpg" alt="">
        </div>
        <div class="contact-section">
            <h2 class="text-center fw-bold ">Contact Us</h2>
            <div class="contact-info">
                <div class="contact-card">
                    <div class="contact-icon"><i class="fa-solid fa-clock"></i></div>
                    <p class="text-white">Opening Hours</p>
                    <div>
                        <span>9:00 AM to 3:30 PM</span>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <p class="text-white">Our Address</p>
                    <div>
                        <span>အမှတ် ၅၀၄/၅၀၆၊ ရွှေမြန်မာဆောက်လုပ်ရေး၊ ၃လွှာ၊ A-4၊ ၃၉ လမ်းအောက်ဘလောက၊ မဟာဗန္ဓုလလမ်းနှင့် ကုန်သည်လမ်းကြား၊ ကျောက်တံတားမြို့နယ်၊ ရန်ကုန်မြို။</span>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                    <p class="text-white">Call Us</p>
                    <div>
                        <span>(+95)942000120 <br> (+95)942000130</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7640.095991721634!2d96.1562880429291!3d16.774287558394025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec87973cb12b%3A0xe16b702dae6bba2b!2sKyauktada%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1684243688941!5m2!1sen!2smm" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="campus-experience">
            <h2>Campus Experience</h2>
            <p class="text-center">Our Campus offer those who want to be a outstanding students with warm. This is the place where you can level up and find precious colleagus.</p>

            <div class="campus-images">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga20.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga10.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga19.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga16.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga21.jpg" alt="">
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                        <img src="../assets/images/miga/miga22.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick, onMounted } from 'vue'
    export default {
        setup() {
         
        }
    }
</script>

<style>
    .single-campus {
        padding: 20px 15%;
    }

    .single-campus .campus {
        position: relative;
    }

    .single-campus .campus img {
        width: 100%;
        height: 500px;
        object-fit:cover;
    }

    .single-campus .campus .img-caption {
        position: absolute;
        right: 10%;
        bottom: 10%;
        display: flex;
        justify-content: end;
    }

    .single-campus .campus .img-caption h2 {
        background-color: #23085a;
        color: #fff;
        font-weight: bold;
        padding: 10px 25px;
        display: inline-block;
    }

    .single-campus .campus-content {
        margin: 50px auto 20px;
        padding: 0 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .single-campus .campus-content h2 {
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }

    .single-campus .campus-content p {
        text-align: center;
        line-height: 30px;
        margin-bottom: 50px;
    }

    .single-campus .campus-content img {
        width: 80%;
        height: 400px;
        object-fit: cover;
    }

    .single-campus .contact-section {
        margin: 30px auto;
        background: #23085a;
        padding: 0 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .single-campus .contact-section h2 {
        color: #fff;
        padding: 30px 0px 20px;
    }

    .single-campus .contact-section .contact-info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .single-campus .contact-info .contact-card  {
        width: 300px;
        text-align: center;
    }

    .single-campus .contact-info .contact-card .contact-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        background: #f2ca2f;
        margin: 10px auto;
    }
    .single-campus .contact-info .contact-card .contact-icon i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        color: #23085a;
    }

    .single-campus .contact-card p {
        font-weight: 500;
        font-size: 18px;
        margin: 20px 0;
    }

    .single-campus .campus-experience {
        margin: 80px 0 30px;
    }

    .single-campus .campus-experience h2 {
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }

    .single-campus .campus-experience p {
        padding: 0 20%;
        margin-bottom: 40px;
    }

    .single-campus .campus-images img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    @media (max-width: 1500px) {
        .single-campus .campus img {
            height: 400px;
        }

        .single-campus {
            padding: 20px 9%;
        }
    
        .single-campus .campus .img-caption {
            right: 5%;
            bottom: 10%;
        }
    
        .single-campus .campus .img-caption h2 {
            padding: 10px 25px;
            font-size: 24px;
        }
    
        .single-campus .campus-content {
            margin: 50px auto 20px;
            padding: 0 11%;
        }
    
        .single-campus .campus-content h2 {
            font-size: 25px;
        }
    
        .single-campus .campus-content p {
            line-height: 30px;
            margin-bottom: 50px;
            font-size: 14px;
        }
    
        .single-campus .campus-content img {
            width: 70%;
            height: 350px;
            object-fit: cover;
        }
    
        .single-campus .contact-section {
            margin: 30px auto;
            padding: 0 0 30px;
        }
    
        .single-campus .contact-section h2 {
            padding: 30px 0px 20px;
            font-size: 24px;
        }
    
        .single-campus .contact-info .contact-card  {
            width: 300px;
        }
    
        .single-campus .contact-info .contact-card .contact-icon {
            width: 50px;
            height: 50px;
            margin: 10px auto;
        }
        .single-campus .contact-info .contact-card .contact-icon i {
            font-size: 2rem;
        }
    
        .single-campus .contact-card p {
            font-size: 17px;
            margin: 20px 0;
        }

        .single-campus .contact-card span {
            font-size: 15px;
        }
    
        .single-campus .campus-experience {
            margin: 80px 0 30px;
        }
    
        .single-campus .campus-experience h2 {
            margin-bottom: 20px;
            font-size: 26px;
        }
    
        .single-campus .campus-experience p {
            padding: 0 20%;
            margin-bottom: 40px;
            font-size: 14px;
        }
    
        .single-campus .campus-images img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
    }

    @media (max-width: 990px) {
        .single-campus {
            padding: 20px 3%;
        }
    
        .single-campus .campus .img-caption h2 {
            padding: 10px 25px;
            font-size: 22px;
        }
    
        .single-campus .campus-content {
            margin: 50px auto 20px;
            padding: 0 7%;
        }
    
        .single-campus .campus-content h2 {
            font-size: 25px;
        }
    
        .single-campus .campus-content p {
            line-height: 25px;
            margin-bottom: 50px;
            font-size: 14px;
        }
    
        .single-campus .campus-content img {
            width: 75%;
            height: 320px;
            object-fit: cover;
        }
    
        .single-campus .contact-section {
            margin: 30px auto;
            padding: 0 0 30px;
        }
    
        .single-campus .contact-section h2 {
            padding: 30px 0px 20px;
            font-size: 24px;
        }

        .single-campus .contact-section .contact-info {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    
        .single-campus .contact-info .contact-card  {
            width: 300px;
        }
    
        .single-campus .contact-info .contact-card .contact-icon {
            width: 35px;
            height: 35px;
        }
        .single-campus .contact-info .contact-card .contact-icon i {
            font-size: 1.3rem;
        }
    
        .single-campus .contact-card p {
            font-size: 14px;
            margin: 20px 0;
        }

        .single-campus .contact-card span {
            font-size: 12px;
        }

        .single-campus .map iframe {
            height: 350px;
        }
    
        .single-campus .campus-experience {
            margin: 80px 0 30px;
        }
    
        .single-campus .campus-experience h2 {
            margin-bottom: 20px;
            font-size: 26px;
        }
    
        .single-campus .campus-experience p {
            padding: 0 20%;
            margin-bottom: 40px;
            font-size: 14px;
        }
    
        .single-campus .campus-images img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
    }

    @media (max-width: 850px) {
        .single-campus {
            padding: 80px 3% 20px;
        }

        .single-campus .campus img {
            height: 350px;
            object-fit: cover;
        }

    }

    @media (max-width: 768px) {

        .single-campus .contact-section {
            margin: 40px;
            padding: 0 0 30px;
        }

        .single-campus .contact-section .contact-info {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .single-campus .campus-content img {
            width: 95%;
        }
    
        .single-campus .contact-info .contact-card  {
            width: 300px;
            text-align: center;
            margin-bottom: 40px;
        }


        .single-campus .map {
            margin: 40px;
        }

        .single-campus .campus-images .row div {
            display: flex;
            justify-content: center;
        }

        .single-campus .campus-images img {
            width: 80%;
            height: 300px;
            object-fit: cover;
            margin: 0 auto;
        }
    }
</style>
