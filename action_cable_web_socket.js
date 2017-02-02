class ACWS {
  constructor(ws) {
    this.ws = new WebSocket(ws);
  }

  subscribe(channel) {
    var subscibe_content = {
      "command": "subscribe",
      "identifier": "{\"channel\":\"" + channel + "\"}"
    };
    this.ws.send(JSON.stringify(subscibe_content));
  }

  unsubscribe(channel) {
    var subscibe_content = {
      "command": "unsubscribe",
      "identifier": "{\"channel\":\"" + channel + "\"}"
    };
    this.ws.send(JSON.stringify(subscibe_content));
  }

  message(channel, action, message_key, message) {
    var message_content = {
      "command": "message",
      "identifier": "{\"channel\":\"" + channel + "\"}",
      "data": "{\"action\":\"" + action + "\",\"" + message_key + "\":" + JSON.stringify(message) + "}"
    };
    this.ws.send(JSON.stringify(message_content));
  }
}
