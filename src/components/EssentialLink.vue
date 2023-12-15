<<<<<<< HEAD
<<<<<<< HEAD
<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    :class="{ 'menu': isActive }"
    class="myclass"
  >
  <q-item-section v-if="icon" avatar>
    <q-icon :name="icon" />
  </q-item-section>
=======
<template>
  <q-item clickable tag="a" :to="link" :class="{ 'menu': isActive }" class="myclass" @click="action" v-if="!hide">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
>>>>>>> origin/localbranch

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
<<<<<<< HEAD
=======
    action: {
      type: Function,
      default: () => { }
    },
    hide: {
      type: Boolean,
      default: false,
    }
>>>>>>> origin/localbranch
  },

  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.fullPath === props.link)

<<<<<<< HEAD
=======


>>>>>>> origin/localbranch
    return {
      isActive
    }
  }
})
</script>


<style scoped>
.menu {
  background-color: #151C28;
  color: white;
}

.menu::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
<<<<<<< HEAD
  width: 6px; 
  background-color: #5EA7FD;
}

.myclass{
=======
  width: 6px;
  background-color: #5EA7FD;
}

.myclass {
>>>>>>> origin/localbranch
  font-family: 'Arial';
  font-size: 20px;
}
</style>
<<<<<<< HEAD
=======
<template>
  <q-item clickable tag="a" :to="link" :class="{ 'menu': isActive }" class="myclass">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
  },

  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.fullPath === props.link)

    return {
      isActive
    }
  }
})
</script>


<style scoped>
.menu {
  background-color: #151C28;
  color: white;
}

.menu::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: #5EA7FD;
}

.myclass {
  font-family: 'Arial';
  font-size: 20px;
}
</style>
>>>>>>> origin/9-correct
=======
>>>>>>> origin/localbranch
