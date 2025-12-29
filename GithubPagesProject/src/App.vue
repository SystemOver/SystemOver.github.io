<script setup lang="ts">
import '../styles/mainStyle.css'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Nerdzone',
    icon: 'pi pi-microchip',
    items: [
      {
        label: 'Software',
        icon: 'pi pi-file',
        route: '/nerdzone/software',
      },
      {
        label: 'Hardware',
        icon: 'pi pi-desktop',
        route: '/nerdzone/hardware',
      },
    ],
  },
  {
    label: 'Testpage',
    icon: 'pi pi',
    route: '/test',
  },
])
</script>

<template>
  <!--Navbar-->
  <div class="glass-navbar sticky top-0 left-0 right-0 z-50">
    <Menubar :model="items">
      <template #start>
        <h1 class="Title" @click="$router.push('/')">The System Page</h1>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </div>

  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nabla&family=Pacifico&family=Passero+One&family=Smooch+Sans:wght@100..900&display=swap');

.glass-navbar {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: rgba(153, 153, 153, 0.6);
}

.glass-navbar .p-menubar {
  background: transparent;
}

.glass-navbar .p-menubar-root-list {
  background: transparent;
}
</style>
