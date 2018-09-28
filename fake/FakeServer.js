'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  ReadDataByPath
} = require('@cuties/fs');
const {
  CreatedHttpsServer,
  CreatedOptions,
  ListeningServer,
  EndedResponse
} = require('./../index');

class RequestResponseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(request, response) {
    // handle request
    new EndedResponse(response, 'fake response').call();
  }

}

module.exports = (port, host, event) => {
  return new ListeningServer(
    new CreatedHttpsServer(
      new CreatedOptions(
        'key', new ReadDataByPath('./src/key.pem'),
        'cert', new ReadDataByPath('./src/cert.pem')
      ),
      event || new RequestResponseEvent()
    ), port || 8124, host || '127.0.0.1'
  );
}
