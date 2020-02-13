<template>
  <q-page class="bg-custom flex flex-center">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <div v-bind:key="message" v-for="message in messages">
          <chat-box :messages="sender.messages" :user="sender.name" :sent="sender.sent"/>
          <chat-box :messages="receiver.messages" :user="receiver.name" :sent="receiver.sent"/>
        </div>
        <q-input rounded outlined bottom-slots v-model="text">
          <template v-slot:append>
            <q-icon v-ripple size="1.5em" name="send" @click="sendMessage" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import ChatBox from '../components/ChatBox.vue'
import Socket from '../classes/server.js'

export default {
  name: 'PageIndex',

  components: {
    'chat-box': ChatBox
  },

  data () {
    return {
      text: '',
      messages: {
        id: 0
      },
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
    var self = this

    Socket.on('message-received', function (data) {
      console.log('Message arrived', data)
      self.receiver.messages.push(data.message)
    })
  },

  methods: {
    sendMessage () {
      Socket.emit('message-sent', 'oi')
      this.sender.messages.push(this.text)
    }
  }
}
</script>

<style>
.bg-custom {
  background-color: rgb(240, 240, 240);
}
</style>
