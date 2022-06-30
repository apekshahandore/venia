const Button=({text, onClick,className, img})=>{
return (<>
<button className={className} onClick={onClick} type="button">
{img ?<img src={img} alt=" "/>:null  }
{text}
</button></>);
}
export default Button;