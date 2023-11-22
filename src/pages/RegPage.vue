<template>
    <div style="height:100vh;">
        <div class="upper-bg"> </div>

        <div class="lower-bg"> </div>

        <q-card class="absolute-center container ">
            <q-card-section horizontal class="justify-around">
                <q-img class="col-3 q-my-md tractor" src="~assets/worker.jpg">
                </q-img>

                <q-card-section class="col-8 text-primary">
                    <div class="text-weight-bold q-my-md topic">РЕГИСТРАЦИЯ</div>
                    <q-card class="form">
                        <q-card-section>
                            <div class="text-h6">ТОЛЬКО ДЛЯ ОРГАНИЗАЦИЙ</div>
                            <q-card-section class="card-section">
                                <q-input filled label="Email" type="email" class="my-input" v-model="email"></q-input>
                                <q-input filled label="Пароль" type="password" class="my-input" v-model="password"
                                    @keyup.enter="readyClick"></q-input>
                            </q-card-section>
                        </q-card-section>
                        <q-btn style="background-color: rgba(79, 122, 79, 0.759);" text-color="white" @click="readyClick"
                            class="my-btn">готово</q-btn>
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

.container {
    width: 900px;
    height: 600px;
    background-color: rgba(232, 231, 231);
}

.tractor {
    height: 570px;
}

.form {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.topic {
    font-size: 3vw;
}

.card-section {
    height: 80px;
}

.my-btn {
    font-weight: bold;
    font-size: 1.5vw;
    height: 60px;
}

.my-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
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
        font-size: 2.5vw;
    }

    .card-section {
        height: 70px;
    }

    .my-btn {
        height: 10px;
        font-size: 1.2rem;
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
        font-size: 1.5rem;
    }

    .card-section {
        height: 50px;
    }

    .my-btn {
        height: 10px;
        font-size: 1rem;
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
}

@media (max-width: 760px) {
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

    .my-input {
        font-size: 14px;
        margin-bottom: 3px;
        align-content: left;
        padding-top: 5px;
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
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
        margin-left: 7px;
        font-size: 2rem;
    }

    .text-h6 {
        font-size: 0.9rem;
        padding: 2px;
        margin-left: 0px;
    }

    .justify-around {
        justify-content: left;
        padding: 15px;
    }

    .card-section {
        /* display: flex; */
        flex-direction: column;
        padding: 0px;
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