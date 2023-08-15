import { useState } from 'react'
import left from './assets/arrow/left.svg'
import right from './assets/arrow/right.svg'
import data from './data.json'

export default function App() {
  return (
    <div className="container">
      <Body />
    </div>
  )
}

function Body(){
  let [num, setNum] = useState(0);
  function Plus(){
    setNum(num - 1)
  }
  function Minus(){
    setNum(num + 1)
  }
  const day = ["senin", "selasa", "rabu", "kamis", "jum'at"];
  const dataDay = [data.senin, data.selasa, data.rabu, data.kamis, data.jumat];
  
  return (
    <section>
    <div className="head">
      <button onClick={Plus}><img src={left} /> </button>
      <div>
        <h1>Mapel</h1>
        <p>{day[num]}</p>
      </div>
      <button onClick={Minus}><img src={right} /></button>
    </div>
    <div className="body">
    
      <div className="row">
        <ul>
          
          {dataDay[num].map((res) => {
            return(
              <li key={res.ket}>{res.ket}</li>
            )
          })}
          
        </ul>
      </div>
      
      <div className="row">
        <ul>
       
          {dataDay[num].map((res) => {
            return(
              <li key={res.mapel}>{res.mapel}</li>
            )
          })}
          
        </ul>
      </div>
      
    </div>
    </section>
  )
}
