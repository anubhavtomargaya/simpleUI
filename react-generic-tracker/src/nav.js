const Nav = ({title, index,color}) =>{
    return (
        <nav>
            <h2 style={{color: color }}>
                {title} and 
                <p>{index}</p>
            </h2>
        </nav>
    )
}

export default Nav