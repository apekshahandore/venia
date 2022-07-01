import { useSelector } from 'react-redux';  
import Accordion from '../Component/Accordion';
import CarouselContainer from "../Component/Carousel"
import ProductCalculation from '../Component/ProductCalculation';
import SingleCartItem from '../Component/SingleCartItem';
import { accordionData } from '../Data';
const Cart=()=>{

    const cartItems = useSelector((st) => st.handleCart.items);
    
    const itemsInCart = cartItems.map(item => {
        return (
        <SingleCartItem item={item} key={item.price} id={item.id} title={item.title} price={item.price} img={item.image}/>)
      }) 

    const accordionList = accordionData.map((list)=>{
        return(<Accordion key={list.id} leftHead={list.leftHead} rightHead={list.rightHead}/>)
    })
    return(<>
    <div className='aem-Grid aem-Grid--12 container'>
      <div className='cart_heading'>
        <h1>Your Shopping Bag</h1>
        <button></button>
      </div>
    <div className='aem-Grid aem-Grid--12'>
        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12' style={{paddingRight:"32px"}}>
         {itemsInCart}
         {accordionList}
         </div>
  
        <ProductCalculation />
    
     
    </div>
        <div className='aem-Grid aem-Grid--12 container receviewed_Prod' style={{paddingTop:"64px"}}>
            <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide'>
              <div className='cart_heading' style={{paddingBottom:"33px"}}><h1>Recently Viewed</h1></div>
              <div className='slider' style={{paddingBottom:"128px"}}>
              <CarouselContainer/>
              </div>
              
              </div>
            </div>
        </div>
      
    </>)
}
export default Cart;