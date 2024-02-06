import { sampleProducts } from "./data";

const App = () => {
  return (
    <div className="d-flex flex-col h-screen">
      <header>E-commerce</header>
      <main>
        {sampleProducts.map((product) => (
          <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;
