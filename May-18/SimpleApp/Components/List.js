const List =() => {
    const students = ['mitesh','utkarsh','abhishek','rohan']
    return (
       <ol>
           {students.map((single_student,indx) =>{
            //    if(single_student == "mitesh"){
            //        return false;
            //    }
               
               return(
                   <ListItem student_data ={single_student} key={indx}/>
                //   <li key={indx}>{single_student}</li> 
               )
           })}
       </ol>
        
    )
}