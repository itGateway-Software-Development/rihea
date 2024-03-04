<template>
    <div class=" latest-news-container">
        <div class="section-header">
            <p data-aos="fade-down">News Updates</p>
            <h2 data-aos="fade-up">Latest News & Updates</h2>
        </div>

        <div class="news-section mt-5">
            <div class="row">
                <div data-aos="zoom-out" class="col-lg-4 col-md-6 col-sm-12 col-12 mb-3" v-for="(blog, index) in blogs" :key="index">
                    <div class="img-card">
                        <img :src="api.photo_url+blog.blog_images[0].image" alt="">
                        <div class="news-content">
                            <p class="mt-2"><i class="fa-solid fa-calendar-days"></i> {{blog.date}}</p>
                            <h4>{{blog.title.slice(0,150)}} ...</h4>
                            <div class="news-read">
                                <hr>
                                <div class="read-more">
                                    <div class="pointer read" @click="readAll">
                                        <i class="fa-solid fa-newspaper me-2"></i> Read All
                                    </div>
                                    <div class="pointer read" @click="readMore(blog.id)">
                                        Read More<i class="fa-solid fa-angle-right ms-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import {useRouter} from 'vue-router'
import getTopBlogs from '@/composables/getTopBlogs';
import api from '@/api/api'
    export default {
        setup() {
            let router = useRouter();

            let readAll = () => router.push('/all-blogs');
            let readMore = (id) => router.push(`blog-detail/${id}`);

            let {blogs, error, load} = getTopBlogs();
            load();

            return {blogs, readAll, readMore, api}
        }
    }
</script>

<style scoped>
    .latest-news-container {
        padding: 50px 9%;
        background: #E8EAF6;
    }

    .section-header {
        text-align: center;
        font-size: 20px;
    }

    .section-header p {
        color: goldenrod;
    }

    .img-card {
        background: #eee;
        overflow: hidden;
        height: 430px;
        padding-bottom: 20px;
        position: relative;
        border-radius: 8px;
        width: 90%;
    }

    .img-card img {
        width: 100%;
        height: 230px;
        transition: .5s ease;
        object-fit: cover;
        object-position: center;
    }

    .img-card img:hover {
        transform: scale(1.07);
    }

    .news-content {
        padding: 10px 30px;
        height: 100%;
        background: #23085a;
    }
    .news-read {
        position: absolute;
        width: 100%;
        bottom: 10px;
        right: 5px;
        padding: 0 40px;
    }

    .news-content p {
        color: var(--main-text-color);
        font-size: 14px;
    }

    .news-content p i {
        color: var(--main-text-color);
        margin-right: 10px;
    }

    .news-content h4 {
        color: var(--main-text-color);
        margin-top: 20px;
        padding-bottom: 10px;
        text-align: start;
        font-size: 18px;
    }

    .news-content hr {
        height: 2px;
        color: var(--main-text-color);
    }

    .read-more {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .read-more i {
        color: var(--main-text-color);
    }

    .read-more div {
        color: var(--main-text-color);
        font-size: 14px;
    }

    @media (max-width:990px) {
        .section-header p {
            font-size: 16px;
        }
        .section-header h2 {
            font-size: 1.5rem;
        }
        .img-card {
            height: 320px;
        }
        .img-card img {
            height: 150px;
        }
        .news-content p,  .read-more .read{
            font-size: 12px;
        }
        .news-content h4 {
            font-size: 16px;
        }
    }

    @media (max-width:450px) {
        .section-header h2 {
            font-size: 1.1rem;
        }
        .section-header p {
            font-size: 12px;
        }
        .img-card img {
            height: 150px;
            object-fit: cover;
            object-position: center;
        }
    }
</style>
