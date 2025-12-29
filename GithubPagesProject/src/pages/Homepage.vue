<script setup lang="ts">
import { Card, Divider } from 'primevue'
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2 col-start-2">
      <Card>
        <template #content>
          <p class="justify-self-center">welcome to:</p>
          <h1 class="text-6xl justify-self-center Title mb-8 mt-2">The System Page</h1>
          <Divider class="my-credits-divider" />
          <div>
            <img src="../img/pogchamp.png" alt="testimage" class="float-right max-w-1/3" />
            <div class="clear-left">
              <h1 class="text-3xl Title">What is this?</h1>
              <p>
                Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too
                old to change the world, but what about that kid, sitting down, opening a book,
                right now, in a branch at the local library and finding drawings of pee-pees and
                wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve
                better? Look. If you think this is about overdue fines and missing books, you'd
                better think again. This is about that kid's right to read a book without getting
                his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your
                kicks. You and your good-time buddies.
              </p>
            </div>
          </div>
          
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>
