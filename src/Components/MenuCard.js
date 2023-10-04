import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-cointainer">
        {
          menuData.map((CurrElement) => {
          const { id, name, category, description, image } = CurrElement;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card card-shadow ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="subtle card-description">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="image" className="card-media" />
                  <div className="card-tag subtle">Order Now</div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
