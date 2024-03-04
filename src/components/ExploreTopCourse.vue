<template>
    <div class="top-course-container">
        <div data-aos="zoom-in" class="section-header">
            <h2>Explore Top Courses</h2>
        </div>
        <div class="top-courses">
            <figure data-aos="fade-down" class="imghvr-shutter-out-diag-2">
                <div class="top-course" >
                    <div class="mb-2"><img src="@/assets/images/top-courses/pre-ged.jpg" alt=""></div>
                    <h4>Pre GED Class</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/pre-ged"></router-link>
                <router-link class="view-btn" to="/course-detail/pre-ged">View Detail</router-link>
            </figure>
            <figure data-aos="fade-up" class="imghvr-shutter-out-diag-2">
                <div class="top-course" >
                    <div class="mb-2"><img src="@/assets/images/top-courses/ged.jpg" alt=""></div>
                    <h4>GED Class</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/ged"></router-link>
                <router-link class="view-btn" to="/course-detail/ged">View Detail</router-link>
            </figure>
            <figure data-aos="fade-down" class="imghvr-shutter-out-diag-2">
                <div class="top-course">
                    <div class="mb-2"><img src="@/assets/images/top-courses/o-level.jpg" alt=""></div>
                    <h4>O Level IGCSE</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/o-igcse"></router-link>
                <router-link class="view-btn" to="/course-detail/o-igcse">View Detail</router-link>
            </figure>
            <figure data-aos="fade-up" class="imghvr-shutter-out-diag-2">
                <div class="top-course" >
                    <div class="mb-2"><img src="@/assets/images/top-courses/pre-igcse.jpg" alt=""></div>
                    <h4>Pre IGCSE Class</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/pre-igcse"></router-link>
                <router-link class="view-btn" to="/course-detail/pre-igcse">View Detail</router-link>
            </figure>
            <figure data-aos="fade-up" class="imghvr-shutter-out-diag-2">
                <div class="top-course" >
                    <div class="mb-2"><img src="@/assets/images/top-courses/eng.jpg" alt=""></div>
                    <h4>Academic Eng 4 Skills</h4>
                </div>
                <figcaption> <div><i class="fa-solid fa-eye fs-5"></i><br><span>Click to see detail</span> <i class='bx bx-chevrons-right'></i></div> </figcaption>
                <router-link to="/course-detail/eng-4-skills"></router-link>
                <router-link class="view-btn" to="/course-detail/eng-4-skills">View Detail</router-link>
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .top-course-container {
        text-align: center;
        padding: 50px 15% 40px;
        background: #f9f8f8; 
    }

    .top-course-container .top-course {
        width: 250px;
        height: 270px;
        background-color: rgb(195, 195, 196);
    }

    .top-courses {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 50px;
        padding: 0 20px;
    }

    .top-course img {
        width: 100%;
        height: 200px;
        margin-top: -20px;
    }

    .top-course h4 {
        font-size: 18px;
        margin-top: 10px;
        color: #000 !important;
        font-weight: bold;
    }

    .top-course h4, figcaption i {
        color: var(--main-text-color);
    }

    .top-courses figure {
        border-radius: 12px;
    }

    figure figcaption {
        /* margin-top: 7rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px !important;
        font-size: 12px;
    }

    .view-btn {
        display: none;
    }

    .top-course {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .top-course i {
        color: #e5d552;
    }

    @media (max-width:850px) {

        .top-course-container {
            text-align: center;
            padding: 50px 10% 40px;
        }
        .section-header h2 {
            font-size: 1.5rem;
        }
    }

    @media (max-width:450px) {
        .section-header h2 {
            font-size: 1.2rem;
        }
        .view-btn {
            /* display: inline-block; */
            color: #fff;
            background: red;
            margin-top: -5rem;
        }
    }
</style>
