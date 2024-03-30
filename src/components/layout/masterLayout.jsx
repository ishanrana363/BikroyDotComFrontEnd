import { BiMessage } from "react-icons/bi";
import {AiOutlineLogout, AiOutlineUser, AiOutlineWhatsApp} from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo1 from "/src/assets/images/plainb-logo.svg"
import {Link, NavLink} from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import {useState} from "react";

const MasterLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={"container-fluid bg-success p-3 "} >
                <div className={"container"} >
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <span className={"f-12"}>
                                <span><BiMessage/> support@ishan.com  </span>
                                <span className={"mx-2"}><BiMessage/> 01751586238 </span>
                            </span>
                        </div>
                        <div className={"col-md-6"}>
                            <span className="float-end">
                                <span className="bodySmal mx-2">
                                    <span><AiOutlineWhatsApp/></span>
                                </span>
                                <span className="bodySmal">
                                    <span><AiFillYoutube/></span>
                                </span>
                                <span>
                                    <span className={"bodySmal"} > <BsFacebook/> </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container-fluid bg-white  p-2  sticky-top "} >
                <div className={"container mainNav mt-2 "}>
                    <div className={"logo"}>
                        <NavLink to={"/"}>
                            <img src={logo1} alt="" width={"130px"}/>
                        </NavLink>
                    </div>
                    <div className={"menuBar"}>
                        <nav className={""} >
                            <ul className={ isOpen ? "open" : "" }>
                                <Link to="/cart" type="button" className="btn ms-2 btn-light position-relative">
                                    <span><BsBag/></span>
                                </Link>


                                <Link to="/wish" type="button" className="btn ms-2 btn-light position-relative">
                                    <span><BsHeart/></span>
                                </Link>
                                <Link type="button" className="btn ms-3 btn-success d-flex" to="/profile">Profile</Link>
                                <Link type="button" className="btn ms-3 btn-success d-flex" to="/profile">Logout</Link>

                            </ul>
                        </nav>
                    </div>
                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={logo1} width={"100"} alt=""/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src="" alt=""/>
                                    <h6>name</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                <AiOutlineUser className="side-bar-item-icon"/>
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon"/>
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className={"toggleBar"}>
                        {
                            isOpen ? <button className={"btn"} ><RxCross2/></button> : <button className={"btn"} > <AiOutlineMenu/> </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MasterLayout;