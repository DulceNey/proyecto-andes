import React from "react";
import Cajonbarra from "./Cajonbarra";
import { useState } from "react";

const Navbar = () => {
const [visible, setVisible] = useState(false)

  return (
    <>
      <body className="w-screen h-screen overflow-x-hidden font-semibold bg-naranja-palete text-md">
        <header class="header" className="fixed z-50 w-full h-16 p-1 bg-gris-fondo2 ">
          <section class="container" className="flex items- justify-between">
            <div class="logo" className="w-20 h-auto p-0 m-0">
              <img src="../multimedia/IMG-20220815-WA0006.jpg" ></img>
            </div>

      {visible? <Cajonbarra/> :null}
            

            <button class="menu-btn" className="border-0 fill-naranja-palete inline-flex gap-3 p-2 pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" onClick={setVisible}>
                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
              </svg>
              <svg class="none" xmlns="http://www.w3.org/2000/svg"  width="34" height="34"  viewBox="0 0 24 24" className="hidden" >
                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
              </svg>
              <svg class="carrito" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 576 512" >
                <path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z">

                </path>
              </svg>
            </button>
            </section>
            
        </header>
      <div className="w-full h-full">
        <section id="inicio" className="w-full h-1/4">Inicio</section>
        <section id="excursiones" className="w-full h-1/4">Excursiones</section>
        <section id="conocenos" className="w-full h-1/4">Conocenos</section>
        <section id="contacto" className="w-full h-1/4">Contacto</section>
      </div>
      </body>
    </>
  );
};

export default Navbar;