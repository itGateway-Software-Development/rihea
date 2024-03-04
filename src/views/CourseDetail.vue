<template>
    <div v-if="status">
        <div v-if="slug == 'pre-ged'">
            <PreGED></PreGED>
        </div>
        <div v-else-if="slug == 'ged'">
            <GED></GED>
        </div>
        <div v-else-if="slug == 'pre-igcse'">
            <PreIGCSE></PreIGCSE>
        </div>
        <div v-else-if="slug == 'o-igcse'">
            <OlevelIGCSE></OlevelIGCSE>
        </div>
        <div v-else-if="slug == 'eng-4-skills'">
            <Eng4Skills></Eng4Skills>
        </div>
    </div>
    <div v-else>
        <Loading></Loading>
    </div>
</template>

<script>
import Loading from '../components/Loading'
import Eng4Skills from '../components/Eng4Skills'
import OlevelIGCSE from '../components/OlevelIGCSE'
import PreIGCSE from '../components/PreIGCSE'
import { onMounted, onUpdated, ref, watch } from 'vue'

    import GED from '../components/GED'
    import PreGED from '../components/PreGED'
    export default {
        components: {
    Loading,
    Eng4Skills,
    OlevelIGCSE,
    PreIGCSE,GED, PreGED },
        props: ['slug'],
        setup(props) {
            let status = ref(false);
            setTimeout(() => status.value = true, 500);
            watch(() => props.slug, newSlug => {
                status.value = false;
                setTimeout(() => status.value = true, 500)
            })

            onMounted(() => {
                window.scrollTo(0,0)
            }),
            onUpdated(() => {
                window.scrollTo(0,0)
            })

            return {status}
        }
    }
</script>

<style>
    /* .detailPage {
        background-image: linear-gradient(to bottom,rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), url("@/assets/images/bg-p-3.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    } */
</style>
