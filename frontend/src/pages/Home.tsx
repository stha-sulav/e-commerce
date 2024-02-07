import { Link } from "react-router-dom";
import { sampleProducts } from "../data";

const Home = () => {
  return (
    <div>
      {sampleProducts.map((product) => (
        <Link to={`product/${product.slug}`}>
          <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
