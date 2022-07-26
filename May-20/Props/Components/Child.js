const Child = (props) => {

    const clicked =()=>{
        alert("button clicked")
    }


    
    return (
        <div>
            <h6>Child elements </h6>
            <button onClick={clicked}> click me!</button>
            <button onClick={()=>{
                console.log("inline clicked")
            }}>Inline click</button>
            <p>{props.some_data}</p>
        </div>
    )
}