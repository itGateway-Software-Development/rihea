<template>
    <div class="contact-us-section">
        <img src="../assets/images/contact-us.jpg" alt="">
        <div class="contact-us text-center">
            <p class="m-0 p-0">RIHEA</p>
            <h4 class="my-2 p-0">CONTACT US</h4>
            <p>Lorem ipsum dolor sit, amet consectetur ?</p>
        </div>
    </div>
    <div class="contact-info">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-12 mb-3 phone-section">
                <div class="phone mb-3">
                    <div class="phone-icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="phone-number py-3">
                        <p class="fw-bold">Phone Number</p>
                        <p>+959-942000120 </p>
                    </div>
                </div>
                <div class="phone mb-3">
                    <div class="phone-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div class="phone-number py-3">
                        <p class="fw-bold">Email</p>
                        <p>enquiry@rihea.education </p>
                    </div>
                </div>
                <div class="phone mb-3">
                    <div class="phone-icon"><i class="fa-solid fa-globe"></i></div>
                    <div class="phone-number py-3">
                        <p class="fw-bold">Website</p>
                        <p>www.rihea.education </p>
                    </div>
                </div>
                <div class="phone ">
                    <div class="phone-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div class="phone-number py-3">
                        <p class="fw-bold">Address</p>
                        <p>No.96(GF), 39th street,<br> Kyauktada Township, Yangon </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12 col-12 form-section">
                <form action="#">
                    <div class="input-box mb-3">
                        <input type="text" placeholder="Full Name">
                        <input type="email" placeholder="Email Address">
                    </div>
                    <div class="input-box mb-3">
                        <input type="text" placeholder="Mobile Number">
                        <!-- <input type="text" placeholder="Class You Want to Know"> -->
                        <select class="form-select" name="" id="">
                            <option value="">Calss You Want to Know </option>
                            <option value="">PRE GED</option>
                            <option value="">GED</option>
                            <option value="">PRE IGCSE</option>
                            <option value="">O LEVEL IGCSE</option>
                            <option value="">ENG 4 SKILLS</option>
                        </select>
                    </div>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" class="btn">
                </form>
            </div>
        </div>
    </div>
    <div class="map">
        <div class="text-center mt-4">
            <h5 class="mb-3">Find Us on Google Map</h5>
            <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cumque!</p>
            <p class="mb-2">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="text-center mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1872312583487!2d96.1619540583956!3d16.77079498200347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec7d2b4d4e83%3A0x2c80ab6f60748e6f!2s36%2039th%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1693194992110!5m2!1sen!2smm" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    .contact-us-section {
        position: relative;
        width: 100%;
        height: 450px;
    }
    .contact-us-section img {
        width: 100%;
        height: 100%;
        filter: blur(2px);
    }
    .contact-us-section .contact-us{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .contact-us p, .contact-us h4 {
        color: #fff;
        font-weight: bold;
    }
    .contact-us h4 {
        font-size: 2rem;
        background-color: #23085a;
    }
    .contact-info {
        padding: 50px 15%;
        background-color: #eee;
        margin-top: 2rem;
    }
    .contact-info .phone {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        background: #f5f5f5;
        padding: 0px 20px;
        width: 350px;
        border-radius: 10px;
    }
    .phone .phone-icon {
        background: #23085a;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
    }
    .phone-icon i {
        color: var(--main-text-color);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 22px;
    }
    .phone-number {
        padding: 5px 10px;
    }
    .phone-number p{
        margin: 0;
        margin-bottom: 5px;
        font-size: 14px;
    }
     form {
        max-width: 60rem;
        margin: 0rem 0 0 2rem;
        text-align: center;
        margin-bottom: 3rem;
        background-color: #f5f5f5;
        padding: 10px 15px 25px;
        border-radius: 10px;
    }

    form .input-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    form .input-box input, form select,
    form textarea {
        width: 100%;
        padding: 10px 10px;
        font-size: 16px;
        color: rgb(114, 113, 113);
        background: #f5f5f5;
        border-radius: 10px;
        margin: .7rem 0;
        border: 1px solid #23085a;
    }
    form .input-box input:focus, form textarea:focus {
        outline: none;
    }
    .input-box input::placeholder, form textarea::placeholder {
        font-size: 15px;
    }
    form .input-box input, form select {
        width: 49%;
    }
    form textarea {
        resize: none;
    }

    form .btn {
        margin-top: 2rem;
        cursor: pointer;
        background: #23085a;
        color: var(--main-text-color);
        font-weight: bold;
    }
    .map {
        background: #fff;
        padding: 40px 16%;
    }
    .map h5 {
        font-weight: bold;
        font-size: 1.5rem;
    }
    .map p {
        font-size: 14px;
    }

    @media (max-width:990px) {
        .contact-info .phone{
            margin: 0 auto;
        }
        .contact-info form {
            margin-top: 2rem;
        }
        .contact-info .form-section {
            background: #f5f5f5;
            border-radius: 10px;
        }
    }

    @media (max-width:450px) {
    html {
        font-size: 50%;
    }
    .contact-us-section {
        height: 230px;
    }

     form .input-box input, form select {
        width: 100%;
    }
    .contact-us p, .contact-us h4 {
        color: #fff;
        font-weight: 400;
        font-size: 12px;
    }
    .contact-us h4 {
        font-size: 1.1rem;
        background-color: #23085a;
    }
    .contact-info .phone {
        display: static !important;
        background: #f5f5f5;
        padding: 0px 20px;
        border-radius: 10px;
        margin: 0 auto;
        width: auto;
    }
    .phone .phone-icon {
        width: 40px;
        height: 40px;
    }
    .phone-icon i {
        font-size: 17px;
    }
    .phone-number p{
        margin: 0;
        margin-bottom: 5px;
        font-size: 12px;
    }
     form {
        width: auto;
        margin: 0rem auto 1rem;
        margin-bottom: 1rem;
        background-color: #f5f5f5;
        padding: 10px 15px 15px;
        border-radius: 10px;
    }

    form .input-box input, form select,
    form textarea {
        font-size: 13px;
    }
    .map {
        padding: 30px 10%;
    }
    .map h5 {
        font-size: 1.3rem;
    }
    .map p {
        font-size: 12px;
    }
    .map iframe {
        width: 100%;
        height: 300px;
    }
}
</style>
