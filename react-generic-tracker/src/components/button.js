const Button = ({clas, text, onClick}) => {
    return (
        
        <button onClick={onClick} className={clas} > {text}  </button>
    )
}
export default Button