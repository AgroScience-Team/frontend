<template>
    <div style="height:100vh;">
        <div class="upper-bg"> </div>

        <div class="lower-bg"> </div>

        <q-card class="absolute-center container ">
            <q-card-section horizontal class="justify-around">
                <q-img class="col-3 q-my-md tractor" src="~assets/worker.jpg">
                </q-img>

                <q-card-section class="col-8 text-primary">
                    <div class="text-h3 text-weight-bold q-my-md topic">вход</div>
                    <q-card class="form">
                        <q-card-section class="card-section">
                            <q-input filled label="Email" type="email" class="q-my-lg my-input" v-model="email"></q-input>
                            <q-input filled label="Пароль" type="password" class="q-my-md my-input" v-model="password"
                                @keyup.enter="readyClick"></q-input>
                        </q-card-section>
                        <q-btn text-color="white" size="lg" @click="readyClick" class="my-btn">войти</q-btn>
                    </q-card>
                </q-card-section>
            </q-card-section>
        </q-card>

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');
        const password = ref('');

        function readyClick() {
            console.log(email);
            console.log(password);
            if (!email.value.trim() || !password.value.trim()) {
                throw new Error('не все данные введены');
            }
        }
        return {
            email, password,
            readyClick
        }

    },


}
</script>

<style scoped>
.upper-bg {
    background-color: rgba(192, 240, 192, 0.333);
    display: block;
    width: 100%;
    height: 60%;
}

.lower-bg {
    background-color: rgba(125, 186, 125, 0.596);
    width: 100%;
    height: 40%;
}

.tractor {
    height: 570px;
}

.container {
    width: 900px;
    height: 600px;
    background-color: rgba(232, 231, 231);
}

.form {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.my-btn {
    background-color: rgba(79, 122, 79, 0.759);
    font-weight: bold;
}

.my-input {
    font-size: 14px;
    margin-bottom: 3px;
    align-content: left;
    padding-top: 5px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
}

@media (max-width: 1200px) {
    .container {
        width: 800px;
        height: 500px;
    }

    .tractor {
        height: 470px;
    }

    .form {
        height: 75%;
    }

    .topic {
        font-size: 2.5rem;
    }

    .card-section {
        height: 70px;
    }

    .my-btn {
        height: 10px;
        font-size: 1.5vw;
    }
}

@media (max-width: 1000px) {
    .container {
        width: 600px;
        height: 400px;
    }

    .tractor {
        height: 370px;
    }

    .form {
        display: flex;
        height: 75%;
    }

    .topic {
        font-size: 2.3rem;
    }

    .card-section {
        height: 50px;
    }

    .my-btn {
        height: 10px;
        font-size: 1.8vw;
    }
}

@media (max-width: 760) {
    .container {
        width: 400px;
        height: 300px;
    }

    .tractor {
        height: 270px;
    }

    .form {
        display: flex;
        height: 75%;
    }

    .topic {
        font-size: 2.9vw;
    }

    .card-section {
        height: 40px;
    }

    .my-btn {
        font-size: 1.8vw;
    }
}

@media (max-width: 560) {
    .container {
        width: 400px;
        height: 300px;
    }

    .tractor {
        height: 270px;
    }

    .form {
        display: flex;
        height: 75%;
    }

    .topic {
        font-size: 2.9vw;
    }

    .card-section {
        height: 40px;
    }

    .my-btn {
        font-size: 1.8vw;
    }
}

@media (max-width: 320px) {

    .upper-bg,
    .lower-bg {
        display: none;
    }

    .tractor {
        /* width: 90px;
        height: 350px;
        padding: 0; */
        display: none;
    }

    .container {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        /* box-sizing: border-box; */
    }

    .form {
        height: 290px;
        width: 250px;
        margin: 0;
        padding: 0;
        background-color: rgba(232, 231, 231);
        /* border-radius: 8px; */
    }

    .topic {
        padding: 0;
        margin-top: 0;
        margin-left: 5px;
        font-size: 2.3rem;
    }

    .justify-around {
        justify-content: left;
        padding: 15px;
    }

    .card-section {
        /* display: flex; */
        flex-direction: column;
        margin: 10px;
        margin-top: 0px;
        padding: 3px;
        /* padding-left: 7px;
        padding-right: 7px; */
    }

    .my-btn {
        width: 100%;
        /* height: 15px; */
        font-size: 15px;
    }

    .my-input {
        font-size: 14px;
        margin-bottom: 3px;
        align-content: left;
        padding-top: 10px;
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
    }

}
</style>