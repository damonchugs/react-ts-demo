import React, {useState, useEffect} from 'react';

export interface IAppProps {
};

const MakeTrack: React.FC = () => {
  // 设置鼠标获取定位
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('again')
    // position
    const updateMouse = (e: MouseEvent) => {
      console.log('click')
      setPosition({ x: e.clientX, y: e.clientY })
    }
    // 添加事件
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove')
      // 移除事件
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return (
    <div>
      <p>position: x: {position.x}, y: {position.y}</p>
    </div>
  )
};

export default MakeTrack;
