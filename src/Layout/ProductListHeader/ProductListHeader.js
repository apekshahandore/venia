import SortField from "./SortField";
import slider from "../../Images/sliders.png"
import arrowup  from "../../Images/arrow-up.svg"
import arrowdown from "../../Images/arrow-down.svg"
const ProdutListHeader=({totalProducts,sortProduct, lowToHigh, highToLow})=>{

return(
  <>
    <div className="aem-Grid aem-Grid--12 category_row">

    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 left_category">
      <a href="">Clothing</a> / <a href="">Women's</a> / <a href="">OuterWear</a>
    </div>

    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--hide total_result">
      {totalProducts} Results
    </div> 
     <SortField sortProduct={sortProduct}/>
</div>


  <div className="mobileview_filterheader">
      <div className="filtergheader_top">
        <ul>
          <li><img src={slider} alt="slider"/>Filter Results</li>
          <li onClick={lowToHigh} onDoubleClick={highToLow}>
          <img className="arrow_img" src={arrowup} alt="slider"/>
          <img className="arrow_img" src={arrowdown} alt="slider"/>Sort Products</li>
        </ul>
      </div>
      <div className="total_result">
         {totalProducts} Results
      </div>
    </div>
     </>
);
}
export default ProdutListHeader;