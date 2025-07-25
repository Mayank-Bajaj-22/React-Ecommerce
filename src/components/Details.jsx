import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getsingleproducts = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      console.log("Fetched detail:", data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproducts();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="w-full flex items-center justify-center h-full px-15 gap-30">
      <img
        className="object-contain h-[50%] w-[35%]"
        src={product.image}
        alt={product.title}
      />
      <div className="content justify-center w-[90%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-500 mb-5">${product.price}</h2>
        <p className="mb-8">{product.description}</p>
        <Link className="py-2 mr-5 px-5 border border-blue-300 text-blue-400 rounded">
          Edit
        </Link>
        <Link className="py-2 px-5 border border-red-300 text-red-400 rounded">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Details;
