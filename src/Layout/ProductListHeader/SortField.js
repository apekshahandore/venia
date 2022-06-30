const SortField=({sortProduct})=>{
    return(
       
        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--hide sort_dropdown">
        <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'} onChange={sortProduct}>
         <option value="DEFAULT">Sort by Price</option>
         <option value="1">High to Low</option>
        
        </select>
        </div>

    );
    }
    export default SortField;