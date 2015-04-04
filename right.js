var Stream = require('node-rtsp-stream');
var stream = new Stream({
    name: 'video1',
    streamUrl: 'rtsp://192.168.1.11:554/user=admin&password=&channel=0&stream=0.sdp?real_stream--rtp-caching=0',
    wsPort: 9991
});
