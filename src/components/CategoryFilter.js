import React from "react";

function CategoryFilter({ selected, categories, setSelected }) {
  function handleClick(e) {
    setSelected(e.target.textContent)
  }
  const renderButtons = categories.map((category) => {
    return <button
      className={selected === category && "selected"}
      onClick={handleClick}
      key={category}>{category}
    </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
