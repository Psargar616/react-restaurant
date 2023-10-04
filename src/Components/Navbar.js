import React from "react";

const Navbar = ({ filterItem, menuCategory }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {
            menuCategory.map((currEle) => {
            return (
              <button
                className="btn-group-item"
                onClick={() => filterItem(currEle)}
              >
                {currEle}
              </button>
            );
          })}
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
