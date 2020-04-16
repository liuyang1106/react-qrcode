import React from 'react';
import ReactDOM from 'react-dom';

import QRCode from '../src';

ReactDOM.render(
  <QRCode value="https://github.com/liuyang1106" />,
  document.getElementById('qrcode')
);
