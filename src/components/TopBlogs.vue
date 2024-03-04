<template>
    <div class="top-blogs mb-4">
        THE TOP BLOGS
    </div>
    <div class="top-blogs-list mb-3 pointer" v-for="(blog, index) in blogs" :key="index" @click="seemore(blog.id)">
        <div><img :src="api.photo_url+blog.blog_images[0].image" alt=""></div>
        <div class="title">{{ blog.title }} <p>See More...</p></div>
    </div>
</template>

<script>
    import getTopBlogs from '@/composables/getTopBlogs'
    import api from '@/api/api';
    export default {
        props: ['blogs'],
        setup(props, context) {
            let seemore = (id) => context.emit('seemore', id);

            let {blogs,error, load} = getTopBlogs();
            load();

            return {seemore, blogs, error, api}
        }
    }
</script>

<style  scoped>
    .top-blogs {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        background: #23085a;
        color: var(--main-text-color);
        padding: 8px 0;
        margin-bottom: 1rem;
        border-radius: 10px;
    }
    .top-blogs-list {
        display: flex;
        gap: 1.3rem;
        padding: 7px 4px;
        background-image: linear-gradient(to left,rgba(197, 197, 110, 0.5), rgba(102, 102, 226, 0.5));
        border-radius: 10px;
        transition: .5s ease;
    }
    .top-blogs-list:hover {
        transform: scale(1.08);
    }
    .top-blogs-list img {
        width: 70px;
        height: 65px;
        padding: 5px 3px;
        object-fit: contain;
    }
  
    .top-blogs-list>div {
        font-size: 12px;
        text-align: justify;
        line-height: 1rem;
        padding: 0 5px 0 0;
    }
    .top-blogs-list p {
        font-size: 12px;
        margin-top: 10px;
        color: blue;
    }

    @media (max-width:990px) {
        .top-blogs {
            font-size: 14px;
        }
        .top-blogs-list {
            display: flex;
            gap: 1.2rem;
            padding: 10px 4px;
            background-image: linear-gradient(to left,rgba(197, 197, 110, 0.5), rgba(102, 102, 226, 0.5));
            border-radius: 10px;
            transition: .5s ease;
        }
        .top-blogs-list:hover {
            transform: scale(1.08);
        }
        .top-blogs-list img {
            width: 75px;
            height: 65px;
            padding: 5px 3px;
        }
    
        .top-blogs-list>div {
            font-size: 12px;
            text-align: justify;
            line-height: 1rem;
            padding: 0 5px 0 0;
        }

        .top-blogs-list .title {
            font-size: 18px;
        }
    }
</style>
