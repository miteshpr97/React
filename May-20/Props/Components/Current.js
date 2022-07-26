const Current = (props) =>{
    const local_fn =()=>{
        props.cb("any data")
    }

    return (
        <div>
            <h6>current components</h6>
            <Child some_data = {props.some_data} />
            {/* <button onClick = {props.cb}> click me on current</button> */}

            <button onClick = {local_fn}> click me on current</button>
            
            {/* <p>{props.some_data}</p> */}
        </div>
    )

}