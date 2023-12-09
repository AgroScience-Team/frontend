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
                <q-btn class="q-mr-sm col-12 col-md-4 " flat color="negative" @click="deleteUser">Удалить</q-btn>
                <q-btn class="col-12 col-md-3 q-mr-sm" flat @click="clearOrg">Очистить</q-btn>
                <q-btn class="q-mr-sm col-12 col-md-4" color="primary" @click="sendPost">Сохранить</q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import { postToServer } from 'src/axiosRequest';
import { userStore } from 'src/usage';
import { reactive, ref, onBeforeUnmount, onBeforeMount } from 'vue';

export default {
    setup() {

        const orgData = reactive({ name: '', description: '', city: '', inn: '', phone_number: '', website: '' });

        const flag = ref(false);
        function clearOrg() {
            for (const key in orgData) {
                orgData[key] = '';
            }
        }

        onBeforeMount(() => {
            console.log(userStore.getState().user_id)
            if (userStore.getState().user_id) {
                postToServer({ url: 'http://localhost:8080/api/profiles/organizations', getParams: { params: { user_id: userStore.getState().user_id } }, request: 'get' })
                    .then((response) => {
                        console.log(response);
                        for (const key in response) {
                            // if (!Object.keys(orgData).find(o => o === key)) {
                            //     throw new Error('ключ ' + key + ' не найден');
                            // }
                            if (Object.keys(orgData).find(o => o === key)) {
                                orgData[key] = response[key];
                            }
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        userStore.setError(error);
                    })
            }
        })


        function deleteUser() {
            if (userStore.getState().user_id) {
                postToServer({ url: 'http://localhost:8080/api/profiles/organizations/me', request: 'delete' })
                    .then((response) => {
                        console.log(response);
                        clearOrg();
                        userStore.updateState('user_id', null);
                    })
                    .catch((error) => {
                        console.error(error);
                        userStore.setError(error);
                    })
            }
        }

        function sendPost() {
            for (const key in orgData) {
                console.log(orgData[key]);
                console.log('KEY ', key);
                if (!orgData[key].trim()) {
                    throw new Error('Не все данные введены');
                }
            }
            let request = 'post';
            let url = 'http://localhost:8080/api/profiles/organizations'
            if (userStore.getState().user_id) {
                request = 'put';
                url += '/me';
            }

            postToServer({ url, data: orgData, request })
                .then((response) => {
                    console.log(response);
                    userStore.updateState('user_id', response.user_id);
                    flag.value = true;
                })
                .catch((error) => {
                    console.error(error);
                    userStore.setError(error);
                })
        }

        onBeforeUnmount(() => {
            flag.value = false;
        })
        return {
            orgData, sendPost, flag, clearOrg, deleteUser
        }

    }
}
</script>