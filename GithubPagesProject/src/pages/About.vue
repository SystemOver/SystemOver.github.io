<script setup lang="ts">
import { Divider, Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primevue'
import { ref } from 'vue'
import QAData from '@/data/QA.json?url'

const Questions = ref([{ Question: '', Answer: '' }])

fetch(QAData)
  .then((resonse) => resonse.json())
  .then((data) => (Questions.value = data))
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-5 mx-5 sm:mx-0">
    <div class="col-start-1 col-span-1 sm:col-start-2 sm:col-span-3 ">
      <div class="justify-items-center">
        <p>Who is</p>
        <h1 class="Title hue-spin-hover text-6xl">System?</h1>
      </div>
      <Divider />
      <p>
        You and i both know that this should be a wikipedia article, however i am too dumb (or
        infamous) to have my own article so this will have to suffice. Of course i could now go and
        make "pretty" sections and whatnot but instead i will just make a Q&A Section of the most
        common Questions that i get asked on stream, and add more later if any new ones that i
        missed pop up in my head.
      </p>
      <Divider />
      <h2 class="Title text-4xl mb-3">Q&A Section</h2>
      <Accordion value="0">
        <AccordionPanel v-for="question in Questions" :key="question.Question" :value="question.Answer">
          <AccordionHeader>{{ question.Question }}</AccordionHeader>
          <AccordionContent>
            <div v-html="question.Answer" />
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<style scoped></style>
