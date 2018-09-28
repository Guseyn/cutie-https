# cutie-https

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>https</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-https/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/https');
```

For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>https</b> module.

## agent

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CreatedAgent` | `new Agent` | `options` | `agent` |
| `CreatedAgentConnection` | `agent.createConnection` | `agent, options` | `stream/socket` |
| `DestroyedAgent` | `agent.destroy` | `agent` | `agent` |
| `KeptSocketAliveOfAgent` | `agent.keepSocketAlive` | `agent, socket` | `socket` |
| `MaxFreeSocketsOfAgent` | `agent.maxFreeSockets` | `agent` | `number` |
| `MaxSocketsOfAgent` | `agent.maxSockets` | `agent` | `number` |
| `NameOfAgent` | `agent.getName` | `agent, options` | `string` |
| `RequestsOfAgent` | `agent.requests` | `agent` | `object` |
| `ReusedSocketOfAgent` | `agent.reuseSocket` | `agent, socket` | `stream/socket` |
| `SocketsOfAgent` | `agent.sockets` | `agent` | `object` |

## https

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CreatedHttpsServer` | `https.createServer` | `[options][, requestListener(Event with definedBody(request, response))]` | `server` |
| `HttpsGetRequest` | `https.get` | `options[, listener(Event(one time) with definedBody(incomingMessage))]` | `request` |
| `HttpsRequest` | `https.request` | `options[, listener(Event(one time) with definedBody(incomingMessage))]` | `request` |

## incoming-message

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `DestroyedIncomingMessage` | `message.destroy` | `message` | `message` |
| `HeadersOfIncomingMessage` | `message.headers` | `message` | `object` |
| `HttpVersionOfIncomingVersion` | `message.httpVersion` | `message` | `string` |
| `IncomingMessageWithAbortEvent` | `message.on('abort', event)` | `message, event(Event with definedBody())` | `message` |
| `IncomingMessageWithCloseEvent` | `message.on('close', event)` | `message, event(Event with definedBody())` | `message` |
| `IncomingMessageWithTimeout` | `message.setTimeout` | `message, msecs, callback` | `message` |
| `MethodOfIncomingMessage` | `message.method` | `message` | `string` |
| `RawHeadersOfIncomingMessage` | `message.rawHeaders` | `message` | `string[]` |
| `RawTrailersOfIncomingMessage` | `message.rawTrailers` | `message` | `string[]` |
| `SocketOfIncomingMessage` | `message.socket` | `message` | `socket` |
| `StatusCodeOfIncomingMessage` | `message.statusCode` | `message` | `number` |
| `StatusMessageOfIncomingMessage` | `message.statusMessage` | `message` | `string` |
| `TrailersOfIncomingMessage` | `message.trailers` | `message` | `object` |
| `UrlOfIncomingMessage` | `message.url` | `message` | `string` |

## options

| Async Object  | Async/sync call or Description | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CreatedOptions` | Builds options object: `(key1, value1, key2, value2) => {key1: value1, key2: value2}`  | `...args like (key1, value1, key2, value2)` | `object` |
| `OptionsWithAgent` | `options.agent = agent`  | `options, agent` | `object` |

## request

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `AbortedReqest` | `request.abort` | `request` | `request` |
| `EndedReqest` | `request.end` | `request, data`, `encoding` | `request` |
| `RequestAbortedTime` | `request.aborted` | `request` | `number` |
| `RequestHeader` | `request.header` | `request, name` | `string` |
| `RequestWithAbortEvent` | `request.on('abort', event)` | `request, event(Event with definedBody())` | `request` |
| `RequestWithConnectEvent` | `request.on('connect', event)` |`request, event(Event with definedBody(incomingMessage, socket, head))` | `request` |
| `RequestWithContinueEvent` | `request.on('continue', event)` | `request, event(Event with definedBody())` | `request` |
| `RequestWithDataEvent` | `request.on('data', event)` | `request, event(Event with definedBody(chunk))` | `request` |
| `RequestWithEndEvent` | `request.on('end', event)` | `request, event(Event with definedBody())` | `request` |
| `RequestWithErrorEvent` | `request.on('error', event)` | `request, event(Event with definedBody(error))` | `request` |
| `RequestWithFlushedHeaders` | `request.flushHeaders` | `request` | `request` |
| `RequestWithHeader` | `request.setHeader` | `request, name, value` | `request` |
| `RequestWithNoDelay` | `request.setNoDelay` | `request, noDelay` | `request` |
| `RequestWithRemovedHeader` | `request.removeHeader` | `request, name` | `request` |
| `RequestWithResponseEvent` | `request.on('response', event)` | `request, event(Event with definedBody(response))` | `request` |
| `RequestWithSocketEvent` | `request.on('socket', event)` | `request, event(Event with definedBody(socket))` | `request` |
| `RequestWithSockedKeepAlive` | `request.setSocketKeepAlive` | `request, enable, initialDelay` | `request` |
| `RequestWithTimeout` | `request.setTimeout` | `request, timeout` | `request` |
| `RequestWithTimeoutEvent` | `request.on('timeout', event)` | `request, event(Event with definedBody())` | `request` |
| `RequestWithUpgradeEvent` | `request.on('upgrade', event)` | `request, event(Event with definedBody(req, socket, head))` | `request` |
| `SocketOfRequest` | `request.socket` | `request` | `socket` |
| `WrittenRequest` | `request.write` | `request`, `chunk`, `encoding('utf8')` | `request` |

