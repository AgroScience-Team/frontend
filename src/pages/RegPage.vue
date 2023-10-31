<template>
    <div style="height:100vh;">
        <div class="upper-bg"> </div>

        <div class="lower-bg"> </div>

        <q-card class="absolute-center container ">
            <q-card-section horizontal class="justify-around">
                <q-img class="col-3 q-my-md" src="~assets/worker.jpg" height="570px">
                </q-img>

                <q-card-section class="col-8 text-primary">
                    <div class="text-h4 text-weight-bold q-my-md">РЕГИСТРАЦИЯ</div>
                    <q-card class="form">
                        <q-card-section>
                            <div class="text-h6">ТОЛЬКО ДЛЯ ОРГАНИЗАЦИЙ</div>
                            <q-card-section>
                                <q-input filled label="Email" type="email" class="q-my-lg" v-model="email"></q-input>
                                <q-input filled label="Пароль" type="password" class="q-my-md" v-model="password"
                                    @keyup.enter="readyClick"></q-input>
                            </q-card-section>
                        </q-card-section>
                        <q-btn style="background-color: rgba(79, 122, 79, 0.759);" text-color="white" size="lg"
                            @click="readyClick" class="my-btn">готово</q-btn>
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
    background-color: rgba(232, 231, 231, 0.593);
}

.form {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.my-btn {
    font-weight: bold;
}
</style>