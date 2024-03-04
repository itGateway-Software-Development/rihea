<template>
    <div class="activity odd">

        <div class="title">
            <h2>Gathering Event</h2>
        </div>

        <div class="photo">
            <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button v-for="i in 84" :key="i" type="button" data-bs-target="#carousel2" :data-bs-slide-to="`${i-1}`" :class="{active: i-1 == 0}" aria-current="true" :aria-label="`Slide ${i}`"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item w-100" :class="{active: i == 1}" v-for="i in 84" :key="i">
                        <img :src="require(`@/assets/images/activity/gathering/${i}.jpg`)" alt="">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
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
                $('#carousel2').carousel();
            })
        }
    }
</script>


