<script setup>
import { ref } from 'vue'
import Ohbug from '@ohbug/browser'
import JsonViewer from 'vue-json-viewer/ssr'
import 'vue-json-viewer/style.css'

const data = ref({})

const client = Ohbug.setup({
  apiKey: 'YOUR_API_KEY',
  onNotify(event) {
    data.value = event
  },
})

function createCustomEvent() {
  const event = client.createEvent({
    category: 'error',
    type: 'custom',
    detail: 'im custom log',
  })
  client.notify(event)
}

const onClickTriggerUnhandledrejection = async() => {
  createCustomEvent()
}
</script>

<template>
  <div class="demo">
    <button @click="onClickTriggerUnhandledrejection">
      throw new error
    </button>

    <JsonViewer :value="data" theme="jv-light" />
  </div>
</template>

<style>
.demo {
  background-color: var(--vp-code-block-bg);
  color: white;
  border-radius: 8px;
  padding: 16px;
}

.demo button {
  background-color: #444;
  transition: background-color .5s;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: .9em;
  font-weight: 600;
}

.jv-light {
  background: #fafafa !important;
  border-radius: 8px;
  margin-top: 16px;
}
</style>
