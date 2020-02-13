<template>
  <q-chat-message
    :name="user"
    :text="messages"
    :sent="sent"
  />
</template>

<script>
export default {
  name: 'ChatBox',

  props: {
    'messages': Array,
    'user': String,
    'sent': Boolean
  }
}
</script>
