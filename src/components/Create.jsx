import React, { useState } from "react";

const Create = () => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const AddProductHandler = (e) => {
    e.preventDefault();
    const product = {
      title,
      image,
      category,
      price,
      description,
    };
    console.log(product)
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-[46%]"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-[46%]"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="mb-3 text-1xl bg-zinc-100 rounded p-3 w-1/2"
        rows="10"
        placeholder="enter product description here ...."
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border border-blue-300 text-blue-400 rounded">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
