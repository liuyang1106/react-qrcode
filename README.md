## 安装

```bash
npm install react-qrcode-component
```

```bash
yarn add react-qrcode-component
```

## 用法
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import QRCode from 'react-qrcode-component';

ReactDOM.render(
  <QRCode value="https://github.com/liuyang1106/react-qrcode.git" />,
  mountNode
);
```

## 可用属性
```javascript
  value: '', // 需要转换的参数
  size: 128, // 二维码大小
  style: {}, // canvas样式
  level: 'L',
  bgColor: 'white',
  fgColor: 'black',
  scale: window.devicePixelRatio || 1, // 比例
```
