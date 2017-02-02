# JSLibForActionCable
Small JS lib for Action Cable (Ruby on Rails)

## Init new connection

```js
var acws = new ACWS("ws://<domain or ip address>/cable");
acws.ws.onopen = function(e) {
  // JS code
}
```

## Subscribe/Unsubscribe to a channel

```js
acws.unsubscribe("<channel name>");
```

## Message to a channel

```js
acws.message("<channel name>", "<method name>", "<data key>", <data value>);
```

## Example

### Sample Action Action Cable Channel

```rb
class TestChannel < ApplicationCable::Channel
  def listen data
    stream_from "test"
  end

  def speak data
  	ActionCable.server.broadcast("test", data);
  end
end
```

### Working with lib

```html
<script>
  var acws = new ACWS("ws://localhost:3000/cable");
    acws.ws.onopen = function(e) {
      acws.subscribe("TestChannel");
    }
    acws.ws.onmessage = function (event) {
      console.log(event.data);
    }
    // acws.message("TestChannel", "speak", "message", "Sample message");
    // acws.message("TestChannel", "speak", "message", {text: "Sample text"});
</script>
```
