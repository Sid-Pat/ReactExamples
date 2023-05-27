import React, { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuid } from 'uuid';

function ShoppingList() {
    const st = {border:"2px black solid"};
    const [item,setItem] = useState([
        {id:uuid(),pname:"Banana",qty:10},
        {id:uuid(),pname:"Pears",qty:20}
    ]);

    const addItem = (itm) => {
        setItem((curr)=>{
            return [
                ...curr,
                {id:uuid(),...itm}
            ]
        });
    }

  return (
    <div>
        <h1 style={{textDecoration:"underline"}}>Shopping List</h1>
        <br/>
        <div style={st}>
            <ol>
                {item.map( (i) => {
                    return <li key={i.id}><b>{i.pname}</b> - <i>{i.qty} piece(s)</i> </li>
                })}
            </ol>
        </div>
        
        <br/><br/>
        <ShoppingListForm addItem={addItem}/>
    </div>
  )
}

export default ShoppingList