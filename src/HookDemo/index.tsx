import React, {useState, useEffect, useRef, useContext} from 'react';

import Track from './track';
import MouseMove from './moveMouse';
import UseUrlLoading from './useUrlLoading';

import {ThemesContext} from '../App'

interface urlLoading {
  message: string,
  status: string
};

const LikeButton: React.FC = () => {

  const theme = useContext(ThemesContext)
  // console.log(theme)
  const { color, background } = theme
  const style = { color, background }

  const [age, setAge] = useState(0);
  const [on, setOn] = useState(true);
  const [show, setShow] = useState(true);
  const position = MouseMove()

  // 请求接口
  const [data, loading] = UseUrlLoading('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as urlLoading

  const p_ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log(`当前${age}岁`)
    if (p_ref && p_ref.current) {
      console.log(p_ref.current.value)
      p_ref.current.focus()
    }
  }, [age, show])
  return (
    <div>
      <button onClick={() => setAge(age+1)}>
        {age}
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? 'NO' : 'OFF'}
      </button>
      <button onClick={() => setShow(!show)}>
        {show ? 'SHOW' : 'HIDE'}
      </button>
      {show && <Track />}
      <p>{position.x},{position.y}</p>
      <p>------------------------分界线------------------------</p>
      <p>{loading?<p>loading...</p>:<img src={dogResult && dogResult.message} alt={dogResult.message} />}</p>
      <button onClick={() => setShow(!show)}>reflash dog</button>
      <p>------------------------分界线------------------------</p>
      <input ref={p_ref} />
      <p>------------------------分界线------------------------</p>
      <div style={style}>style</div>
    </div>
  )
};

export default LikeButton;
