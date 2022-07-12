import {filterColor} from "../Data";
const FilterContainer=()=>{
return(<div className="filter_aside">
<div className="filter_container">
    <div className="attribute">  
    <h5>Filters</h5>
    </div>
    <div className="attribute">  
        <h6>Attribute</h6>
        <div className="checkbox"> 
            <input type="checkbox" id="chk1-label"/> 
            <label htmlFor="chk1-label" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chk2-label"/> 
            <label htmlFor="chk2-label" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chk3-label"/> 
            <label htmlFor="chk3-label" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chk4-label"/> 
            <label htmlFor="chk4-label" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <a href=" ">Show More</a>
        </div>
        
        {/* <a href=" ">Show More</a> */}
    </div>
    <div className="attribute">  
        <h6>Attribute</h6> 
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput1"/> 
            <label htmlFor="chkinput1" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput2"/> 
            <label htmlFor="chkinput2" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput3"/> 
            <label htmlFor="chkinput3" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput4"/> 
            <label htmlFor="chkinput4" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput5"/> 
            <label htmlFor="chkinput5" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput6"/> 
            <label htmlFor="chkinput6" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="chkinput7"/> 
            <label htmlFor="chkinput7" className="container">Option</label>
        </div>
       
    </div>
    <div className="color">  
        <h6>Color</h6>
        <div className="filter_color">
        
        {filterColor.map((value)=>{
            return(<div 
                    key={value.id} 
                    className={value.className} 
                    style={{backgroundColor:`${value.color}`, border:`${value.border}`}}
                    >
                    </div>)
        })}
        
        </div>
        
    
    </div>
    <div className="attribute">  
        <h6>Attribute</h6> 
        <div className="checkbox"> 
            <input type="checkbox" id="input1"/> 
            <label htmlFor="input1" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input2"/> 
            <label htmlFor="input2" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input3"/> 
            <label htmlFor="input3" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input4"/> 
            <label htmlFor="input4" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input5"/> 
            <label htmlFor="input5" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input6"/> 
            <label htmlFor="input6" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input7"/> 
            <label htmlFor="input7" className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input8"/> 
            <label htmlFor="input8"className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" id="input9"/> 
            <label htmlFor="input9" className="container">Option</label>
        </div>
       
    </div>
  
</div>
</div>);
}
export default FilterContainer;