import PropTypes from "prop-types";
import GifItem from "./GifItem";
import { useState } from "react";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({category, onCategoryEdited, onCategoryRemoved}) => {
  const {gifs, isLoading} = useFetchGifs(category);
  const [isEditing, setIsEditing] = useState(false);
  const [newCategory, setNewCategory] = useState(category);
  const handleEditButtonClick = () => {
    setIsEditing(true);
  };
  const handleEditing = (event) => {
    const newCategory = event.target.value;
    setNewCategory(newCategory);
  };
  const handleCancelButtonClick = () => {
    setIsEditing(false);
    setNewCategory(category);
  };
  const handleCategoryRemoved = () => {
    onCategoryRemoved(category);
  };

  return (
    <>
      {
        isEditing
        ?
        <>
          <input
            type="text"
            value={newCategory}
            onChange={handleEditing}
          />
          <button onClick={() => {
            onCategoryEdited(category.trim(), newCategory.trim());
            setIsEditing(false);
            setNewCategory(category);
          }}>Edit</button>
          <button onClick={handleCancelButtonClick}>Cancel</button>
        </>
        :
        <h4>
          {category}
          <button onClick={handleEditButtonClick}>Edit</button>
          <button onClick={handleCategoryRemoved}>Delete</button>
        </h4>
      }
      { isLoading && <h4>Cargando...</h4> }
      <div className="card-grid">
        {
          gifs.map((gif) => (
            <GifItem
              key={gif.id}
              {...gif}
            />
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;