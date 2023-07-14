import { useState } from 'react';
import './App.css';

import Display from './components/layouts/display';
import Button from './components/layouts/buttons';
import Keyboard from './components/keyboard';

import { LuDelete } from "react-icons/lu";
import { TbSquareRoot2 } from "react-icons/tb";
import { BsPlusSlashMinus } from "react-icons/bs";

function App() {

  const [Number1, setNumber1] = useState(0)
  const [signal, setsignal] = useState('')
  const [Number2, setNumber2] = useState([])

  const [displayContent, setDisplayContent] = useState(0);
  const [Elements, setElements] = useState([
    '%',
    'CE',
    'C',
    <LuDelete />,
    '1/x',
    'x²',
    <TbSquareRoot2 />,
    '÷',
    7,
    8,
    9,
    '×',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    <BsPlusSlashMinus />,
    0,
    ',',
    '=',
  ])

  const HandleClick = async (param) =>{
    if(!isNaN(param)){
      
      setNumber2([...Number2, param])
      setDisplayContent(String(Number2.map(item=>{return item})).replace(/,/g,''))
      return
    }

    setNumber1(Number2)
    setsignal(param)

   
    
  }







  return (
    <div className="ContainerCalculator">
        <Display text={displayContent} />
        <Keyboard>
          {Elements.map((item, index)=>{
            return(
              <Button key={index} Element={item} Number={isNaN(item) ? true : false} HandleClick={HandleClick} />
            )
          })}
        </Keyboard>

    </div>
  );
}

export default App;
