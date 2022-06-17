import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useProducts } from "../context/product-context";
import { applyFilter } from "../context/utils/filter";
import { ProductCard } from "./ProductCard";
import { dummyData } from "../constant";

const ProductFeed = () => {
  const { productState } = useProducts();
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      try {
        await fetch("https://fakestoreapi.com/products").then((res) =>
          res.json().then((res) => setProducts(res))
        );
      } catch (error) {
        console.error(error);
        setProducts(dummyData);
      }
      setisLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="grid product-container">
        <Sidebar />
        <main className="products h-full">
          <div className="grid grid-cols-4 product-feed my-10 mx-auto">
            {isLoading ? (
              <h3>Loading products...</h3>
            ) : productState.applyFilter ? (
              applyFilter(products, productState).map(
                ({
                  id,
                  category,
                  image,
                  title,
                  description,
                  price,
                  rating,
                }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    category={category}
                    image={image}
                    title={title}
                    description={description}
                    price={price}
                    rating={rating}
                  />
                )
              )
            ) : (
              products.map(
                ({
                  id,
                  category,
                  image,
                  title,
                  description,
                  price,
                  rating,
                }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    category={category}
                    image={image}
                    title={title}
                    description={description}
                    price={price}
                    rating={rating}
                  />
                )
              )
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductFeed;
