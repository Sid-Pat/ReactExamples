import React, { useState } from 'react'

function ShoppingListForm({addItem}) {
const [frm,setFrm] = useState({pname:"",qty:0});

const handleChange = (evt) => {
    setFrm((curr)=>{
        return {
            ...curr,
            [evt.target.name]:evt.target.value
        }
    })
};

const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted item");
    addItem(frm);
    setFrm({pname:"",qty:0});
}

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <h2>Product Name : {frm.pname}</h2>
            <h3>Quantity : {frm.qty}</h3>
        </div>
        <br/><br/>
        <div>
            <div>
                <label htmlFor="product">Product Name : </label>
                <input type="text" id="product" 
                        placeholder='Product Name ...'
                        name='pname'
                        value={frm.pname} 
                        onChange={handleChange}       
                />
                <br/><br/>
                <label htmlFor="quantity">Product Name : </label>
                <input type="number" id="quantity" 
                        name='qty'
                        value={frm.qty} 
                        onChange={handleChange}       
                />
            </div>

            <br/>
            <div>
                <button>Add My Product</button>
            </div>
        </div>
    </form>
  )
}

export default ShoppingListForm