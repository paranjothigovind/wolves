import React, { useState, useEffect } from 'react'
import CheckboxGroup from 'react-checkbox-group'
 
const Demo = () => {
  // Initialize the checked values
  const [fruits, setFruits] = useState(['apple', 'watermelon'])
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setFruits(['apple', 'orange'])
    }, 5000)
 
    return () => clearTimeout(timer)
  }, [])
 
  return (
    <CheckboxGroup name="fruits" value={fruits} onChange={setFruits}>
      {(input) => (
        <>
          <label>
            <input type="checkbox" value="apple" /> Apple
          </label>
          <label>
            <input type="checkbox" value="orange" /> Orange
          </label>
          <label>
            <input type="checkbox" value="watermelon" /> Watermelon
          </label>
        </>
      )}
    </CheckboxGroup>
  )
}
export default Demo;
