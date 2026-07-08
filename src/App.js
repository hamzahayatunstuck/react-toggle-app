import React, { useState } from 'react'
import "./Test.css"

const App = () => {
    const [hamza, setHamza] = useState(true)
const handleToggle = ()=>{
setHamza(!false)
}

    return (
        <div className={hamza === true ?  'bg' : 'bg-green'}>
            <div className="container">
                <label className="switch">
                    <input type="checkbox"  onChange={handleToggle}/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default App;