<template>
    <div class="main">
        <div class="index-banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    data(){
        return {

        }
    },
    methods:{
    },
    mounted(){
        //首页轮播swiper
       
        new Swiper(".swiper-container", {
            pagination: {
            el: ".swiper-pagination",
            loop: true,
            clickable: true,
            },
            autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            loop: true,
        });
        
    }
}
</script>

<style scoped>

</style>