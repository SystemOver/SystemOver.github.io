<script setup lang="ts">
import { Card, Divider } from 'primevue'
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2 col-start-2">
      <Card>
        <template #content>
          <p class="justify-self-center text-gray-500">welcome to:</p>
          <h1 class="text-6xl justify-self-center text-shadow-lg text-shadow-green-500 Title mb-8 mt-2 hue-spin-hover ">The System Page</h1>
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
            <div class="twitch-card max-w-1/2 min-w-1/2 float-left pr-8">
              <div class="twitch-video">
                <iframe
                  src="https://player.twitch.tv/?channel=system_over&parent=localhost&parent=systemover.github.io"
                  allowfullscreen
                  width="100%"
                 
                  frameborder="0"
                ></iframe>
              </div>
              <div class="twitch-info">
                <div class="twitch-title">system_over on Twitch</div>
                <span>system</span>
              </div>
            </div>
            <h1 class="text-3xl Title">Am i live right now?</h1>
            <p>
              Honestly, i don't know, because i am too dumb to figure out when i am live or not.
              However in the rare occassion that i am, here is a livestream player of the current
              stream. <br /><br />But i would still recommend going on the offical
              <a style="color: fuchsia" href="https://www.twitch.tv/system_over">Twitch</a> Website
              to watch, since i will probably get more views and also it will probably work better
              💀💀
            </p>
            <!-- Add a placeholder for the Twitch embed -->
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>
