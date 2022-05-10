export default function ProductComponent(props){
    const product=props.product;
    return (
        <>
        <img src={product.images[0]} height={'100px'} width={'100px'} alt="images"/><br/>
        <span>Name: {product.title}</span><br/>
        <span>Price: {product.price}</span><br/>
        </>
    );
}