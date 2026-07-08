const handleIncrement = (count , setCount) =>{
    setCount(count + 1)
}

const handleDecrement = (count , setCount) =>{
    setCount(count - 1)
}

const displayCount = (count , setCount) =>{
    console.log(count)
}

export {handleIncrement, handleDecrement, displayCount}