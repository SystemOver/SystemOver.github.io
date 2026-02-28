<script setup lang="ts">
import { Card, Divider } from 'primevue'
</script>

<template>
 <div class="grid grid-cols-1 sm:grid-cols-5 mx-5 sm:mx-0">
    <div class="col-start-1 col-span-1 sm:col-start-2 sm:col-span-3 ">
      <Card>
        <template #content>
          <p class="justify-self-center text-gray-500">welcome to:</p>
          <h1
            class="text-6xl justify-self-center text-shadow-lg text-shadow-green-500 Title mb-8 mt-2 hue-spin-hover"
          >
            The System Page
          </h1>
          <Divider class="my-credits-divider" />
          <div>
            <img src="../img/pogchamp.png" alt="testimage" class="float-right max-w-1/3" />
            <div class="clear-left">
              <h1 class="text-3xl Title">What is this?</h1>
              <p>
                This is the home base for system_over, a Twitch streamer who turns coding, minecraft
                tech gameplay, and general chaos into live entertainment. Here you can see when the
                next stream is happening, catch up on what has been built on and off stream, and
                find all the links connected to the channel. <br /><br />If you are new, the short
                version: it is a mix of programming, nerdy side projects, and chat-driven ideas that
                sometimes go horribly right. The goal is to keep things relaxed, slightly scuffed,
                and fun enough that you want to open the stream in a second tab and hang out.
              </p>
            </div>
          </div>
          <Divider class="my-credits-divider" />
          <div>
            <h1 class="text-3xl Title">Am i live right now?</h1>
            <p>
              Honestly, i don't know, because i am too dumb to figure out when i am live or not.
              <br /><br />However in the rare occasion that i am, i recommend going on the offical
              <a style="color: fuchsia" href="https://www.twitch.tv/system_over">Twitch</a> Website
              to watch, since i will probably need the views.💀💀
            </p>
            <!-- Add a placeholder for the Twitch embed -->
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>
