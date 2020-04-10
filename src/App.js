import React from 'react';
import Style from './css/Style.css';
import Buttons from './Buttons'
import data from './Data';
import calc from './Function'

function App() {
let items = data.map(item=><Buttons key={item.key} id={item.id} value={item.value}/>)
const check = (e)=>{
  let target = e.target
  let previous = document.querySelector('.previous')
  let result = document.querySelector('.result')
  if(target.className.length==1){
    previous.innerHTML += target.className
  }else if(target.className==='equal'){
    calc()
    result.classList.add('active')
    setTimeout(() => {
      result.classList.remove('active')
    }, 500);
  }else if(target.className==='Clear'){
    previous.innerHTML = ''
    result.innerHTML = ''
  }
}

  return (
   <div className='container'>
     <div className="display">
       <span></span>
       <span></span>
       <span></span>
       <span></span>
     <p className="result"></p>
     <p className="previous"></p>
     </div>
     <div className="button_container" onClick={check}>
     {items}
     </div>
   </div>
  );
}

export default App;
