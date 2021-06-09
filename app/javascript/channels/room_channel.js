import consumer from "./consumer"

consumer.subscriptions.create ({ channel: "roomChannel", room_id: 1}, {
  connected() {
    console.log("yo")
  },

  disconnected() {

  },

  received(data) {
    console.log(data)
  }
});
