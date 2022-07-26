const Parent = (props) => {
    const cb_function = (param1) => {
        // alert ("callback called")
        alert(param1)
    }
    return (
        <div>
            <h5>Parent Element</h5>
            <Current some_data={props.some_data} cb={cb_function} />
            {/* <h1>{props.some_data}</h1> */}
        </div>
    )
}