import React from "react";
import Cards from "./Cards/Cards";

const prices = [
  {
    title: "Безлимитный 300",
    tariff: "300/мес",
    speed: "до 10 Мбит/сек",
    info: "Объём включенного трафика не ограничен",
    color: "blue",
  },
  {
    title: "Безлимитный 450",
    tariff: "450/мес",
    speed: "до 50 Мбит/сек",
    info: "Объём включенного трафика не ограничен",
    color: "green",
  },

  {
    title: "Безлимитный 550",
    tariff: "550/мес",
    speed: "до 100 Мбит/сек",
    info: "Объём включенного трафика не ограничен",
    color: "red",
    isSelected: true,
  },
  {
    title: "Безлимитный 1000",
    tariff: "1000/мес",
    speed: "до 200 Мбит/сек",
    info: "Объём включенного трафика не ограничен",
    color: "black",
  },
];

function App() {
  return (
    <div className="container">
<Cards arr ={prices}></Cards>
    </div>
  );
}

export default App;
