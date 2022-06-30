import { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer=()=>{
    const [data, setData]= useState([]);
    useEffect(()=>{
        const getProducts =async()=>{
        const response= await fetch("https://fakestoreapi.com/products");
        setData(await response.json());       
        }
            getProducts();
    },[data]);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return(<Slider {...settings} >
    {data.slice(0,8).map((card)=>{ 
        return(<Card key={card.id} 
                    id={card.id}
                    img={card.image} 
                    title={card.title} 
                    price={card.price}
                    className="slider_card"
                    />)
                 
    })}
    
        
    </Slider>);
    
}
export default CarouselContainer ;