<template>
    <div class="chatbot-main">
        <div class="chats">
            <div class="viber chat">
                <a href="viber://chat/?number=%2B959425305939" target="_blank"><i class="fa-brands fa-viber"></i></a>
            </div>
            <div class="messenger chat">
                <a href="http://m.me/100069139800062" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a>
            </div>
            <div class="telegram chat">
                <a href="https://t.me/wailinnhtetaung"><i class="fa-brands fa-telegram" target="_blank"></i></a>
            </div>
            <div class="facebook chat">
                <a href="https://www.facebook.com/profile.php?id=100069139800062" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
        <p></p>
        <div class="text-warning chat-bot pointer">
            <i class='bx bxs-chat'></i>
        </div>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .chat-bot{
        width: 2.5rem;
        height: 2.5rem;
        display: inline-flex;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        font-size: 1.2rem;
        padding: 5px 10px;
        border: .2rem solid var(--main-text-color);
        border-radius: 50%;
    }

    .chat-bot i{
    color: var(--main-text-color);

    }

    .chats {
        background: #bbb;
        border: .1rem solid #3a2d7c;
        border-radius: 12px;
        padding: 5px 10px;
        transform: translateY(200px);
        visibility: hidden;
        transition: .5s ease;
    }

    .chats .chat i{
        font-size: 1.2rem;
        margin-top: 12px;
        cursor: pointer;
        transition: .5s ease;
    }

    .chats .chat:hover i{
        transform: scale(1.3);
    }

    .viber i {
        color: #59267c;
    }

    .messenger i {
        color: #006AFF;
    }

    .telegram i {
        color: #0088cc;
    }

    .facebook i {
        color: #0165E1;
    }

    .chatbot-main {
        position: fixed;
        bottom: 20px;
        right: 25px;
    }

    .chatbot-main:hover .chats {
        visibility: visible;
        transform: translateY(0);
    }
</style>
