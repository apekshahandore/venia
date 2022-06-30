import React, {useState} from "react";
import Card from "./Card";
import Pagination from "./Pagination";
// import Pagination from "react-js-pagination";

const ProductContainer=({filter, loading})=>{
    // const [data, setData]= useState([]);
    // const [filter, setFilter]= useState(data);
    // const [loading, setLoading]= useState(false);
    const [page, setPage]= useState(1);
    const [cardsPerPage]=useState(9);
 

    // useEffect(()=>{
    //     const getProducts =async()=>{
    //         setLoading(true);
    //         const response= await fetch("https://fakestoreapi.com/products");
    //             // console.log(response);
    //             setData(await response.clone().json());
    //             setFilter(await response.json());
    //             setLoading(false);
    //             // console.log(filter);      
    //     }
    //         getProducts();
    // },[]);
    const indexOfLastcard =page * cardsPerPage;
    const indexOfFirstcard= indexOfLastcard - cardsPerPage;
    const currentPosts= filter.slice(indexOfFirstcard,indexOfLastcard);

   //change Page

    const paginate = pageNumber => setPage(pageNumber);
    

    return(<>
        <div className="aem-Grid aem-Grid--12 card-container" style={{paddingTop:"24px"}}>
            {loading? <h1>Loading...</h1>:

       // here is user currentposts insted of filter(cards data) because of pagination//
                 <> {currentPosts.map((val,index)=>{
                        return( 
                                <Card 
                                    key={index} 
                                    id={val.id}
                                    img={val.image} 
                                    title={val.title} 
                                    price={val.price} />
                              )
                            })}
                </>
            }
             
        </div>
        <Pagination cardsPerPage={cardsPerPage} totalCards={filter.length} paginate={paginate}/>

      {/* <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={filter.length}
          pageRangeDisplayed={5}
          onChange={paginate}
        /> */}
    </>);
}
export default ProductContainer;