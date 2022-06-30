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
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <a href=" ">Show More</a>
        </div>
        
        {/* <a href=" ">Show More</a> */}
    </div>
    <div className="attribute">  
        <h6>Attribute</h6> 
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
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
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox"/> 
            <label className="container">Option</label>
        </div>
       
    </div>
  
</div>
</div>);
}
export default FilterContainer;