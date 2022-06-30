const FooterSubMenu=({SubmenuHead,SunmenuLink})=>{
    return(
        <div className="aem-GridColumn aem-GridColumn--default--3">
        <h4 className="submenu__heading">{SubmenuHead}</h4>
                        <ul className="submenu__list">
                            <li><a className="submenu_link" href=" ">{SunmenuLink}</a></li>
                        </ul>
        </div>
    )
}
export default FooterSubMenu;