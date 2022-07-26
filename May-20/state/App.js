const App = () => {
    // let data ="somthing";

    const [data, setData] = React.useState("Something");

    // Without Destructuring...
    // const arr = React.useState("Something");
    // const data = arr[0];
    // const setData = arr[1];



    const change_fn = () => {
        // data ="other somthing";
        // console.log(data);    data is change but it is not display
        // document.getElementById("display_data").innerText= data;   it is work but 
        // we cant use this approch in react ///  

        setData("Other thing");



    }
    return (
        <div>
            <h1> My stateful App</h1>
            <h3 id="display_data">{data}</h3>
            <button onClick={change_fn}>change data</button>
        </div>
    )

}