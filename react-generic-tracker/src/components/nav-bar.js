import NavItems from "./nav-items"

const NavBar = ({user}) =>{
    return (
        <div className='nav-bar'>
            {<h3 className={'nav-item'}> {user.map((i)=>{<h4> {i.username}</h4>})} </h3>}
            <NavItems text={'Dashboard'} clas={'nav-item'} />
            <NavItems text={'Profile'} clas={'nav-item'} />
            <NavItems text={'MoNeem'} clas={'nav-item'} />
        </div>
    )
}
export default NavBar