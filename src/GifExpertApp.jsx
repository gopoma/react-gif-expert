import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if(categories.some((category) => category.toLowerCase() === newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };
  const onCategoryEdited = (previousCategory, newCategory) => {
    if(categories.some((category) => category.toLowerCase() === newCategory.toLowerCase())) return;
    const newCategories = categories.filter((category) => category !== previousCategory);
    setCategories([newCategory, ...newCategories]);
  };
  const onCategoryRemoved = (removedCategory) => {
    const newCategories = categories.filter((category) => category !== removedCategory);
    setCategories(newCategories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory}/>
      {categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category}
          onCategoryEdited={onCategoryEdited}
          onCategoryRemoved={onCategoryRemoved}
        />
      ))}
    </>
  );
};

export default GifExpertApp;