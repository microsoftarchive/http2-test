// > [4.3. Header Compression and Decompression](http://tools.ietf.org/html/draft-ietf-httpbis-http2-06#section-4.3)
// >
// > ...
// >
// > A receiver MUST terminate the connection with a connection
// > error (Section 5.4.1) of type COMPRESSION_ERROR, if it does not
// > decompress a header block.
//
// This test sends a single, incomplete header representation in the response header block.
//	":status": "200",	
//	":status": "200"
var invalidDataTestCase = require('./invalid-data');

module.exports = function(socket, log, callback) {
  invalidDataTestCase(socket, log, callback, new Buffer('888181', 'hex'));
};