<template>
    <div class="history">
        <div ref="scrollel" class="row text-center">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 p-4">
                <i class='bx bxs-graduation'></i>
                <p class="pt-4" ref="year">0</p>
                <p ref="para">More than 15 years in Education Industry</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 p-4">
                <i class='bx bxs-group'></i>
                <p class="pt-4" ref="students">0</p>
                <p>Over 3000 satisfied <br>students</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 p-4">
                <i class='bx bxs-award'></i>
                <p class="pt-4" ref="awards">0</p>
                <p>Won more than 50 <br> Awards</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 p-4">
                <i class='bx bxs-institution'></i>
                <p class="pt-4" ref="partners">0</p>
                <p>More than 100 partner Universities</p>
            </div>  
        </div>
    </div>
</template>

<script>
    import {animate} from 'motion'
import { onMounted, ref } from 'vue'
    export default {
        setup() {
            const scrollel = ref(null);
            let year = ref(null); 
            let students = ref(null);
            let awards = ref(null);
            let partners = ref(null);
            
            onMounted(() => {
                //for scroll animation
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5, // Adjust this threshold value as needed
                };

                const observer = new IntersectionObserver(handleIntersect, options);

                observer.observe(scrollel.value);
            });

            const handleIntersect = (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    startFunction();
                }
            };

            const startFunction = () => {
                setTimeout(() => {
                    animate(
                        (progress) => year.value ? year.value.innerText = Math.round(progress * 15) : '',
                        { duration: 1, easing: "ease-out" }
                    ),
                    animate(
                        (progress) => students.value ? students.value.innerText = Math.round(progress * 3000) : '',
                        { duration: 1, easing: "ease-out" }
                    ),
                    animate(
                        (progress) => awards.value ? awards.value.innerText = Math.round(progress * 50) : '',
                        { duration: 1, easing: "ease-out" }
                    ),
                    animate(
                        (progress) => partners.value ? partners.value.innerText = Math.round(progress * 100) : '',
                        { duration: 1, easing: "ease-out" }
                    )
                }, 1000)
            };

            return {year, students, awards, partners, scrollel}
        }
    }
</script>

<style scoped>
    .history {
        padding: 30px 10%;
        margin-bottom: 10px;
        background: #fff;
    }

    i {
        font-size: 3rem;
        color: rgb(238,185,36);
    }

    div>p {
        font-size: 1.2rem;
    }

    @media (max-width: 1600px) {
        .history {
            padding: 0px 3% 20px;
            margin-bottom: 10px;
        }

        div>p {
            font-size: 1rem;
        }
    }

    @media (max-width:850px) {
        .history {
            padding: 0 9%;
        }
    }

    @media(max-width:450px) {
      .history p {
        font-size: 16px;
      }
    }
</style>
