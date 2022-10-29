import React from "react";

const Front = () => {
  return (
    <>
      <div className='bg-[url("https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg")] bg-cover bg-center w-full h-auto p-24'>
        <h1 className="ml-4  text-lg italic text-center text-white md:text-xl xl:text-2x1">
          Viví lo Mejor de la Patagonia con una experiencia única e inolvidable{" "}
        </h1>
        <h2 className=" text-6xl italic text-center text-white mt-4">
          Andes Aventura y Turismo
        </h2>
        <p className="ml-6 tracking-wide text-lg italic text-white pt-56">
          {" "}
          Tenemos los mejores profesionales en Turismo
        </p>
      </div>
    </>
  );
};

export default Front;