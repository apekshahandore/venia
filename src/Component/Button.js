const Button=({text, onClick,className, img, arialabel})=>{
return (<>
<button  aria-label={arialabel} className={className} onClick={onClick} type="button">
{img ?<img src={img} alt=" "/>:null  }
{text}
</button></>);
}
export default Button;