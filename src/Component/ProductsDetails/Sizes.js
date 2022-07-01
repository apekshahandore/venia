import { productSize} from "../../Data";
const Sizes=()=>{
return(<>
    <h4 className="filter_head">Size</h4>
            <div className="filter_container">
                {productSize.map((val)=>{return(<button className="size_box">{val.size}</button>)})}
            </div>
</>)
}
export default Sizes;