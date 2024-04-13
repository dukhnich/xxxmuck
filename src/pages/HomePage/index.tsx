import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Product {
  id: string;
  name: string;
  image: string;
}

function HomePage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://apps.kodim.cz/react-2/xxxmuck/products"
      );
      const data = (await response.json()) as Product[] | null;
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="homepage__header">
        <h1 className="homepage__title">Aktuální nabídka</h1>
        <p className="homepage__subtitle">
          Nejnovější prémiové produkty od předních českých designérů. Doprava
          zdarma až k vám domů, na cenu nehledte.
        </p>
      </div>
      {products ? (
        <div className="list">
          {products.map((product) => (
            <Link className="list-item" key={product.id} to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="list-item__image"
              ></img>
              <p className="list-item__name">{product.name}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default HomePage;
