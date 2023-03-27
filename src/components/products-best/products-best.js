import './products-best.scss';
import ProductsBestItem from './products-best-item/products-best-item';
import TopicTitle from '../topic-title/topic-title';
const ProductsBest=(props)=>{

  const elements=props.data.map(({imgSrc, alt, title, price})=>{
    return (
    <ProductsBestItem
    src={imgSrc}
    alt={alt}
    title={title}
    price={price}/>
    )
  });
  return(
    <div className="products-best">
      <div className="container">
        <TopicTitle
        title="Our Best"/>
        <div className="products-best-row">
          {elements}
        </div>
        
      </div>
    </div>
  )
}
export default ProductsBest;