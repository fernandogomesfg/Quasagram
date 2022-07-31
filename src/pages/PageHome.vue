<template>
  <q-page class="constrain q-pa-md">
    <q-card
      v-for="post in posts"
      :key="post.id"
      class="card-post q-mb-md"
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
            {{ post.location }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        :src="post.imageUrl"
      />

      <q-card-section>
        <div>{{ post.caption }}</div>
        <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
//import { defineComponent } from 'vue'
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Montanhas',
          date: 1659235735330,
          location: 'Beira, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },

        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 1659235735330,
          location: 'Xai-Xai, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },

        {
          id: 3,
          caption: 'Our Changing Planet',
          date: 1659235735330,
          location: 'Maputo, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/chicken-salad.jpg'
        },

        {
          id: 4,
          caption: 'Our Changing Planet',
          date: 1659235735330,
          location: 'Inhambane, Mozambique',
          imageUrl: 'https://cdn.quasar.dev/img/parallax1.jpg'
        }

      ]
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM D h:mmA')
    }
  }
}
</script>


<style lang="sass">
  .card-post
    .q-img
      min-height: 200px
</style>
