import logo from "../../Images/logo1.PNG";

import { NavLink, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { navMainMenu,leftMenu } from "../../Data";
import { useState } from "react";
import MobileSideBar from "./MobileFilterSidebar";
const NavBar=()=>{
  
const [isclicked, setClicked]= useState(false);
const st = useSelector((state) => {
  // console.log(state);
  return state.handleCart.items;
}

);
let totalQty = st.length;
return(
        <header className="header ">
          <nav className="aem-Grid aem-Grid--12 container">
          {
                isclicked && <MobileSideBar onClose={()=>{
                  setClicked(false);
                }}/> 
          }
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--9 aem-GridColumn--phone--9 logo">
              <Link to="#" className="mobile_menu" onClick={()=>{setClicked(true)}}>
                <img style={{width:"18px" ,height:"12px"}} src={require('../../Images/align-justify.svg').default} alt='search'/>
              </Link>
             
              <NavLink className="navbar-brand" to="/">
               <img src={logo} alt="logo"/>
              </NavLink>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide main_menus">
              <ul>
               {navMainMenu.map((val)=>{
                 return(
                <li key={val.id}><NavLink to=" "><span>{val.list}</span></NavLink></li>)
                  })}   
              </ul>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--3 aem-GridColumn--phone--3 right_nav">
              <ul>
                {/* {leftMenu.map((val)=>{
                  return(
                 <li key={val.id}><NavLink to={val.link}><img src={val.icon} alt={val.alt} />{val.label}{totalQty}</NavLink></li>)
                  })} */}
                  <li><img src={require('../../Images/search.svg').default} alt='search'/><span className="texthide">Search</span></li>
                  <li className="texthide"><img src={require('../../Images/user.svg').default} alt='signin'/><span>Sign in</span></li>
                  <li><NavLink to="/cart"><img src={require('../../Images/shopping-bag.svg').default} alt='cart' /><span className="cart_counter">{totalQty}</span></NavLink></li>
              </ul>
            </div>
            
          </nav>
        </header>
);

}
export default NavBar;