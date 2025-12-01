import productService from "@/services/product-service";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await productService.getAllProducts({ limit: 10, offset: 0 });
      setProducts(response);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="min-h-screen flex flex-col items-center">
      {JSON.stringify(products)}
      <div className="mt-2.5 border-2 border-t-stone-500 w-full">
        <p>posts</p>
      </div>
    </div>
  );
}