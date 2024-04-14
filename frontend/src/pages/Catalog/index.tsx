import './styles.css';
import { Link } from 'react-router-dom';
import ProductCard from 'components/ProductCard';
import BuscarButton from 'components/BuscarButton';

const Catalog = () => {
  return (
    <div className="product-container">
      <div>
        <Link to="/">
          <BuscarButton />
        </Link>
      </div>
      <div className="my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
