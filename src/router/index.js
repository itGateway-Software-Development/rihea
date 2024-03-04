import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () =>
            import ('../views/ContactUs.vue')
    },
    {
        path: '/all-blogs',
        name: 'AllBlogs',
        component: () =>
            import ('../views/AllBlogs.vue')
    },
    {
        path: '/blog-detail/:id',
        name: 'BlogDetail',
        component: () =>
            import ('../views/BlogDetail.vue'),
        props: true
    },
    {
        path: '/course-detail/:slug',
        name: 'CourseDetail',
        component: () =>
            import ('@/views/CourseDetail.vue'),
        props: true
    },
    {
        path: '/campus/:name',
        name: 'CampusPage',
        component: () =>
            import ('../views/Campus.vue'),
        props: true
    },
    {
        path: '/students-activities',
        name: 'StudentsActivities',
        component: () =>
            import ('../views/StudentsActivities.vue')
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: () =>
            import ('../views/AboutUs.vue')
    },
    {
        path: '/our-services',
        name: 'OurServices',
        component: () =>
            import ('../views/OurServices.vue')
    },
    {
        path: '/partners',
        name: 'Partners',
        component: () =>
            import ('@/views/Partners.vue')
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () =>
            import ('../views/Videos.vue')
    },
    {
        path: '/ged-university/:slug',
        name: 'GED University',
        component: () =>
            import ('../views/GEDUniversity.vue'),
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ('../views/404Page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router