import Card from "./Card";
import {useState} from 'react';

const Grid = () =>{
    const[flipped, setflipped] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    // const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    const toggleFlipped = (index)=>{
        let flipped_copy = [...flipped]; // a way to craete deep copy
        if(flipped_copy[index] ===true) {
            flipped_copy[index] = false;
        }else{
            flipped_copy[index] = true;
        }
        setflipped(flipped_copy)
    }
    return (
        <div className="cards-container">
           {flipped.map((single_data, idx) =>{
               return(
                   <Card key={idx} isFlipped={single_data} flip={toggleFlipped}
                    index={idx}/>
               )
           })}
        </div>
    )
}

export default Grid;

