import "./App.css";
import Header from "./Components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Countries from "./Components/Countries";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./Components/Restaurant";
import Dishes from "./Components/Dishes";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";

export const AppContext = createContext();

function App() {
  const [countries, setCountries] = useState("");
  const [selectcountry, setSelectcountry] = useState("");
  const [restaurantid, setRestaurantid] = useState("");
  const [selectrestaurant, setSelectrestaurant] = useState("");
  const [dishid, setDishid] = useState("");
  const [dishes, setDishes] = useState("");
  const [review, setReview] = useState("");
  const [restaurant_id, setRestaurant_id] = useState("");
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState("");

  function fetchdata() {
    axios("https://finalproject-server-9oal.onrender.com/countries").then((i) =>
      setCountries(i.data)
    );
    axios("https://finalproject-server-9oal.onrender.com/restaurants").then(
      (i) => setSelectrestaurant(i.data)
    );
    axios("https://finalproject-server-9oal.onrender.com/dishes").then((i) =>
      setDishes(i.data)
    );
    axios("https://finalproject-server-9oal.onrender.com/reviews").then((i) =>
      setReview(i.data)
    );
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="App">
      <Header />

      <div className="home">
        <AppContext.Provider
          value={{
            countries,
            setSelectcountry,
            selectrestaurant,
            setSelectrestaurant,
            restaurantid,
            setRestaurantid,
            dishes,
            dishid,
            setDishid,
            review,
            restaurant_id,
            setRestaurant_id,
            user,
            setUser,
            text,
            setText,
            stars,
            setStars,
          }}
        >
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </AppContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
