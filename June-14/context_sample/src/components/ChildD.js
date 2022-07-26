// import React from 'react'
// import setNameContext from "../SetNameContext"
// import setLastNameContext from '../setLastNameContext'

// const ChildD = () => {
//     return (
//         <setNameContext.Consumer>
//             {setFirstName => {
//                 return (
//                     <setLastNameContext.Consumer>
//                         {setLastName => {
//                             return (
//                                 <div> Name:
//                                     <input type="text" onKeyUp={e => { setFirstName(e.target.value) }} />
//                                     <input type="text" onKeyUp={e => { setLastName(e.target.value) }} />
//                                 </div>

//                             )
//                         }}
//                     </setLastNameContext.Consumer>

//                 )
//             }}

//         </setNameContext.Consumer>
//     )
// }

// export default ChildD

import React, { useContext } from 'react'
import setNameContext from '../SetNameContext'
import setLastNameContext from '../setLastNameContext'

const ChildD = () => {
  const setFirstName = useContext(setNameContext);
  const setLastName  = useContext(setLastNameContext);
  
  return (
    <div>
      <input type="text" onKeyUp={e => setFirstName(e.target.value)} />
      <input type="text" onKeyUp={e => setLastName(e.target.value)} />
    </div>
  )
}

export default ChildD