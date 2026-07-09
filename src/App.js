import React from 'react'
import Listing from './Components/Listing'
const App = () => {
    const test = [
        {id:1, studentName: "Hamza", studentAge: 20, studentCity: "Karachi"},
        {id: 2, studentName: "Ali", studentAge: 21, studentCity: "Lahore"},
        {id: 3, studentName: "Ahmed", studentAge: 22, studentCity: "Islamabad"},
        {id: 4, studentName: "Hassan", studentAge: 23, studentCity: "Peshawar"},
        {id: 5, studentName: "Ali", studentAge: 24, studentCity: "Quetta"},
        {id: 6, studentName: "Ahmed", studentAge: 25, studentCity: "Multan"},
        {id: 7, studentName: "Hassan", studentAge: 26, studentCity: "Faisalabad"},
        {id: 8, studentName: "Ali", studentAge: 27, studentCity: "Rawalpindi"},
    ]
  return (
    <>
    <Listing list={test} name="Hamza" age={20} city="Karachi" />
    
    </>
  )
}

export default App