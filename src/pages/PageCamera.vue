<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <img
        class="full-width "
        src="https://cdn.quasar.dev/img/mountains.jpg" alt="">
    </div>

    <div class="text-center q-pa-md">
      <q-btn
        round
        color="grey-10"
        icon="eva-camera"
        size="lg"
        />
    </div>

    <div class="row justify-center q-ma-md">
       <q-input
        class="col col-sm-6"
        v-model="text"
        label="Caption"
        dense
        />
    </div>

    <div class="row justify-center q-ma-md">
       <q-input
        class="col col-sm-6"
        v-model="text"
        label="Location"
        dense
      >
        <template v-slot:append>
          <q-btn round dense flat icon="eva-navigation-2-outline" />
        </template>
      </q-input>
    </div>

    <div class="row justify-center q-mt-lg">
        <q-btn
          unelevated
          rounded
          color="primary"
          label="Post Image"
        />
    </div>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageCamera'
})
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid
    border-radius: 10px
</style>
