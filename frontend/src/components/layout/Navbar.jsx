import {Link} from "react-router-dom";
import Logo from '../../assets/listeningLogo.png'




export default function Navbar() {


    return (
    <>
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to="/">
                    <img src={Logo} height={128} width={128}/>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}