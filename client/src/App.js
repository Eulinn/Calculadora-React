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
  const [Number2, setNumber2] = useState(null)

  const [displayContent, setDisplayContent] = useState(Number1);
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


  const ChangeDisplay = (param) =>{

    if(displayContent === 0){
      setDisplayContent(param)
      return
    }

    setDisplayContent(`${displayContent}${param}`)


  }




  return (
    <div className="ContainerCalculator">
        <Display text={displayContent} />
        <Keyboard>
          {Elements.map(item=>{
            return(
              <Button Element={item} Number={isNaN(item) ? true : false} HandleClick={ChangeDisplay} />
            )
          })}
        </Keyboard>

    </div>
  );
}

export default App;
