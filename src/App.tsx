import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import icondol from './assets/images/icon-dollar.svg'

const getTip = (tips:Array<number>, call:any) => {
  return tips.map( (e,i) => {
    return (
      <div className='tip-custom ' key={i}>
        <input type="radio" id={`${i}`} name="tip" value={e} onChange={(e) => {call(Number(e.target.value))}} />
        <label>{e} %</label>
      </div>
    )
  })
} 

function App() {
  const [ total, setTotal ] = useState<number>(0);
  const [ tip, setTip ] = useState(0);
  const [ countP, setCountp ] = useState(0)

  console.log(tip);   

  return (
    <div className="App">
      <main>
        <div className="box">
          <header><h2>SPLI<br />TTER</h2></header>
          <div className="content flex">
            <div className="input-group f1">
              <section className="bill">
                <label>
                  <span>
                    <img src={icondol} alt="" />
                  </span>
                  <input type="text" />
                </label>
              </section>
              <section className="tip">
                <form className='grid col-3'>
                 {
                  getTip([5, 10, 15, 25, 50], setTip)
                 }
                </form>
              </section>
            </div>
            <div className='f2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo. </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
