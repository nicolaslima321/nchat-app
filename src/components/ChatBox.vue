<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="user"
        :text="messages"
        sent
        v-ripple
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',

  props: {
    'messages': Array,
    'user': String
  }
}
</script>
