const Card = ({height, width,title}) => {
    return (
        <div className='card' style={{backgroundColor:'red', height: height, width:width}} >
            <h1> {title} </h1>
        </div>
        
    )
}
export default Card