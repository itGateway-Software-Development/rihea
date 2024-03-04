<template>
    <div class="greeting-video">
        <div class="section-header">
            <h2 data-aos="fade-up">GREETING FROM OUR STUDENTS</h2>
        </div>
        
        <div class="video">
            <iframe class="vid" src="https://www.youtube.com/embed/rTSje6ej5ow?si=L4ofkAruUQ4jD3h5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .greeting-video {
        background: #f9f8f8;
        padding: 80px 10px;
    }

    .section-header {
        margin-bottom: 60px;
    }
    .video {
        text-align: center;
    }

    .vid {
        width: 60%;
        height: 600px;
    }

    @media (max-width: 1600px) {
        .vid {
            width: 70%;
            height: 600px;
        }
    }

    @media (max-width: 1300px) {
        .vid {
            width: 70%;
            height: 500px;
        }
    }

    @media (max-width: 1200px) {
        .vid {
            width: 80%;
            height: 500px;
        }
    }

    @media (max-width: 1080px) {
        .vid {
            width: 85%;
            height: 450px;
        }
    }

    @media (max-width: 800px) {
        .vid {
            width: 100%;
            height: 450px;
        }
    }

    @media (max-width: 600px) {
        .vid {
            width: 100%;
            height: 350px;
        }
    }

    @media (max-width: 500px) {
        .section-header h2 {
            font-size: 20px;
        }
        .vid {
            width: 100%;
            height: 300px;
        }
    }

</style>
