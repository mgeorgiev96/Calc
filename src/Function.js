import React from 'react'

const calc = (e)=>{
    let previous = document.querySelector('.previous')
    let result = document.querySelector('.result')
    result.innerHTML = eval(previous.innerHTML).toFixed(2)
    previous.innerHTML = ''
    
  }

export default calc