## reponse

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ConnectionOfResponse` | `response.connection` | `response` | `socket` |
| `EndedResponse` | `response.end` | `response, data`, `encoding('utf8')` | `response` |
| `HasResponseHeader` | `response.hasHeader` | `response, name` | `boolean` |
| `HeaderOfResponse` | `response.getHeader` | `response, name` | `string` |
| `HeadersOfResponse` | `response.getHeaders` | `response` | `object` |
| `IsResponseFinished` | `response.finished` | `response` | `boolean` |
| `ResponseWithAddedTrailers` | `response.addTrailers` | `response, headers` | `response` |
| `ResponseWithCloseEvent` | `response.on('close', event)` | `response, event(Event with definedBody())` | `response` |
| `ResponseWithFinishEvent` | `response.on('finish', event)` | `response, event(Event with definedBody())` | `response` |
| `ResponseWithHeader` | `response.setHeader` | `response, name, value` | `response` |
| `ResponseWithRemovedHeader` | `response.removeHeader` | `response, name` | `response` |
| `ResponseWithStatusCode` | `response.statusCode` | `response, statusCode` | `response` |
| `ResponseWithStatusMessage` | `response.statusMessage` | `response, statusMessage` | `response` |
| `ResponseWithTimeout` | `response.setTimeout` | `response`, `msecs, callback` | `response` |
| `ResponseWithWrittenHead` | `response.writeHead` | `response, statusCode, statusMessage, headers` | `response` |
| `SendDateOfResponse` | `response.sendDate` | `response` | `boolean` |
| `SocketOfResponse` | `response.socket` | `response` | `socket` |
| `StatusCodeOfResponse` | `response.statusCode` | `response` | `number` |
| `StatusMessageOfResponse` | `response.statusMessage` | `response` | `string` |
| `HaveResponseHeadersSent` | `response.headersSent` | `response` | `boolean` |
| `WrittenContinueResponse` | `response.writeContinue` | `response` | `response` |
| `WrittenResponse` | `response.write` | `response, chunk, encoding('utf8')` | `response` |

## server

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ClosedServer` | `server.close` | `server` | `server` |
| `IsServerListening` | `server.listening` | `server` | `boolean` |
| `KeepAliveTimeoutOfServer` | `server.keepAliveTimeout` | `server` | `number` |
| `ListeningServer` | `server.listen` | [...args](https://nodejs.org/dist/latest-v8.x/docs/api/net.html#net_server_listen) | `server` |
| `MaxHeadersCountOfServer` | `server.maxHeadersCount` | `server` | `number` |
| `ServerWithCloseEvent` | `server.on('close', event)` | `server, event(Event with definedBody())` ||
| `ServerWithCheckContinueEvent` | `server.on('checkContinue', event)` | `server, event(Event with definedBody(req, res))` | `server` |
| `ServerWithCheckExpectationEvent` | `server.on('checkExpectation', event)` | `server, event(Event with definedBody(req, res)`) | `server` |
| `ServerWithClientErrorEvent` | `server.on('clientError', event)` | `server, event(Event with definedBody(exception, socket))` | `server` |
| `ServerWithConnectEvent` | `server.on('connect', event)` | `server, event(Event with definedBody(request, socket, head))` | `server` |
| `ServerWithConnectionEvent` | `server.on('connection', event)` | `server`, `event(Event with definedBody(socket))` | `server` |
| `ServerWithRequestEvent` | `server.on('request', event)` | `server, event(Event with definedBody(request, response))` | `server` |
| `ServerWithTimeout` | `server.setTimeout` | `server, msecs, callback` | `server` |
| `ServerWithUpgradeEvent` | `server.on('upgrade', event)` | `server, event(Event with definedBody(request, socket, head)`) | `server` |
| `TimeoutOfServer` | `server.timeout` | `server` | `number` |

[npm-image]: https://img.shields.io/npm/v/@cuties/https.svg
[npm-url]: https://npmjs.org/package/@cuties/https
