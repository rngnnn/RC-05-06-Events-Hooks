import React, { useState } from "react";
//* Mouseover olayı, fare işaretçisi div öğesine ve onun alt öğelerine girdiğinde tetiklenir.

//* Mouseenter olayı yalnızca fare işaretçisi div öğesine girdiğinde tetiklenir.

//* Onmousemove olayı, fare işaretçisi div öğesinin üzerinde her hareket ettiğinde tetiklenir.

//? pageX/Ykoordinatlar, oluşturulan sayfanın tamamının sol üst köşesine göredir (kaydırılarak gizlenen parçalar dahil),

//? clientX/YKoordinatlar sayfanın görünen kısmının sol üst köşesine göredir ve tarayıcı penceresinden "görünür" .

//? screenX/Yfiziksel ekrana göredir.

const MouseEvents = () => {
  const [visible, setVisible] = useState(false);

  const [coordX, setCoordX] = useState("");
  const [coordY, setCoordY] = useState("");

  const handleDoubleClick = (e) => {
    e.target.classList.toggle("bg-danger");
  };

  const handleMouseMove = (e) => {
    //? mutlak koordinatlar
    // console.log("X:", e.pageX);
    // console.log("Y:", e.pageY);
    // console.log("X:", e.clientX);
    // console.log("Y:", e.clientY);

    //? göreceli koordinatlar
    console.log("X:", e.nativeEvent.offsetX);
    console.log("Y:", e.nativeEvent.offsetY);
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        onMouseOver & onMouseLeave
      </div>
      {/* Conditional Rendering */}
      <p>{visible && <span>For detail ....</span>}</p>
      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        onDoubleClick
      </div>
      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        <span>onMouseMove</span>
      </div>
      <div
        id="todo-4"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseOver={handleMouseMove}
      >
        <span>onMouseOver</span>
      </div>
      <div
        id="todo-5"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseEnter={handleMouseMove}
      >
        <span>onMouseEnter</span>
      </div>
      X: {coordX} and Y:{coordY}
    </div>
  );
};

export default MouseEvents;
