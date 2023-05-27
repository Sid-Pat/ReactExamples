import React from 'react'

function ListPicker({list}) {
    const ranIdx=Math.floor(Math.random()*list.length);
    const ranEle=list[ranIdx];
  return (
    <div>
        <p>The list is : {list}</p>
        <p>Random Element is {ranEle}</p> 
    </div>
  )
}

export default ListPicker