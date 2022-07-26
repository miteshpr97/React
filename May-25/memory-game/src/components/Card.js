const Card = (props)=>{
    const flipCard = ()=>{
      props.flip(props.index);
  
    }
    return (
        <div className={`card ${props.isFlipped ? "flipped" : false}`} onClick={flipCard}>
          <div className="content">
            <h1>🚀</h1>
          </div>
            
        </div>
    )
}

export default Card;
