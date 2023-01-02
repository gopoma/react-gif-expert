import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if(categories.some((category) => category.toLowerCase() === newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };
  const onCategoryEdited = (previousCategory, newCategory) => {
    const alreadyIn = categories.some((category) => category.toLowerCase() === newCategory.toLowerCase());
    if(previousCategory.toLowerCase() !== newCategory.toLowerCase() && alreadyIn) return;
    const previousCategoryIndex = categories.findIndex((category) => category === previousCategory);
    const newCategories = categories.filter((category) => category !== previousCategory);
    // https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
    newCategories.splice(previousCategoryIndex, 0, newCategory);
    setCategories(newCategories);
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