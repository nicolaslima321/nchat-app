<template>
  <q-page class="flex flex-center">
    <div class="bg-custom q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <chat-box :messages="sender.messages" :user="sender.name" :sent="sender.sent"/>
        <chat-box :messages="receiver.messages" :user="receiver.name" :sent="receiver.sent"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import ChatBox from '../components/ChatBox.vue'
var io = require('socket.io-client')

export default {
  name: 'PageIndex',

  components: {
    'chat-box': ChatBox
  },

  data () {
    return {
      sender: {
        name: 'Sender',
        messages: ['Eae mano'],
        sent: true
      },
      receiver: {
        name: 'Receiver',
        messages: ['Salve'],
        sent: false
      }
    }
  },

  mounted () {
    var socket = io.connect('http://localhost:3333')
    socket.emit('connection')
  },

  methods: {

  }
}
</script>

<style>
.bg-custom {
  background-color: rgb(150, 150, 150);
  border-radius: 1.5em;
}
</style>
