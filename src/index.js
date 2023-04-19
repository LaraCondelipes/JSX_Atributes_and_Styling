import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        alt="arroz de pato"
        src="https://www.receitasemenus.net/wp-content/uploads/2008/12/arroz-pato-moda-alentejo.jpg"
      />
      <img
        className="food-img"
        alt="bacalhau com grão"
        src="https://www.foodfromportugal.com/content/uploads/2012/11/grao-cozido-bacalhau.jpg.webp"
      />
      <img
        className="food-img"
        alt="sopas de pão"
        src="https://www.receitas-sem-fronteiras.com/media/59e4b2746dbcc_crop.jpeg/rh/sopa-portuguesa-com-pao.jpg"
      />
    </div>
  </div>,

  document.getElementById("root")
);
