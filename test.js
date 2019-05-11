'use strict'

const { ExecutedTests } = require('test-executor')

/* 
  The main goal here is to check if everything works properly in terms of consistency of objects,
  here we use self signed certificate,
  so we need to set this property (in real code you need to use certificate
   that is signed by  Certificate Authority and also you need to use certificate in requests to https server)
*/
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const testDirs = ['./test/agent', './test/https', './test/incoming-message', './test/options', './test/request', './test/response', './test/server']

const executedTests = (curIndex = 0, curExecutedTests = new ExecutedTests(testDirs[0]), tree = curExecutedTests) => {
  if (curIndex < testDirs.length - 1) {
    curIndex += 1
    const nextExecutedTests = new ExecutedTests(testDirs[curIndex])
    curExecutedTests.after(nextExecutedTests)
    executedTests(curIndex, nextExecutedTests, tree)
  } else {
    tree.call()
  }
}

executedTests()

