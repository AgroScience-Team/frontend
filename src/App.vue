<template>
  <q-dialog v-model="errorShow">
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6 text-bold">Ошибка</div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="white-space: pre-line;">{{ error }}</q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="closeError" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <router-view />
</template>

<script>
import { ref, watch } from "vue";
import { userStore } from "./usage";
import { onBeforeMount } from "vue";

export default {
  setup() {
    const errorShow = ref(false);
    const error = ref(null);
    function closeError() {
      userStore.setError(null);
      errorShow.value = false;
    }
    watch(
      () => userStore.getError(),
      (val) => {
        console.log(val);
        error.value = val;
        if (val !== null) {
          errorShow.value = true;
        }
      },
    );
    onBeforeMount(() => userStore.init());

    function checkToken() {
      postinter()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
          userStore.setError(error);
        });
    }

    checkToken();


    return { errorShow, error, closeError }
  }
}
</script>