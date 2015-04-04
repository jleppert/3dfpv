var Stream = require('node-rtsp-stream');
var stream = new Stream({
    name: 'video1',
    streamUrl: 'rtsp://192.168.1.11:554/user=admin&password=&channel=1&stream=0.sdp?real_stream--rtp-caching=100',
    wsPort: 9991
});

var stream = new Stream({
    name: 'video2',
    streamUrl: 'rtsp://192.168.1.11:554/user=admin&password=&channel=1&stream=0.sdp?real_stream--rtp-caching=100',
    wsPort: 9992
});
