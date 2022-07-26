import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate ();




    const clicked =() =>{
        navigate('secret/abcd?key=value&key1=value1&key2=value2');

        // const clicked = _ => navigate('secret/abcd?key=value&key1=value1&key2=value2')
    }
    return (
        <div style={{ margin:'2rem' }}>
            {/* <span>Home</span>||<span>About</span> */}
            <Link to="/">Home</Link> 
            || 
            <Link to="about">About</Link>
            ||
            <button onClick={clicked}>secret</button>
        </div>
    )
}

export default Navigation;
