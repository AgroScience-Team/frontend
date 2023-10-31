<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" color="primary" />

        <q-toolbar-title>
        </q-toolbar-title>

        <q-avatar icon="account_circle" size="xl" font-size="50px" text-color="primary"></q-avatar>

      </q-toolbar>
    </q-header>

    <q-drawer :model-value="true" show-if-above :mini="miniOpen" bordered class="bg-primary text-white" :width="240">
      <q-list>
        <!-- <q-item-label
          header
        >
          Essential Links
        </q-item-label> -->

        <q-item>
          <q-item-section>
            <q-item-label class="label">Agroprom</q-item-label>
          </q-item-section>
        </q-item>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Карта',
    icon: 'o_map',
    link: '/map'
  },

  {
    title: 'Культуры',
    icon: 'o_spa',
    link: '/culture'
  },

  {
    title: 'Севооборот',
    icon: 'o_compost',
    link: '/rotation'
  },

  {
    title: 'Сотрудники',
    icon: 'o_manage_accounts',
    link: '/workers'
  },

  {
    title: 'Настройки',
    icon: 'o_settings',
    link: '/settings'
  },

  {
    title: 'Выход',
    icon: 'o_logout',
    link: '/'
  },
]

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const miniOpen = ref(false);

    return {
      essentialLinks: linksList,
      miniOpen,
      toggleLeftDrawer() {
        miniOpen.value = !miniOpen.value;
      }
    }
  }
}
</script>


<style scoped>
.label {
  font-size: 22px;
  font-family: Arial;
}
</style>
