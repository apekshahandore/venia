import Button from "./Button";
import React, {useState } from 'react'
import { useDispatch} from "react-redux";
import {cartActions} from "../redux/handleCartSlice";
import Rating from "./ProductsDetails/Rating";
import ProductDescription from "./ProductsDetails/ProductDescription";
import Colors from "./ProductsDetails/Colors";
import Sizes from "./ProductsDetails/Sizes";
import Quantity from "./ProductsDetails/Quantity";

const ProductPage=({title,price,rating,description,image, product})=>{
const dispatch = useDispatch();
let [num, setNum] = useState(1);
    const addProduct=(product,num)=>{ 
        // dispatch(cartActions.addProdToCart({...product, quntity:1}));
        dispatch(cartActions.addProdToCart(product, num));
    }
    let productTitle= title?.split(' ').slice(0,3).join(' ');
    
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }

    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };

    let handleChange = (e) => {
        setNum(e.target.value);
    }
    console.log(product.category);
    return(<>
    {/* productdetail page left part */}
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product_image">
        
            <div className="aem-Grid aem-Grid--12 container">
                <div className="category_left">
                    <a href="">Clothing</a> / <a href="">{product.category}</a> / <a href="">OuterWear</a>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide images_column">
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
                    <button> 
                    <img classname="imagesdown_arr" src={require('../Images/chevron-down.svg').default}alt={title}/>  
                    </button>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 main_image">
                    <figure> 
                    <img src={image} alt={title}/>  
                    </figure>
                </div>
            </div>
        </div>

        {/* productdetail page right part */}
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product_details">
        {/* category */}
        <div className="category">
         <a href="">Clothing</a> / <a href="">{product.category}</a> / <a href="">OuterWear</a>
        </div>
        {/* product title */}
        <h1>{productTitle}</h1>

        {/* product price */}        
        <h4>${price}</h4>

        {/* rating */}  
        <Rating rating={rating}/>

        {/* product description */}
        <ProductDescription description={description}/>

        {/* Color  */}
        <Colors />

        {/* Size  */}
        <Sizes />

        {/* Quantity */}
        <Quantity  decNum={decNum} incNum={incNum} num={num} handleChange={handleChange}/>

        {/* add to cart button */}
        <Button text="ADD TO CART" arialabel="add to cart" className="btn_lab" onClick={()=>addProduct(product,num)}/>

        {/* product response */}
            <div className="product_response">
                <a href=" "><img src={require('../Images/heart.svg').default} alt='like' />Save</a>
                <a href=" "><img src={require('../Images/share-2.svg').default} alt='share' />Share</a>
            </div>

        </div>
    </>)
}
export default ProductPage;