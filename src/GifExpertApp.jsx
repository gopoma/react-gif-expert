import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if(categories.some((category) => category.toLowerCase() === newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory}/>
      {categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category}
        />
      ))}
    </>
  );
};

export default GifExpertApp;