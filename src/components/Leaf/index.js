import React from 'react'

const Leaf = ({
  onOpenInput, paddingLeft, index, value,
}) => (
  <div style={{ paddingLeft }}>
    {value}
    <button onClick={() => onOpenInput(index)}>+</button>
  </div>
)

export default Leaf
