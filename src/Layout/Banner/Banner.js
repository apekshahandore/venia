import bannerImg from "../../Images/hero.PNG"
const Banner=({text})=>{
return(
    <div className="aem-Grid aem-Grid--12 main_banner">
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 leftside_banner">
           <div>
           <h1>{text}</h1>
           <h2 className="hide_head">Outerwear</h2>
           </div> 
            <div className="head_border"></div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 rightside_banner">
            <img src={bannerImg} alt="herobanner"/>
        </div>
    </div>
);
}
export default Banner;