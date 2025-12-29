<script setup lang="ts">
import { Card, Divider } from 'primevue'
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2 col-start-2">
      <Card>
        <template #content>
          <p class="justify-self-center">welcome to:</p>
          <h1 class="text-6xl justify-self-center">The System Page</h1>
          <Divider class="my-credits-divider"/>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>
