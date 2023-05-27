import React from 'react'
import Skill from './Skill'

function Learn({skills}) {

  return (
    <ul>
        {skills.map((sk)=> 
            <Skill sk={sk} />
        )}
    </ul>
  )
}

export default Learn