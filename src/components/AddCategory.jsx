import {useState} from "react";

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const handleCategoryChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if(newCategory.length < 1) {return;}
    
    onNewCategory(newCategory);
    // setCategories((c) => [inputValue, ...c]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleCategoryChange}
      />
    </form>
  );
};

export default AddCategory;