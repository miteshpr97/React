import React, { useEffect, useState } from 'react'
import { useSearchParams, useParams } from "react-router-dom";

const Secret = () => {
  let [searchParams, _] = useSearchParams();
  const [queryItems, setQueryItems] = useState([]);
  const params = useParams();
  console.log(params.username);
  
  useEffect(() => {
    const keys = [];
    searchParams.forEach((val, idx) => {
      keys.push({
        key: idx,
        value: val
      });
    })
    setQueryItems(keys);
    console.log(searchParams.get("key"));
  }, [searchParams]);

  return (
    <>
      <div>This is a secret page</div>
      <ul>
        {queryItems.map((val, key) => {
          return (
            <li key={key}> {val.key} &gt; {val.value} </li>
          )
        })}
      {/* {searchParams.map((value, key) => {
        return (<li> {key} -&gt; {value}</li>)
      })} */}
      </ul>
    </>
  )
}

export default Secret




// import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom';

// const Secret = () => {
//     let [searchPharams] = useSearchParams();
//    const [queryItems, setQueryItems] = useState ([]);
//     useEffect(() => {
//         const keys = [];
//         searchPharams.forEach((val, idx) => {
//             keys.push({
//                 key: idx,
//                 value: val
//             });

//             // [idx] = val;   
//         })
//         console.log(keys, "mitesh");
//         setQueryItems(keys);
        

//     }, [searchPharams]);


//     return (
//         <>

//             <div>
//                 This is a secret
//             </div>
           
//              <ul>
//              { queryItems.map((val, key) => {
//                 return(
//                     <li key={key}> {val.key} -&gt; {val.value}</li> 
//                 )
//              })}



//                 {/* {searchPharams.map((value, key) => {
//                     return <li> {key} -&gt, {value} </li>

//                 })} */}
//             </ul> 
//         </>

//     )
// }


// export default Secret;




