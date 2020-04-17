import React from 'react';
import PropTypes from 'prop-types';
import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';
import { convertStr } from './utils';

class ReactQRCode extends React.PureComponent {
  constructor(props) {
    super(props);
    this._canvas = React.createRef();
  }

  componentDidMount() {
    this.update();
  }

  update() {
    const { value, size, level, bgColor, fgColor, scale } = this.props;

    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(convertStr(value));
    qrcode.make();

    if (this._canvas != null) {
      const canvas = this._canvas;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      const cells = qrcode.modules;
      if (cells === null) {
        return;
      }
      const tileW = size / cells.length;
      const tileH = size / cells.length;
      canvas.height = canvas.width = size * scale;
      ctx.scale(scale, scale);

      cells.forEach(function(row, rdx) {
        row.forEach(function(cell, cdx) {
          ctx && (ctx.fillStyle = cell ? fgColor : bgColor);
          const w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
          const h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
          ctx &&
            ctx.fillRect(
              Math.round(cdx * tileW),
              Math.round(rdx * tileH),
              w,
              h
            );
        });
      });
    }
  }

  render() {
    const { size, style } = this.props;
    return (
      <canvas
        width={size}
        height={size}
        style={style}
        ref={ref => (this._canvas = ref)}
      />
    );
  }
}

ReactQRCode.defaultProps = {
  value: '', // 需要转换的参数
  size: 128, // 二维码大小(宽，高)
  style: {}, // canvas样式
  level: 'L',
  bgColor: 'white',
  fgColor: 'black',
  scale: window.devicePixelRatio || 1 // 比例
};

export default ReactQRCode;
