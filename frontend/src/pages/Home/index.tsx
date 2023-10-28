import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import ProductImg from 'assets/images/main-img.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho.
          </p>
        </div>
        <div className="home-image-container">
          <img src={ProductImg} alt="Nome do produto" />
        </div>
      </div>
      <div>
        <Link to="/products">
          <ButtonIcon />
        </Link>
      </div>
    </div>
  );
};

export default Home;
