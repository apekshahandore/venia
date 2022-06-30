import { useState } from "react";
import { productColor,productSize } from "../Data";
import Button from "./Button";
import { useDispatch,useSelector } from "react-redux";
import {cartActions} from "../redux/handleCartSlice";

const ProductPage=({title,price,rating,description,image, product})=>{

    const [isReadMore,setReadMore]=useState(false);
 
    const dispatch = useDispatch();
    const addProduct=(product)=>{ 
        dispatch(cartActions.addProdToCart({...product, quntity:1}));
    }

    const count = useSelector((state) => state.handleCart.value)
    const increseCartQuntity = () => {
        dispatch(cartActions.incresQntity());
      }
      const decreseCartQuntity = () => {
        dispatch(cartActions.decrQntity());
      }
      
      //seemore and see less
    const toggleBtn=()=>{
        setReadMore(preState=>!preState)
    }

    let productTitle=title?.split(' ').slice(0,3).join(' ');
    
   

    return(<>
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 product_image">
        
            <div className="aem-Grid aem-Grid--12 container">
            <div className="category_left">
                <a href="">Clothing</a> / <a href="">Women's</a> / <a href="">OuterWear</a>
            </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--hide images_column">
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12 main_image">
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                </div>
            </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 product_details">
        {/* category */}
        <div className="category">
         <a href="">Clothing</a> / <a href="">Women's</a> / <a href="">OuterWear</a>
        </div>
        {/* product title */}
        <h1>{productTitle}</h1>
{/* product price */}        
        <h4>${price}</h4>
{/* rating */}
            {
            rating.map((item)=>{return(<>
                <div className="stars-outer">
                      <div
                        className="stars-inner"
                        style={{ width: item.rateInPercentage }}
                      ></div>
                </div>
                    <span className="number-rating">({item.brand})</span>
            </>)})
        } 
{/* product description */}
            <div className="prod_description">
                <p>{isReadMore ? description : description?.substr(0,80)} 
                <button onClick={toggleBtn} className="read_more">{isReadMore ? 'Read Less' :'...Read more'}</button>
                </p>
            </div>

{/* Color  */}
            <h4 className="filter_head">Color</h4>
            <div className="filter_container">
                {productColor.map((val)=>{
                    return(<div className="color_box" style={{background:`${val.bgColor}`}}>
                    <img src={val.color} alt=" "/></div>)})}
            </div>

{/* Size  */}
            <h4 className="filter_head">Size</h4>
            <div className="filter_container">
                {productSize.map((val)=>{return(<button className="size_box">{val.size}</button>)})}
            </div>
{/* Quantity */}
            <h4 className="filter_head">Quantity</h4>
            <div className="filter_container action">
            <button  
                aria-label="Decrement value"
                onClick={decreseCartQuntity}>-</button>

                <input type="text" value={count}/>
           <button 
                 aria-label="Increment value"
                onClick={increseCartQuntity}>+</button>
            </div>
{/* add to cart button */}
            <Button text="ADD TO CART" className="btn_lab" onClick={()=>addProduct(product)}/>
{/* product response */}
            <div className="product_response">
                <a href=" "><img src={require('../Images/heart.svg').default} alt='like' />Save</a>
                <a href=" "><img src={require('../Images/share-2.svg').default} alt='share' />Share</a>
            </div>
        </div>
    </>)
}
export default ProductPage;