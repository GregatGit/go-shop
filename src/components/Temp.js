import React from 'react'

const Temp = (props) => {
  return (
    <div>
      <h1>TEMP</h1>
      {console.log(props.match.params.id)}
    </div>
  )
}

export default Temp
