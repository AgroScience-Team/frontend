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
  <div v-if="isInit1">

    <router-view />
  </div>
  <div v-else>not Initialized</div>
</template>

<script>
import { ref, watch } from "vue";
import { userStore } from "./usage";
import { onBeforeMount } from "vue";
// import { postinter } from "./axiosRequest";
import { useRoute } from "vue-router";

export default {
  setup() {
    const isInit1 = ref(false);
    // const isInit = ref(userStore.getIsInitialized());
    const errorShow = ref(false);
    const error = ref(null);
    // const route = useRoute();
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
    // watch(
    //   () => userStore.getIsInitialized(),
    //   (val) => {
    //     isInit.value = val;
    //   }
    // )
    // onBeforeMount(() => {
    console.log('onBEFORE');
    userStore.init()
      // .then(() => {
      //   if (route.name !== 'entry') {
      //     return postinter();
      //   }
      // })
      .then(() => {
        isInit1.value = true;
        console.log('done');
        console.log(userStore.getState().access_token);
      })
      .catch((error) => {
        console.error(error);
      })
    // })
    return { errorShow, error, closeError, isInit1 }
  }
}
</script>