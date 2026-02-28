<script setup lang="ts">
import { label } from '@primeuix/themes/aura/metergroup'
import { Card, Divider, Listbox } from 'primevue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import { ref } from 'vue'
import SoftwareData from '@/data/SoftwareData.json?url'

const toast = useToast()

// prettier-ignore-start
const StreamingSoftwareData = ref([
  { id: ' ', label: '  ', type: '', detail: '  ', logoSource: '   ' },
])

fetch(SoftwareData)
  .then((response) => response.json())
  .then((data) => (StreamingSoftwareData.value = data))

// prettier-ignore-end

const selectedStreamingIndexes = ref([])
const selectedNonStreamingIndexes = ref([])

const copied = ref(false)

const copyList = async () => {
  var text = 'Raw List of Software: \n'
  StreamingSoftwareData.value.forEach((x) => (text += '- ' + x.label + '\n'))

  try {
    await navigator.clipboard.writeText(text)
    copied.value = true

    toast.add({
      severity: 'success',
      summary: 'Copied List',
      detail: 'copied entrie list of Software that i use to your clipboard',
      life: 10000,
    })

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// prettier-ignore-end
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-5 mx-5 sm:mx-0">
    <Toast />
    <div class="col-start-1 col-span-1 sm:col-start-2 sm:col-span-3">
      <div class="justify-self-center justify-items-center">
        <p>What kind of</p>
        <h1
          class="text-6xl Title text-shadow-lg text-shadow-green-500 text-inse mb-2 mt-2 hue-spin-hover"
        >
          Software
        </h1>
        <p>do i use?</p>
      </div>
      <Divider />

      <div>
        <p>
          I know that some of you will probably just want a clear "copy and paste" list of all the
          software that i use, so i will put it <a @click="copyList()">here</a>, but under that you
          will find a more detailed description and explaination why, how, when i use specific
          software. Anyways here is the list:
        </p>
        <div class="grid grid-cols-2 mt-8">
          <div class="col-span-1">
            <h2 class="text-4xl Title justify-self-center mb-5">Streaming Related</h2>
            <Listbox
              v-model="selectedStreamingIndexes"
              :options="
                StreamingSoftwareData.filter((x) => x.type === 'Streaming').map((row) => row.label)
              "
              filter
              checkmark
              multiple
            />
          </div>
          <div class="col-span-1 col-start-2">
            <h2 class="text-4xl Title justify-self-center mb-5">Non-Streaming Related</h2>
            <Listbox
              v-model="selectedNonStreamingIndexes"
              :options="
                StreamingSoftwareData.filter((x) => x.type === 'NonStreaming').map(
                  (row) => row.label,
                )
              "
              filter
              checkmark
              multiple
            />
          </div>
        </div>
        <Divider />
        <div v-if="selectedStreamingIndexes.length + selectedNonStreamingIndexes.length === 0">
          <h3 class="text-4xl justify-self-center p-10 text-gray-500">
            Select a Software to learn more About it
          </h3>
        </div>

        <div
          v-for="value in StreamingSoftwareData.filter(
            (x) =>
              selectedStreamingIndexes
                .concat(selectedNonStreamingIndexes)
                .find((y) => y === x.label) != null,
          )"
          :key="value.label"
        >
          <Card class="card-glow">
            <template #content>
              <h2 class="text-3xl Title">{{ value.label }}</h2>
              <Divider type="dashed" />
              <img
                class="float-left max-w-1/6 mt-2 m-1"
                :src="value.logoSource"
                :alt="value.label + ' logo image'"
              />
              <div v-html="value.detail" />
            </template>
          </Card>

          <Divider />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference '../../styles/mainStyle.css'; /* Path to your Tailwind entry (adjust as needed) */

.card-glow {
  @apply shadow-[6px_8px_10px_theme(colors.green.500/0.3)] rounded-xl transition-all duration-300 ease-out;
}

.card-glow:hover {
  @apply shadow-[6px_8px_10px_theme(colors.green.500/0.6)] rounded-xl scale-101 hue-rotate-30;
}
</style>
