import ProductImg from 'assets/images/product.svg';
import './styles.css';
import ProductButton from 'components/ProductButton';

const ProductCard = () => {
  return (
    <div className="product-card base-card-main-product">
      <div className="product-image-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="product-content-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi.
        </p>
      </div>
      <ProductButton/>
    </div>
  );
};

export default ProductCard;
