// import productService from "@/services/product-service";
// import { useState } from "react";
// import { useEffect } from "react";
import CreateProductForm from "@/components/CreateProductForm";
import { useProducts } from "@/hooks/queries/products";

export default function HomePage() {
  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await productService.getAllProducts({ limit: 10, offset: 0 });
  //     setProducts(response);
  //   } catch (error) {
  //     console.error("Xatolik:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useProducts()


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }


  return (
    <div className="min-h-screen flex flex-col items-center">
      {JSON.stringify(data)}
      <button className="rounded-2xl bg-blue-500 py-3 px-2 cursor-pointer" onClick={refetch}>Refetch</button>
      <div className="mt-8">
        <CreateProductForm />
      </div>
    </div>
  );
}