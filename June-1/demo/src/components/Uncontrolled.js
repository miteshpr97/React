import React , {useState, useRef } from 'react'
import "../App.css"

const Uncontrolled = () => {
    const luckyName  = useRef(null)
    const[show, setShow] = useState(false)

    const submitForm = (e) =>{
        e.preventDefault();
        console.log(luckyName.current.value);
        const name = luckyName.current.value;
        name === "" ? alert("plz fill the data"): setShow(true);

    }

    return (
        <div className='container'>
           <form className='form-container'  action="" onSubmit={submitForm}>
            <div className='input-field'>
                <label htmlFor="luckyName">Enter your lucky name</label>
                <input type="text" id='luckyName' ref= { luckyName } />
            </div>
            <br />
            <button className='btn'>submit</button>
           </form>


           <p>{ show ? `your lucky name is ${luckyName.current.value }` : "" } </p>
        </div>
    )
}


export default Uncontrolled;
