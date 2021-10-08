import logo from "../Assets/nlgo.png"

const Navbar=()=>{

    return(
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="100" />
            </a>
            <ul className="navbar-nav d-flex">
                <li className="nav-item ">
                <button className="cbtn nav-link " aria-current="page" href="#">LOGIN</button>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )

}
export default Navbar;