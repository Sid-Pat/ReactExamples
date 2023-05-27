import {React,useState} from 'react'
import ParaText from './ParaText'

function ParaGlitter() {
const [name,setName] = useState("ITM National State")

const magic = () => {
    const newName = "OP Rit";
    setName(newName);
}
  return (
    <div>
        <ParaText key="0" name={name} magic={magic}/>
        <ParaText key="1" name={name} magic={magic}/>
        <ParaText key="2" name={name} magic={magic}/>
        <ParaText key="3" name={name} magic={magic}/>

    </div>
  )
}

export default ParaGlitter