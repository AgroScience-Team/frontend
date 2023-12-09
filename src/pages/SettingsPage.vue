<template>
    <q-banner class="bg-green-3" v-show="flag">Данные сохранены</q-banner>
    <div class="text-h5 text-center q-my-sm">Профиль организации</div>
    <div class="row justify-center">
        <q-card flat class="col-12 col-md-6">
            <q-card-section>
                <q-input outlined label="Название" class="q-my-sm" v-model="orgData.name"></q-input>
                <q-input outlined label="Описание" class="q-my-sm" v-model="orgData.description"></q-input>
                <q-input outlined label="Город" class="q-my-sm" v-model="orgData.city"></q-input>
                <q-input outlined label="ИНН" class="q-my-sm" v-model="orgData.inn"></q-input>
                <q-input outlined label="Номер телефона" class="q-my-sm" v-model="orgData.phone_number"></q-input>
                <q-input outlined label="Сайт" class="q-my-sm" v-model="orgData.website"></q-input>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn class="col-12 col-md-3 q-mr-sm" @click="clearOrg">Очистить</q-btn>
                <q-btn class="q-mr-sm col-12 col-md-4" color="primary" @click="sendPost">Сохранить</q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import { postToServer } from 'src/axiosRequest';
import { userStore } from 'src/usage';
import { reactive, ref } from 'vue';

export default {
    setup() {

        const orgData = reactive({ name: '', description: '', city: '', inn: '', phone_number: '', website: '' });

        const flag = ref(false);
        function clearOrg() {
            for (const key in orgData) {
                orgData[key] = '';
            }
        }
        function sendPost() {
            for (const key in orgData) {
                if (!orgData[key].trim()) {
                    throw new Error('Не все данные введены');
                }
            }

            postToServer({ url: 'http://localhost:8080/api/profiles/organizations', object: orgData, request: 'post' })
                .then((response) => {
                    console.log(response);
                    flag.value = true;
                })
                .catch((error) => {
                    console.error(error);
                    userStore.setError(error);
                })
        }

        return {
            orgData, sendPost, flag, clearOrg
        }

    }
}
</script>