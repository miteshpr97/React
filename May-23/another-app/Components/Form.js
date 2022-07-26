const Form = () => {
    const [data, setData] = React.useState("#000000");
    const [range, setRange] = React.useState(0);


    const keyPressed = (e) => {
        //  console.log("somthing typed")
        //  console.log(e.target.value);
        setData(e.target.value);


    }

    const rangeChange = (e) => {
        setRange(e.target.value * 2);
      }
    return (
        // <div>
        //      <h1> this is a form</h1>
        //     <input type="text" onKeyUp={keyPressed} />
        //     <p>{data}</p>

        // </div>

        <div>
            <h1> this is a form</h1>
            {/* <input type="color" onKeyUp={keyPressed} /> */}
            <input type="color" onChange={keyPressed}/>
            <input type="range" onChange={rangeChange} />
            <br />
            <br />
            <div style={{width: `${range}px`, height: `${range}px`, backgroundColor: data}}></div>

        </div>
    )
}