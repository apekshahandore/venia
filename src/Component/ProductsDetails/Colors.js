
import { productColor} from "../../Data";
const Colors=()=>{
return(<>
     <h4 className="filter_head">Color</h4>
            <div className="filter_container">
                {productColor.map((val)=>{
                    return(<div className="color_box" style={{background:`${val.bgColor}`}}>
                    <img src={val.color} alt=" "/></div>)})}
            </div>
</>)
}
export default Colors;