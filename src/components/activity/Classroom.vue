<template>
    <div class="activity">

        <div class="title">
            <h2>Classroom Activities</h2>
        </div>

        <div class="photo">
            <div id="carousel1" class="carousel slide"  data-bs-ride="carousel" >
                <div class="carousel-indicators">
                    <button type="button" v-for="i in 8" :key="i" data-bs-target="#carousel1" :data-bs-slide-to="`${i-1}`" :class="{active: i-1 == 0}" aria-current="true" :aria-label="`Slide ${i}`"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item w-100" :class="{active: i == 1}" v-for="i in 8" :key="i">
                        <img :src="require(`@/assets/images/activity/classroom/${i}.jpg`)"  alt="">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                $('#carousel1').carousel();
            })
        }
    }
</script>


