import React from "react";
// import Category from "./Category";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const buttons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        className={className}
        key={category}
        onClick={() => setSelectedCategory(category)}
      >{category}</button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
      
    </div>
  );
}

export default CategoryFilter;
//key={category}
