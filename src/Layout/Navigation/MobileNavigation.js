const MobileNavigation=()=>{


    return(  <aside className="mobile-menu-sidebar " >
    <div className="sidebar-container">
    <div className="section-bottom">
            <ul className="left_nav">
                <li><a href=" ">Shop Categories</a></li>
                <li><a href=" ">Close</a></li>
            </ul>
        </div>
        <div className="section-middle">
            <ul className="main__menus">
                <li><a href=" ">Women</a></li>
                <li><a href=" ">Men</a></li>   
                <li><a href=" ">Smart Gear</a></li> 
                <li><a href=" ">Assessories</a></li>
            </ul>
        </div>
        <div className="section-bottom">
            <ul className="left_nav">
                <li><a href=" ">Account</a></li>
                <li className="sign_up"><a href=" ">Sign Up</a></li>
            </ul>
        </div>
    </div>
</aside>);
}
export default MobileNavigation;