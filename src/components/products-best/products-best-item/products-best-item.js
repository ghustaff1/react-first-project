import './products-best-item.scss';
import { Component } from 'react';
class ProductsBestItem extends Component{
  constructor(props){
    super();
  }

  render(){
    const {src, alt, title, price}=this.props;
    
    return(
      <div className="products-best-item">
        <div className="products-best-item-img">
          <img src={src} alt={alt} />
        </div>
        <div className="products-best-item-title">{title}</div>
        <div className="products-best-item-price">{price}$</div>
      </div>
    )
  }
}
export default ProductsBestItem;