<template>
    <div v-if="status">
        <div v-if="name == 'campus1'">
            <Campus1></Campus1>
        </div>
        <div v-else-if="name == 'campus2'">
            <Campus2></Campus2>
        </div>
        <div v-else-if="name == 'campus3'">
            <Campus3></Campus3>
        </div>
        <div v-else-if="name == 'campus4'">
            <Campus4></Campus4>
        </div>
        <div v-else-if="name == 'campus5'">
            <Campus5></Campus5>
        </div>
        <div v-else-if="name == 'campus6'">
            <Campus6></Campus6>
        </div>
    </div>
    <div v-else>
        <Loading></Loading>
    </div>
</template>

<script>
import Loading from '../components/Loading'
import Campus6 from '../components/Campus6'
import Campus5 from '../components/Campus5'
import Campus4 from '../components/Campus4'
import Campus3 from '../components/Campus3'
import Campus2 from '../components/Campus2'
import { onMounted, onUpdated, ref, watch } from 'vue'
    import Campus1 from '../components/Campus1'
export default {
        components: {
    Loading,
    Campus6,
    Campus5,
    Campus4,
    Campus3,
    Campus2, Campus1 },
        props: ['name'],
        setup(props) {

            let status = ref(false);
            setTimeout(() => status.value = true, 500);
            watch(() => props.name, newSlug => {
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
    
</style>
