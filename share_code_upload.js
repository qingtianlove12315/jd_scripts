// 互助请求
function requestHelper(action, token) {
  (function (callback) {
    'use strict';

    const httpTransport = require('http');
    const responseEncoding = 'utf8';
    const httpOptions = {
      hostname: 'api.turinglabs.net',
      port: '80',
      path: `/api/v1/jd/${action}/create/${token}/`,
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
    console.log(`${action} STATUS:${statusCode} BODY:${body}`);
  });
}

// 数据分割
function getSpliteList(code) {
  if (code.indexOf('&') > -1) {
    return code.split('&');
  } else if (code.indexOf('\n') > -1) {
    return code.split('\n');
  } else {
    return code.split();
  }
  return [];
}

// 批量请求
function requsetListWithAction(codeList, action) {
  codeList.forEach(token => {
    requestHelper(action, token);
  });

  console.log(`${action} : ${codeList.join('&')}`);
}

// 东东农场
let FRUITSHARECODES = [
  'f630c68384eb417faba0e0132661e246',
  '5b6026f045684fe0918b978501fd6601',
  '28ca8c7a98a342969f4933c8f7152ed6',
  '4a6aecf9438842599a17435ca111dbb5',
  '99dc4d30caf04801a6f8429af6c4d5b7',
];

// 读取东东农场
if (process.env.FRUITSHARECODES) {
  let value = getSpliteList(process.env.FRUITSHARECODES)
  if (value.length > 0) {
    FRUITSHARECODES = value
  }
}

requsetListWithAction(FRUITSHARECODES, 'ddfactory');

// 东东萌宠
let PETSHARECODES = [
  'f630c68384eb417faba0e0132661e246',
  '5b6026f045684fe0918b978501fd6601',
  '28ca8c7a98a342969f4933c8f7152ed6',
  '4a6aecf9438842599a17435ca111dbb5',
  '99dc4d30caf04801a6f8429af6c4d5b7',
]

// 读取东东萌宠
if (process.env.PETSHARECODES) {
  let value = getSpliteList(process.env.PETSHARECODES)
  if (value.length > 0) {
    PETSHARECODES = value
  }
}

requsetListWithAction(PETSHARECODES, 'pet');

// 种豆
let PLANT_BEAN_SHARECODES = [
  'uxlqtimyc6trkvrkcs6cn4y4ma',
  'r2kjupw2sq3ix766qqovwvxuzi',
  'e7lhibzb3zek3cjd57phorfifpskoh5mvajzrea',
  'ztnqxc7dlck4z5vgyqpc54p3aq',
  'hvkoiqb2jlg4ewhabtslfwz33q3h7wlwy7o5jii',
];

// 读取种豆
if (process.env.PLANT_BEAN_SHARECODES) {
  let value = getSpliteList(process.env.PLANT_BEAN_SHARECODES)
  if (value.length > 0) {
    PLANT_BEAN_SHARECODES = value
  }
}

requsetListWithAction(PLANT_BEAN_SHARECODES, 'bean');

// 东东工厂
let DDFACTORY_SHARECODES = [
  'P04z54XCjVWnYaS5mlSUGL63n9DnBo',
  'P04z54XCjVWnYaS5mlOQT-mijUTkwzH',
  'P04z54XCjVWnYaS5m9cZ2Tw2y1Pl3kTXKpKABg',
  'P04z54XCjVWnYaS5nxRQjmmiCcV',
  'P04z54XCjVWnYaS5jQLAGXx3XtInNv94W4',
];


// 读取种豆
if (process.env.DDFACTORY_SHARECODES) {
  let value = getSpliteList(process.env.DDFACTORY_SHARECODES)
  if (value.length > 0) {
    DDFACTORY_SHARECODES = value
  }
}

requsetListWithAction(DDFACTORY_SHARECODES, 'ddfactory');
