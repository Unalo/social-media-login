import { Link } from "react-router-dom"
const Navbar = ({ user }) => {
    return (
        <div className="navbar">
            <span className="logo">
                <Link className="link" to="/">
                    Unalo App</Link>
            </span>
            {user ? (

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

            ) : (<Link className="link" to="/login"> Login </Link>)}

        </div>
    )
}

export default Navbar