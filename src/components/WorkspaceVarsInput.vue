<template>
  <div>
    <q-item
      v-for="(_, key) in model"
      :key
    >
      <q-item-section avatar>
        {{ key }}
      </q-item-section>
      <q-item-section>
        <q-input
          placeholder="输入变量内容..."
          v-model="model[key]"
          filled
          autogrow
          clearable
        />
      </q-item-section>
      <q-item-section side>
        <q-btn
          flat
          round
          icon="sym_o_close"
          @click="delete model[key]"
        />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-btn
          label="添加变量"
          icon="sym_o_add"
          flat
          text-sec
          @click="add"
        />
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { dialogOptions } from 'src/utils/values'

const model = defineModel<object>()

const $q = useQuasar()

function add() {
  $q.dialog({
    title: '添加变量',
    prompt: {
      model: '',
      type: 'text',
      label: '变量名'
    },
    cancel: true,
    ...dialogOptions
  }).onOk(name => {
    model.value[name] = ''
  })
}
</script>
