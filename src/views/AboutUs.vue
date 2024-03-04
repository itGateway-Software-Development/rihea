<template>
    <div class="history-section">
        <div class="section-header">
            <h2>OUR HISTORY</h2>
        </div>
        <div class="our-history-image text-center mt-5">
            <img src="../assets/images/cover.jpg" alt="">
        </div>
        <div class="our-history-content d-flex justify-content-center">
            <div class="row mt-3 m-0 p-0">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-3 history-content">
                    The school was established in 2019 with the aim of helping Myanmar Students who are delayed in their dreaming education in our country. In the beginning, our founder wanted to contribute her teaching experience with the connection of Scholarship in Asian countries. Therefore, she started to welcome qualified teachers who are enriched in knowledge related to their specialization and good attitude. They organized small campus with early birds 20 students with the best results. As it gradually becomes successful in urban areas, she started planning to expand campus in rural areas in which the education is nowhere
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-3 history-content">
                    Unlike the others, our school is also represented for the future precious students who are stacking in the financial problem. By this time, we have currently 200 students in the classroom to step a better future not only in local but also in abroad. Our strength is having strong teamwork spirits in the triangle of students/ parents, teachers and admission team. Our teaching style are going with strong curriculum which is created by our qualified teachers with the supportive of academic team. In the future, we have a plan to have a better communication with students and parents community to showcase the transparency.
                </div>
            </div>
        </div>
    </div>
    <div class="vision-mission mt-5">
        <div class="section-header">
            <h2>VISION & MISSION</h2>
        </div>
        <div class="row vision mt-5">
            <div class=" col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                <div class="v-img">
                    <img src="../assets/images/vision.png" alt="">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                <div>
                    <hr>
                    <h3>VISION</h3>
                    <p>
                        To provide a world-class education that prepares students to become global citizens and leaders of tomorrow.
                    </p>
                </div>
            </div>
        </div>
        <div class="row mission mt-5">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                <div>
                    <div class="d-flex justify-content-end hr-head">
                        <hr>
                    </div>
                    <h3>MISSION</h3>
                    <p style="text-align: justify; text-indent: 50px;">
                        Our mission is to create a learning environment that fosters academic excellence, social responsibility, and a passion for lifelong learning. We strive to inspire our students to become curious, creative, and critical thinkers who are confident, independent, and respectful of diversity. Our goal is to cultivate in our students the knowledge, skills, and values necessary to thrive in a rapidly changing and interconnected world. We are committed to providing a safe, inclusive, and supportive community that encourages each student to reach their full potential.
                    </p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                <div class="m-img">
                    <img src="../assets/images/mission.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="about-us-section">
        <div class="section-header my-5">
            <h2>ABOUT US</h2>
        </div>
        <div class="about-us-img  text-center">
            <img src="../assets/images/cover.jpg" alt="">
        </div>
        <div class="about-us-content mt-5 ">
            <ul class="mb-5">
                <li> 
                    Commit to providing quality education and empowering students to achieve their full potential.
                    </li>
                <li>
                     Strive to provide a learning environment that is engaging, challenging and supportive.
                </li>
                <li>
                    Design our curriculum to be comprehensive and innovative, with a focus on developing critical thinking, problem-solving, and communication skills.
                </li>
                <li>
                    Offer a range of support services, including academic advising, career counseling, and tutoring, to ensure that our students have the resources they need to succeed.
                </li>
                <li>
                    Commit to providing personalized attention and support to each student, ensuring that they receive the guidance and resources they need to excel academically and professionally.
                </li>
            </ul>
            <p class="pe-3 float-end fw-bold">Share Your Dreams With Us!</p>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    .history-section {
        padding: 40px 10%;
    }
    .our-history-image img {
        width: 100%;
        height: 500px;
        object-fit: contain;
    }
    .our-history-content .row {
        width: 77%;
    }
    .our-history-content .row .history-content {
        text-align: justify;
        font-size: 14px;
        line-height: 1.4rem;
        margin: 30px auto;
    }
    .vision-mission {
        padding: 60px 15% 20px;
        object-fit: contain;
        background: #fefefe;
    }
    .vision .v-img, .mission .m-img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        padding: 20px;
    }
    .vision img, .mission img {
        width: 100%;
        animation: float-img 4s ease-in-out infinite;
    }
    @keyframes float-img {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-2.4rem);
        }
        100% {
            transform: translateY(0);
        }
    }
    .vision hr{
        border: 2px solid #23085a;
        width: 50px;
        margin-bottom: -1px;
    }
    .vision h3, .mission h3 {
        font-weight: bold;
        font-size: 25px;
    }
    .mission h3, .mission p {
        text-align: right;
    }
    .mission hr {
        width: 80px;
        border: 2px solid #ee3d40;
        margin-bottom: -.2px;
    }
    .about-us-section {
        padding: 50px 10% 30px;
    }
    .about-us-img img {
        width: 80%;
        object-fit: contain;
    }
    .about-us-content {
        padding: 0 11% 40px;        
    }
    .about-us-content ul li {
        list-style: decimal;
        margin-bottom: 1rem;
        font-size: 16px;
    }

    @media (max-width: 990px) {
        .history-section {
            padding: 35px 6%;
        }
        .section-header h2 {
            font-size: 1.5rem;
        }
        .our-history-image img {
            height: 350px;
            width: 90%;
        }
        .our-history-content .row {
        width: 92%;
    }
        .our-history-content .row .history-content {
            font-size: 12px;
            line-height: 1.1rem;
        }
        .vision .v-img, .mission .m-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            padding: 20px;
        }
        .vision h3 , .mission h3 {
            font-size: 1.3rem;
        }
        .vision p , .mission p {
            font-size: 12px;
        }

        .about-us-section {
            padding: 50px 3% 30px;
        }
        .about-us-img img {
            width: 90%;
        }

        .about-us-content {
            padding: 0 11% 20px;        
        }
        .about-us-content ul li{
            font-size: 12px;
        }
        
    }

    @media (max-width: 768px) {
        .about-us-section {
            padding: 50px 1% 30px;
        }

        .about-us-content {
            padding: 0 3% 20px;        
        }
    }

    @media (max-width:450px) {
        .section-header h2 {
            font-size: 1.2rem;
        }
        .our-history-image img {
            width: 85%;
            height: 200px;
            margin-bottom: 1rem;
        }
        .our-history-content .row {
            width: 90%;
        }
        .mission {
            display: flex;
            flex-direction: column-reverse;
        }
        .mission h3, .mission p {
            text-align: left;
        }
        .mission .hr-head {
            justify-content: start !important;
        }
        .about-us-section h2 {
            font-size: 1.1rem;
        }
        .about-us-section .section-header {
            margin-top: .5rem !important;
        }
        .about-us-img img {
            width: 80%;
        }
        .about-us-content {
            padding: 0 4% 40px;        
        }
        .about-us-content ul li {
            list-style: decimal;
            margin-bottom: 1rem;
            font-size: 12px;
        }
    }
</style>
