<template>
  <q-page class="constrain q-pa-md">
    <q-card
      class="card-post"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://github.com/fernandogomesfg.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">fernandogomesfg</q-item-label>
          <q-item-label caption>
            Maputo, Mozambique
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div>Ponte Maputo</div>
        <div class="text-caption text-grey">June 8, 9:24AM </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
//import { defineComponent } from 'vue'

export default {
  name: 'PageHome'
}
</script>


<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>
