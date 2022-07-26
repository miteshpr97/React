const Conditional =() =>{
     const flag = true;
    
    //  const condition = () => {
    //     if(flag) {
    //       return (<TrueFlag />)
    //     } else {
    //       return (<FalseFlag />)
    //     }
    //   }


    // const condition = () => {
    //     if(flag) {
    //       return (
    //           <h1>it is true</h1>
    //       )
    //     } else {
    //       return (
    //           <h1>it is flase</h1>
          
    //         )
    //     }
    //   }
    return (
        <div>
            {/* if(flag == true) {
                return (
                    <h1> heelo</h1>    it is not working 
                )else
            } */}
        {/* {flag== false ? <h1> heelo mitesh</h1>:<h1>hello mitika</h1>};  */}

    {/* {condition()} */}
         <Button content ="conditional button" />
        {flag ? <TrueFlag /> : <FalseFlag />}


            <button>click me</button>
        </div>
    )

}


// condition ? <true>: false>

//if(flag==true)
// if(flag)
