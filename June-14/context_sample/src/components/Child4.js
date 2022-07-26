// import React from 'react'
// import nameContext from "../NameContext";
// import lastnameContext from '../lastNameContext';

// const Child4 = () => {
//     return (
//         <nameContext.Consumer>
//             {firstName => {
//                 return (
//                     <lastnameContext.Consumer>
//                         {lastName => {
//                             return (
//                                 <div>
//                                     <h3>
//                                         Name: {firstName} {lastName}
//                                     </h3>
//                                 </div>

//                             )
//                         }}
//                     </lastnameContext.Consumer>

//                 )
//             }}
//         </nameContext.Consumer>
//     )

// }

// export default Child4

import React from 'react'
import nameContext from '../NameContext'
import lastNameContext from '../lastNameContext'
import { useContext } from 'react'

const Child4 = () => {
  const firstName = useContext(nameContext);
  const lastName = useContext(lastNameContext);

  return <h1>Name: {firstName} {lastName}</h1>;
}

export default Child4