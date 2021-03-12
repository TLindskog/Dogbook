import React, { useState, useEffect } from 'react';
import DogList from './dogList';

const LOCAL_STORAGE_KEY = 'valueApp.values'

function Home() {
  const [values, setValues] = useState([])

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedValues) setValues(storedValues)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values))
  }, [values])

  function toggleValue(id) {
    const newValues = [...values]
    const value = newValues.find(value => value.id === id)
    value.complete = !value.complete
    setValues(newValues)
  }
  
  function handleClearValues() {
    const newValues = values.filter(value => !value.complete)
    setValues(newValues)
  }


  return (
    <>
      <DogList values={values} toggleValue={toggleValue} />
      <div>Now {values.filter(value => !value.complete).length} dog(s) in the kennel</div><br/>
      <button onClick={handleClearValues}>Remove dog(s) that is marked</button>
    </>
  )
}

export default Home;