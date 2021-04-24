import { useState, useContext } from "react";

import Head from "next/head";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Context } from "../components/useContext/context.js";

export default function Home() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      img: "fsfsf",
      tittle: "Text first tittle",
      text: "Post first text",
      category: "Photography",
      author: "Baga Lolka",
      dateCreate: "21:49 17.11.20",
      likes: 10,
      views: 189,
    },
    {
      id: 2,
      img: "fsfsf",
      tittle: "Text second tittle",
      text: "Post second text",
      category: "Art",
      author: "Lolka",
      dateCreate: "15:17 20.12.20",
      likes: 21,
      views: 98,
    },
    {
      id: 3,
      img: "fsfsf",
      tittle: "Text three tittle",
      text: "Post three text",
      category: "Fasion",
      author: "Baga",
      dateCreate: "10:31 15.10.20",
      likes: 17,
      views: 90,
    },
  ]);

  return (
    <Context.Provider value={{posts}}>
      <div className="">
        <Head>
          <title>BLOGER</title>
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <Header />
        <NavBar />

        <Main />

        <Footer />
      </div>
    </Context.Provider>
  );
}
