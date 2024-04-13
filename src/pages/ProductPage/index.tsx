import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

interface Product {
  id: string;
  name: string;
  image: string;
}

function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/react-2/xxxmuck/products/${id}`
      );
      const data = (await response.json()) as Product | null;
      setProduct(data);
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      {product ? (
        <div className="product">
          <img
            src={product.image}
            alt={product.name}
            className="product__image"
          ></img>
          <p className="product__name">{product.name}</p>
          <div className="product__description">
            <button className="product__btn--order">Objednat</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductPage;
