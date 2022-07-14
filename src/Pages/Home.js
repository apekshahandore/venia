import ProductContainer from "../Component/ProductContainer";
import Banner from "../Layout/Banner/Banner";
import ProdutListHeader from "../Layout/ProductListHeader/ProductListHeader";
import FilterContainer from "../Component/FilterContainer";
// import MobileSideBar from "../Layout/Navigation/MobileFilterSidebar";
import React, {useState, useEffect} from "react";
const Home=()=>{
//addedpart from productContainer start 
    const [data, setData]= useState([]);
    const [filter, setFilter]= useState(data);
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
        const getProducts =async()=>{
            setLoading(true);
            const response= await fetch("https://fakestoreapi.com/products");
                // console.log(response);
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);      
        }
            getProducts();
    },[]);
  
    // addedpart end from productContainer

    const totalProducts= filter.length;
    const sortProductLTH=()=>{
        let sortedData= data?.sort((a, b) => (a.price > b.price ? 1 : -1));
        setFilter(sortedData);
       }
       const sortProductHTL=()=>{
        let sortedData= data?.slice().sort((a, b) => b.price - a.price);
        setFilter(sortedData);
       }

        const sortProduct=(event)=>{
        
            if(event.target.value === "lowtohigh"){
                sortProductLTH();
            }else if(event.target.value === "hightolow"){
                sortProductHTL();
            }
        }

  

  
    return(
    <>
    
        <Banner text={`Women's`}/>
        <section className="aem-Grid aem-Grid--12 container">
        <ProdutListHeader totalProducts={totalProducts} sortProduct={sortProduct} lowToHigh={sortProductLTH} highToLow={sortProductHTL}/>
      
        <aside className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--hide">
         <FilterContainer />
        </aside>
        
        <main className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--9 aem-GridColumn--phone--12">
        <ProductContainer filter={filter} loading={loading} />
        </main>
       
       
    </section>
    {/* <MobileSideBar/> */}
    </>)

}
export default Home;