import Button from "./Button";
import lockImg from "../Images/lock.svg";
import PP_BTN from "../Images/PP_BTN.jpg"
const ProductCalculation=()=>{
   
    return(
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 product_summary'>
        <h3>Pricing Summary</h3>
        <div className="product_calculation">
            <div className="calculation_row">
                <span>Subtotal</span>
                <span>$ 388.00</span>
            </div>
            <div className="calculation_row">
                <span>Coupon</span>
                <span>- $ 77.60</span>
            </div>
            <div className="calculation_row">
                <span>Gift Card</span>
                <span>- $ 100.00</span>
            </div>
            <div className="calculation_row">
                <span>Estimated tax</span>
                <span>$ 23.28</span>
            </div>
            <div className="calculation_row">
                <span>Estimated shipping</span>
                <span>FREE</span>
            </div>
            <div className="calculation_row">
                <b>Estimated Total</b>
                <b>$ 233.68</b>
            </div>
            
           
         
        </div>

        <div className="calc_btn">
        <Button className="btn_lab checkout_btn" text="CHECKOUT" img={lockImg}/>
        </div> 
        <div className="paypal_btn">
            <img className="paypal_img" src={PP_BTN} alt="coffee"/>
        </div>
        </div>
       
    );
}
export default ProductCalculation;