
// request 种豆提交互助码api 
function requestZD(token) {
  (function (callback) {
    'use strict';

    const httpTransport = require('http');
    const responseEncoding = 'utf8';
    const httpOptions = {
      hostname: 'api.turinglabs.net',
      port: '80',
      path: `/api/v1/jd/bean/create/${token}/`,
      method: 'GET',
      headers: { 'Content-Type': 'text/palin; charset=utf-8', "Accept-Encoding": "zlib, deflate, zstd, br" }
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;

    // Paw Store Cookies option is not supported

    const request = httpTransport.request(httpOptions, (res) => {
      let responseBufs = [];
      let responseStr = '';

      res.on('data', (chunk) => {
        if (Buffer.isBuffer(chunk)) {
          responseBufs.push(chunk);
        }
        else {
          responseStr = responseStr + chunk;
        }
      }).on('end', () => {
        responseStr = responseBufs.length > 0 ?
          Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;

        callback(null, res.statusCode, res.headers, responseStr);
      });

    })
      .setTimeout(0)
      .on('error', (error) => {
        callback(error);
      });
    request.write("")
    request.end();


  })((error, statusCode, headers, body) => {
    console.log(`STATUS:${statusCode} BODY:${body}`);
  });
}

// request 农场提交互助码api 
function requestNC(token) {
  (function (callback) {
    'use strict';

    const httpTransport = require('http');
    const responseEncoding = 'utf8';
    const httpOptions = {
      hostname: 'api.turinglabs.net',
      port: '80',
      path: `/api/v1/jd/farm/create/${token}/`,
      method: 'GET',
      headers: { 'Content-Type': 'text/palin; charset=utf-8', "Accept-Encoding": "zlib, deflate, zstd, br" }
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;

    // Paw Store Cookies option is not supported

    const request = httpTransport.request(httpOptions, (res) => {
      let responseBufs = [];
      let responseStr = '';

      res.on('data', (chunk) => {
        if (Buffer.isBuffer(chunk)) {
          responseBufs.push(chunk);
        }
        else {
          responseStr = responseStr + chunk;
        }
      }).on('end', () => {
        responseStr = responseBufs.length > 0 ?
          Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;

        callback(null, res.statusCode, res.headers, responseStr);
      });

    })
      .setTimeout(0)
      .on('error', (error) => {
        callback(error);
      });
    request.write("")
    request.end();


  })((error, statusCode, headers, body) => {
    console.log(`STATUS:${statusCode} BODY:${body}`);
  });

}
// request 萌宠提交互助码api jhc 
function requestMC(token) {
  (function (callback) {
    'use strict';

    const httpTransport = require('http');
    const responseEncoding = 'utf8';
    const httpOptions = {
      hostname: 'api.turinglabs.net',
      port: '80',
      path: `/api/v1/jd/pet/create/${token}/`,
      method: 'GET',
      headers: { 'Content-Type': 'text/palin; charset=utf-8', "Accept-Encoding": "zlib, deflate, zstd, br" }
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;

    // Paw Store Cookies option is not supported

    const request = httpTransport.request(httpOptions, (res) => {
      let responseBufs = [];
      let responseStr = '';

      res.on('data', (chunk) => {
        if (Buffer.isBuffer(chunk)) {
          responseBufs.push(chunk);
        }
        else {
          responseStr = responseStr + chunk;
        }
      }).on('end', () => {
        responseStr = responseBufs.length > 0 ?
          Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;

        callback(null, res.statusCode, res.headers, responseStr);
      });

    })
      .setTimeout(0)
      .on('error', (error) => {
        callback(error);
      });
    request.write("")
    request.end();


  })((error, statusCode, headers, body) => {
    // console.log('ERROR:', error);
    // console.log('STATUS:', statusCode);
    // console.log('HEADERS:', JSON.stringify(headers));
    // console.log('BODY:', body);
    console.log(`STATUS:${statusCode} BODY:${body}`);
  });
}

let ZDList = [
  'uxlqtimyc6trkvrkcs6cn4y4ma',
  'r2kjupw2sq3ix766qqovwvxuzi',
  'e7lhibzb3zek3cjd57phorfifpskoh5mvajzrea',
  'ztnqxc7dlck4z5vgyqpc54p3aq',
  'hvkoiqb2jlg4ewhabtslfwz33q3h7wlwy7o5jii',
];


ZDList.forEach(token => {
  requestZD(token);
});

let NCList = [
  'f630c68384eb417faba0e0132661e246',
  '5b6026f045684fe0918b978501fd6601',
  '28ca8c7a98a342969f4933c8f7152ed6',
  '4a6aecf9438842599a17435ca111dbb5',
  '99dc4d30caf04801a6f8429af6c4d5b7',
];

NCList.forEach(token => {
  requestNC(token);
});

let MCList = [
  'MTE1NDUwMTI0MDAwMDAwMDQwMTMwNjA3',
  'MTE1NDAxNzYwMDAwMDAwNDA4MzI3Njk=',
  'MTE1NDAxNzcwMDAwMDAwNDEzMzU5Mzc=',
  'MTE1NDAxNzcwMDAwMDAwMzcxNzkwNTM=',
  'MTE1NDQ5MzYwMDAwMDAwNDEzNDAwMTk=',
];
MCList.forEach(token => {
  requestMC(token);
});
