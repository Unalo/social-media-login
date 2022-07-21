const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">
                Unalo App
            </span>
            <ul className="list">
                <li className="listItem">
                    <img
                        src="https://www.techfunnel.com/wp-content/uploads/2017/12/7-Types-of-Hackers.jpg" alt="" className="avatar" />
                </li>
                <li className="listItem">Unalo Mtshokotsha</li>
                <li className="listItem">
                    logout
                </li>
            </ul>
        </div>
    )
}

export default Navbar