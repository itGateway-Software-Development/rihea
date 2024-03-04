<template>
    <div class="activity-section">
        <div class="section-header mt-5">
            <h2>Our Activities</h2>
        </div>
        <div class="container pb-5">
            <Classroom></Classroom> 
            <Gathering></Gathering>  
            <Trip></Trip>     
            <Sport></Sport>    
        </div>
    </div>
</template>

<script>
import Sport from '../components/activity/Sport'
import Trip from '../components/activity/Trip'
import Gathering from '../components/activity/Gathering'
import Classroom from '../components/activity/Classroom'
import { onMounted } from 'vue'
    export default {
  components: {
    Sport,
    Trip,
    Gathering,
    Classroom},
        setup() {
            let count = 0;
            onMounted(() => {
                window.scrollTo(0,0);
                // const myCarousel1 = new bootstrap.Carousel(document.querySelector('#carousel1'));
              
            })
        }
    }
</script>

<style>
    .activity-section {
        padding: 10px 15% 30px;
    }

    .activity-section .section-header h2 {
        background: goldenrod;
        padding: 10px 20px;
    }

    .activity-section .activity {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 150px;
    }

    .activity-section .activity.odd {
        flex-direction: row-reverse;
    }

    .activity-section .activity .title {
        width: 30%;
    }

    .activity-section .activity.odd .title {
        text-align: center;
    }

    .activity-section .activity .title h2 {
        font-weight: bold;
        color: rgb(168, 127, 21);
        font-size: 40px;
    }

    .activity-section .activity .photo {
        width: 60%;
    }

    .activity-section .carousel-inner  {
        border-radius: 30px;
    }

    .activity-section .activity .photo img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 30px;
    }

    .activity-section .carousel-indicators button {
        width: 7px !important;
        height: 7px !important;
        border-radius: 100%;
    }

    @media (max-width: 1600px) {
        .activity-section {
            padding: 0px 9% 30px;
        }
    
        .activity-section .section-header h2 {
            padding: 10px 20px;
        }
    
        .activity-section .activity {
            margin-top: 150px;
        }
    
        .activity-section .activity .title {
            width: 30%;
        }
    
        .activity-section .activity .title h2 {
            font-size: 35px;
        }
    
        .activity-section .activity .photo {
            width: 55%;
        }
    
        .activity-section .activity .photo img {
            width: 100%;
            height: 300px;
        }
    }

    @media (max-width: 990px) {
        .activity-section {
            padding: 0px 3% 30px;
        }
    
        .activity-section .activity {
            margin: 100px auto 20px;
            flex-direction: column;
        }
    
        .activity-section .activity .title {
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
        }
    
        .activity-section .activity .title h2 {
            font-size: 35px;
        }

        .activity-section .activity.odd {
            flex-direction: column;
        }
    
        .activity-section .activity.odd .title {
            text-align: center;
        }
    
        .activity-section .activity .photo {
            width: 80%;
        }
    
        .activity-section .activity .photo img {
            width: 100%;
            height: 300px;
        }
    }

    @media (max-width: 850px) {
        .activity-section {
            padding: 40px 3% 30px;
        }
    }

    @media (max-width: 500px) {
        .activity-section .section-header h2 {
            font-size: 25px;
        }
        .activity-section .activity .title h2 {
            font-size: 30px;
        }

        .activity-section .activity .photo {
            width: 100%;
        }
    }
</style>
