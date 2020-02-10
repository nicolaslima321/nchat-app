<template>
  <q-page class="flex flex-center">
    <chat-box messages="lorem" user="test"/>
  </q-page>
</template>

<script>
import ChatBox from '../components/ChatBox.vue'

export default {
  name: 'PageIndex',

  components: {
    'chat-box': ChatBox
  },

  data () {
    return {
      lorem: ['hey, how are you?']
    }
  }
}
</script>
