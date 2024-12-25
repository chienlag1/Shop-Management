import "./style.scss"
import { BsFacebook,BsInstagram, BsGithub,BsFilePersonFill  } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-6">left </div>
                <div className="col-6 header_top_right">
                    <ul>
                        <li> <Link to={""}><BsFacebook /> </Link></li>
                        <li> <Link to={""}><BsInstagram /> </Link></li>
                        <li> <Link to={""}><BsGithub /> </Link></li>
                        <li> <Link to={""}><BsFilePersonFill /> </Link></li>
                        <span>Login</span>
                        
                    </ul>


                </div>

            </div>
        </div>
        </div>
    );
}
export default Header;