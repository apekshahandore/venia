const ProductDesc =({title,description})=>{
    let productTitle= title?.split(' ').slice(0,3).join(' ');
return(<>
    <div className="aem-Grid aem-Grid--12 prod_Description container">

        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 mainprod_head">
            <h1>{productTitle}</h1>
        </div>
    
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 right_details">
            <h5>Description</h5>
            <p>{description}</p>
            <button></button>
        </div>

        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 left_details">
        <h5>Details</h5>
            <div className="aem-Grid aem-Grid--12 ">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <ul>
                        <li><a href=" "><img src={require('../Images/feather.svg').default} alt='like' />Sweat-wicking</a></li>
                        <li><a href=" "><img src={require('../Images/slack.svg').default} alt='like' />Lightweight fabric</a></li>
                    </ul>
                </div>
            <div className="aem-GridColumn aem-GridColumn--default--6">
                <ul>
                    <li><a href=" "><img src={require('../Images/coffee.svg').default} alt='like' />Breathable</a></li>
                    <li><a href=" "><img src={require('../Images/layers.svg').default} alt='like' />69% nylon, 31% lycra</a></li>
                </ul>
            </div>
            
            </div>
            <button></button>
        </div>
   
   </div>
   
   </>

);
}
export default ProductDesc;
