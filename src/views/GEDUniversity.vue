<template>
    <div class="ged-university">
        <div v-if="slug == 'japan'"><Japan></Japan></div>
        <div v-if="slug == 'korea'"><Korea></Korea></div>
        <div v-if="slug == 'china'"><China></China></div>
    </div>
</template>

<script>
    import China from '../components/university/China'
import Korea from '../components/university/Korea'
    import Japan from '../components/university/Japan';
    export default {
    components: {
    China,
    Korea, Japan },
            props: ['slug'],
            setup() {

            }
        }
</script>

<style scoped>
    .ged-university {
        padding: 20px 15%;
    }
</style>
