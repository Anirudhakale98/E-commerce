// components/ProductList.tsx
"use client";

import React, { useEffect, useState } from "react";
import { ProductData } from "../../types";
import ProductCard from "./ProductCard";
import { getProductsData } from "@/lib/getData";

const ProductList = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductsData(); // adjust to your API
      setProducts(res);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((item) => (
        <ProductCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default ProductList;
