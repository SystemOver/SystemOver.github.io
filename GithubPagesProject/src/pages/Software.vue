<script setup lang="ts">
import { label } from '@primeuix/themes/aura/metergroup'
import { Card, Divider, Listbox } from 'primevue'
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';
import { ref } from 'vue'

const toast = useToast();


// prettier-ignore-start
const StreamingSoftwareData = ref([
  {
    id: 'Obs_Studio',
    label: 'Obs Studio',
    detail:
      '<p> <i>OBS Studio is a free and open-source application for screencasting and live streaming. Written in C/C++ and built with Qt, OBS Studio provides real-time capture, scene composition, recording, encoding, and broadcasting via Real-Time Messaging Protocol (RTMP), HLS, SRT, RIST or WebRTC. </i> <br> <br> That was the official definition of the Software according to Wikipedia, or even more simply put: This is the Main Software that does the "Streaming" part of all this. It is completely free and if you want to use it you can download it <a href="https://obsproject.com/de/download">here</a></p>',
    logoSource:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OBS_Studio_Logo.svg/1280px-OBS_Studio_Logo.svg.png',
  },
  {
    id: 'Streamer_bot',
    label: 'Streamer.bot',
    detail:
      '<p>Streamer.bot is a completely free software that enables you, the streamer, to handle a insane amount of automation within one program. This can range from a simple effekt on screen that happens on a regular intervall up to stuff like, when a chatter redeems a specific channel point reward, create a screenshot of the stream, edit it via a custom c# script and post it on social media. It also is a great hub for many popular integrations like a heartrate monitor for relevant streams and so on. It can be quite confusing at first, but due to their new darkmode update it should be easier for new users to start off creating their own custom automations within minutes. Here is a link to their <a href="https://streamer.bot/">software</a></p>',
    logoSource:
      'https://imgs.search.brave.com/o2gPxsOahOdKJDc_Yy-TOwpvzj1Srq3R6GqVGzXy4Ik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY2RuLmp0dm53/Lm5ldC90ZWFtLWFz/c2V0cy9zdHJlYW1l/cmRvdGJvdC00Zjlm/OWRlMjllODM0Nzll/ODg4N2ZkODFjYjdi/MGYxYS5wbmc',
  },
  {
    id: 'Speaker_bot',
    label:'Speaker.bot',
    detail:'<p>The name should already give it away but for the uninitiated: This is the software that i use to to TTS (Text-to-Speech) on my livestream, so basically it is just a glorified audioplayer. The Reason why i use it though is because it is from the makers of Streamer.bot (or at least i think so) and therefore has a great integration into Streamer.bot. So yes, you can do it your own way and use something like streamelements tts donations, but you probably wont have the same amount of customizability as by using speaker.bot.</p>',
    logoSource:
    'https://speaker.bot/logo.svg'
},
])

const copied = ref(false)


const copyList = async () => {

    var text = "Raw List of Software: \n";
    StreamingSoftwareData.value.forEach(x => text+= "- "+ x.label+"\n")


    try {
    await navigator.clipboard.writeText(text)
    copied.value = true

    toast.add({severity:'success', summary:'Copied List', detail:'copied entrie list of Software that i use to your clipboard', life:10000})

    setTimeout(() => { copied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// prettier-ignore-end

const selectedStreamingIndexes = ref([])
</script>

<template>
  <div class="grid grid-cols-4 gap-4 ">
    <Toast/>
    <div class="col-span-2 col-start-2">
      <div class="justify-self-center justify-items-center">
        <p>What kind of:</p>
        <h1 class="text-6xl Title mb-8 mt-2">Software</h1>
        <p>do i use?</p>
      </div>
      <Divider />

      <div>
        <p>
          I know that some of you will probably just want a clear "copy and paste" list of all the
          software that i use, so i will put it <a @click="copyList()">here</a>, but under that you will find a more detailed
          description and explaination why, how, when i use specific software. Anyways here is the
          list:
        </p>
        <div class="grid grid-cols-2 mt-8">
          <div class="col-span-1">
            <h2 class="text-4xl Title justify-self-center mb-5">Streaming Related</h2>
            <Listbox
              v-model="selectedStreamingIndexes"
              :options="StreamingSoftwareData.map((row) => row.label)"
              filter
              checkmark
              multiple
            />
          </div>
          <div class="col-span-1 col-start-2">
            <h2 class="text-4xl Title justify-self-center mb-5">Streaming Related</h2>
            <Listbox filter checkmark multiple/>
          </div>
        </div>
        <Divider />
        <div v-if="selectedStreamingIndexes.length===0">
            <h3 class="text-4xl justify-self-center p-10 text-gray-500">Select a Software to learn more About it</h3>

        </div>

        <div
          v-for="value in StreamingSoftwareData.filter(
            (x) => selectedStreamingIndexes.find((y) => y === x.label) != null,
          )"
          :key="value.label"
        >
          <h2 class="text-3xl">{{ value.label }}</h2>
          <img
            class="float-left max-w-1/12 mt-2 m-1"
            :src="value.logoSource"
            :alt="value.label + ' logo image'"
          />
          <div v-html="value.detail" />

          <Divider />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
