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
      headers: { 'Content-Type': 'text/palin; charset=utf-8', "Accept-Encoding": "zlib, deflate, zstd, br",'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36' }
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

function requestHelper2(action, token) {
  (function (callback) {
    'use strict';

    const httpTransport = require('https');
    const responseEncoding = 'utf8';
    const httpOptions = {
      hostname: 'code.chiang.fun',
      port: '443',
      path: `/api/v1/jd/${action}/create/${token}/`,
      method: 'GET',
      headers: { 'Content-Type': 'text/palin; charset=utf-8', "Accept-Encoding": "zlib, deflate, zstd, br",'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36' }
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
  // codeList.forEach(token => {
  //   requestHelper(action, token);
  // });

  console.log(`${action} : ${codeList.join('&')}`);
}

function requsetListWithActionWithCodeDomain(codeList, action) {
  // codeList.forEach(token => {
  //   requestHelper2(action, token);
  // });

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

requsetListWithAction(FRUITSHARECODES, 'farm');

// 东东萌宠
let PETSHARECODES = [
  'MTE1NDUwMTI0MDAwMDAwMDQwMTMwNjA3',
  'MTE1NDAxNzYwMDAwMDAwNDA4MzI3Njk=',
  'MTE1NDAxNzcwMDAwMDAwNDEzMzU5Mzc=',
  'MTE1NDAxNzcwMDAwMDAwMzcxNzkwNTM=',
  'MTE1NDQ5MzYwMDAwMDAwNDEzNDAwMTk=',
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


// 读取东东工厂
if (process.env.DDFACTORY_SHARECODES) {
  let value = getSpliteList(process.env.DDFACTORY_SHARECODES)
  if (value.length > 0) {
    DDFACTORY_SHARECODES = value
  }
}

requsetListWithAction(DDFACTORY_SHARECODES, 'ddfactory');

// 惊喜工厂
let jxfactory = [
  'SyNBZQvjSBenzPwonSPARw==',
  'gacXxuxWeXE9-VOt3Yar1w==',
  '0MJBvMp-ha4aFNkv_-x6xQ==',
  'eGjI5clv22xpQWv8Ku27YQ=='
]

requsetListWithAction(jxfactory,'jxfactory');


// //苹果抽奖机
// let jdapple = [
//   'P04z54XCjVUm4aW5mlSUGL63n9DnFw',
//   'P04z54XCjVUm4aW5mlOQT-mijUTk0ne',
//   'P04z54XCjVUm4aW5m9cZ2Tw2y1Pl2mjfX9PLyA',
//   'P04z54XCjVUm4aW5nxRQjmmiCcV',
//   'P04z54XCjVUm4aW5jQLAGXx3XtInLFHjy8',
// ]

// requsetListWithAction(jdapple,'jdapple');

let jdzz = [
  'AV28Ona-TzjwBDg',
  'AV3MfwPPHhGwOCGc',
  'AUWE5m6WWnDAKADGs1ClOxg',
  'AQmwcxvPFlmo',
  'ACjZemqSQyjcBDGKXnQ',
]

requsetListWithActionWithCodeDomain(jdzz,'jdzz')

let jdcrazyjoy = [
  'sp1TzeFdBwTiDFQafZkDnQ==',
  'Bf3c4oNz53_gU9Nv53exhg==',
  'XVBI9Yfsy2mElM-4uAlAHqt9zd5YaBeE',
  'UNub8-fQkhKrfc3eWGgXhA==',
  '1PUdKNtYT5G3I4aCuw4scA==',
]

requsetListWithActionWithCodeDomain(jdcrazyjoy,'jdcrazyjoy')

let jdnh = [
  '27bb9b17428142f3a1e07701930799d7',
  '60ca5c95d99e4ca1b7fa34e382a33126',
  'e87d694829e244d1b9f3fa37864b0715',
  'b347fd274fe449c6b4cc2b3b9eeb32d3',
  '284eeda52f884329be218e8af903ee1a'
]

requsetListWithActionWithCodeDomain(jdnh,'jdnh')