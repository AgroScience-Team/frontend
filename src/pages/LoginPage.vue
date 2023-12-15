<<<<<<< HEAD
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
=======
<template>
    <div style="height:100vh;">
        <div class="upper-bg"> </div>

        <div class="lower-bg"> </div>

        <q-card class="container-card">
            <q-card-section horizontal style="height:100%">
                <q-img class="gt-xs col-3" src="~assets/worker.jpg">
                </q-img>

                <div class="main-card q-mx-md q-my-sm">
                    <div class=" text-h4 text-center register-text">Вход</div>
                    <q-card class="sub-card" flat>
                        <q-card-section class="col-12 ">
                            <q-card-section class="q-px-none">
                                <q-input filled label="Email" type="email" class="q-my-sm" v-model="email"></q-input>
                                <q-input filled label="Пароль" type="password" class="q-my-sm" v-model="password"
                                    @keyup.enter="readyClick"></q-input>
                            </q-card-section>
                        </q-card-section>
                        <q-card-actions>
                            <q-btn @click="readyClick" class="ok-button full-width">Войти</q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
            </q-card-section>
        </q-card>

    </div>
</template>

<script>
import { ref } from 'vue';
import { postlog } from '../axiosRequest'
import { userStore } from '../usage'
import { useRouter } from "vue-router";

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        function readyClick() {
            console.log(email);
            console.log(password);
            if (!email.value.trim() || !password.value.trim()) {
                throw new Error('не все данные введены');
            }

            postlog({ username: email.value, password: password.value })
                .then((myresponse) => {
                    const { access_token, token_type } = myresponse;
                    userStore.updateAll({ access_token, token_type });
                    router.push('/map');
                })
                .catch((myerror) => {
                    console.error(myerror);
                    userStore.setError(myerror);
                })
        }
        return {
            email, password,
            readyClick
        }

    },


}
</script>


<style scoped>
.container-card {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0px;
    background: none;
    width: 100vw;
}

.main-card {
    height: 100%;
    width: 80%;
    margin: 0 auto;
}

.sub-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 40%;
}

.upper-bg {
    background-color: rgba(192, 240, 192, 0.300);
    display: block;
    width: 100%;
    height: 100%;
}

.lower-bg {
    background-color: rgba(125, 186, 125, 0.600);
    width: 100%;
    height: 0%;
}

.register-text {
    height: 200px;
    line-height: 200px;
}

.ok-button {
    background-color: rgb(192, 240, 192);

}



@media (min-width: 600px) {
    .container-card {
        height: 70vh;
        top: 15vh;
        left: 5vw;
        width: 90vw;
        background-color: white;
    }

    .sub-card {
        height: calc(100% - 100px);
    }

    .upper-bg {
        height: 60%;
    }

    .lower-bg {
        height: 40%
    }

    .register-text {
        height: 100px;
        line-height: 100px;
    }
}

@media (min-width: 1024px) {
    .container-card {
        height: 70vh;
        width: 65vw;
        top: 15vh;
        left: 15.5vw;
    }
}

@media (min-width: 1300px) {
    .container-card {
        width: 60vw;
        left: 20vw;
    }

    .ok-button {
        font-size: 16px;
    }
}

@media (min-width: 1500px) {
    .container-card {
        width: 50vw;
        left: 25vw;
    }
}

@media (max-height: 400px) {
    .container-card {
        height: 100vh;
        top: 0;
        left: 0;
        width: 100vw;
    }


}
</style>
>>>>>>> origin/9-correct
