import {useState, useEffect} from 'react';

const MakeTrack = () => {
  // 设置鼠标获取定位
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('again')
    // position
    const updateMouse = (e: MouseEvent) => {
      // console.log('click')
      setPosition({ x: e.clientX, y: e.clientY })
    }
    // 添加事件
    document.addEventListener('mousemove', updateMouse)
    return () => {
      // console.log('remove')
      // 移除事件
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return position
};

export default MakeTrack;
