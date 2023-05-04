import Button from "./components/button"
const Header = ({title, clas, showform, btnvalue}) => {
    return(
        <div className='clearfix'>
            <header className={clas}>
                {title}
                {btnvalue && console.log('yes')}
                <Button clas={btnvalue ? 'btn-close' : 'btn-add'} text={btnvalue ? 'Close' : 'Add'} onClick={showform}   />
             </header>
        </div>
    )
}

export default Header