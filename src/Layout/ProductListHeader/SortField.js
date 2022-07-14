const SortField=({sortProduct,value})=>{
    return(
       
        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--hide sort_dropdown">
        <select className="form-select" aria-label="Default select example" onChange={(e) => sortProduct(e)}>
         <option selected>Sort by Price</option>
         <option value={"lowtohigh"}>Low to High</option>
         <option value={"hightolow"}>High to Low</option>
        
        </select>
        </div>

    );
    }
    export default SortField;