import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery/Gallery";

declare module 'react' {
  interface HTMLAttributes<T> {
    active?: any
  }
}

function App() {
  const [state, setState]=useState(2)

  useEffect(()=>{
    setInterval(()=>{
      setState(4)
    },1500)
  },[])

  return (
    <div className="App" >
      <Gallery active={state}>
        <div>
          <img draggable={false} src="https://y3p9n5g8.rocketcdn.me/wp-content/uploads/2015/10/G-Shock-Black-White-2015-Series-3.jpg" alt=""/>
          <div>ffdsfdsdsf</div>
        </div>
        <div >
          <img draggable={false} src="https://iron-bet.ru/upload/iblock/059/059082d919f971dd434f9f16d14d02d8.jpg" alt=""/>
        </div>
        <div >
          <img draggable={false} src="https://avatars.mds.yandex.net/get-zen_doc/4340095/pub_60aca78ee427ca189c05e538_60aca97b5b173649aa53f11e/scale_1200" alt=""/>
        </div>
        <div>
          <img draggable={false} src="https://avatars.mds.yandex.net/get-zen_doc/1721884/pub_5e3ba7ff6a2d430435041575_5e3bab8bc9621d0cc22c21a1/scale_1200" alt=""/>
        </div>
        <div>
          <img draggable={false} src="https://i.pinimg.com/originals/7c/fa/4a/7cfa4a5203ff965e1c7e83d700391b54.jpg" alt=""/>
        </div>

      </Gallery>
    </div>
  );
}

export default App;
