<template>
  <div class="chat-container">
    <div class="chat-header">
      <h2>Bookworms Chat</h2>
    </div>
    <div class="chat-messages">
      <div v-for="msg in messages" :key="msg.id" :class="['message', msg.sender]">
        <div class="message-content">
          <strong>{{ msg.sender }}:</strong> {{ msg.text }}
        </div>
      </div>
    </div>
    <div class="chat-input">
      <textarea v-model="newMessage" placeholder="Upišite svoju poruku..." rows="3"></textarea>
      <div class="chat-buttons">
        <button @click="goBack">Natrag</button>
        <button @click="sendMessage">Pošalji</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatView',
  data() {
    return {
      messages: [
        { id: 1, sender: 'Korisnik', text: 'Pozdrav, trebam pomoć oko narudžbe.' },
        { id: 2, sender: 'Korisnik - Prodavač', text: 'Naravno! Kako vam mogu pomoći?' },
      ],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({
          id: this.messages.length + 1,
          sender: 'Korisnik',
          text: this.newMessage.trim(),
        });
        this.newMessage = '';
      }
    },
    goBack() {
      this.$router.push({ path: '/oglasi', name: 'oglasi' });
    },
  },
};
</script>

<style>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 90vw;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.chat-header {
  background-color: #28a745;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #f8f9fa;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  clear: both;
  word-wrap: break-word;
}

.message.Korisnik {
  background-color: #28a745;
  color: white;
  margin-left: auto;
}
.message.korisnik-prodavac {
  background-color: #e9ecef;
  color: #212529;
}

.message-content {
  word-wrap: break-word;
}

.chat-input {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #ccc;
}

.chat-input textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  resize: none;
}

.chat-buttons {
  display: flex;
  justify-content: space-between;
}

.chat-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
}

.chat-buttons button:first-child {
  background-color: #6c757d;
}

.chat-buttons button:first-child:hover {
  background-color: #5a6268;
}

.chat-buttons button:last-child {
  background-color: #28a745;
}

.chat-buttons button:last-child:hover {
  background-color: #218838;
}
</style>
