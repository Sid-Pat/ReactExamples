import {React,useEffect,useState} from 'react'

function EffectCounter() {
    const [num,setNum]=useState(0);
    const [name,setName] = useState("");

    useEffect(()=>{
        console.log("Rendered");
    },
    [num]);

    const incr = () => {
        setNum((c)=>(c+1));
    }

    const handleChange = (evt) => {
        setName(evt.target.value);
    }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={incr}>+1</button>

        <h3>Name : {name}</h3>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder='name ...'/>
          
    </div>
  )
}

export default EffectCounter