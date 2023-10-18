import {NavLink} from "react-router-dom";
import logo from "./logo.jpeg";


const Navbar = (props) =>{

    const searchHandler = (event) =>{
        event.preventDefault();
        props.setSearchKey(event.target.value);
    }

    return (
        <div className="">
            <nav className="flex justify-between items-center h-25 max-w-6xl mx-auto">

                <NavLink to="/">
                    <div className="ml-5" >
                        <img src={logo} alt="logo" height={100} width={150}/>
                    </div>
                </NavLink>

                <div>
                    <input type="search" placeholder="Search images" className="h-[20] w-[300px] mt-[15px] text-2xl rounded-md mb-[3px]"
                        onChange={searchHandler} value={props.searchKey}></input>
                </div>


                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    
                </div>
                 
            </nav>
        </div>


    )
};

export default Navbar;