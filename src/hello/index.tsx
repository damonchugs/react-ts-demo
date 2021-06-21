import { fchmod } from 'fs';
import React from 'react';

// 定义类型
interface HelloType {
  message?: String
}

const Hello: React.FC<HelloType> = (prop) => {
  return (<h2>{prop.message}</h2>);
};

Hello.defaultProps = {
  message: 'Hello RT'
}

export default Hello;