import React from "react";
import Header from "../components/Header";
import SwiperProduct from "../components/SwiperProduct";
import { Helmet } from "react-helmet-async";

const Produit = () => {
  return (
    <>
    <Helmet>
        <title>Produits</title>
        <meta
          name="description"
          content="Consulter notre rapport Interactif ainsi que quelques autres exemples de nos réalisations."
        />
        <link rel="canonical" href="/produit" />
      </Helmet>
    <section className="pt-10" data-aos="zoom-in-out">
       <Header namePage={"Produits"} />
        <button className="buttonContact shadow-2xl shadow-cyan-200/100 p-2 mt-10 3xl:text-xl sm:text-sm font-semibold w-[150px] h-[80px] lg:w-[300px] rounded-lg drop-shadow-2xl transition ease-in-out delay-450 hover:-translate-y-0.5 hover:scale-110 hover:text-slate-200 duration-500">
          <a
            className="w-full"
            target="_blank"
            rel="noreferrer"
            href="https://app.powerbi.com/view?r=eyJrIjoiNGQ4MDYxNzEtMzJlNy00MWYyLTkzMzEtYmRjOTZjZmE3NmM0IiwidCI6IjA5NzZlMzQyLTVjYWQtNDExNi1iZjMzLTY2YjUzZWFjMGIyYiJ9"
            >
           Consulter notre rapport interactif
          </a>
          </button>
          <p className="mt-28 text-2xl font-bold -mb-32">Quelques autres exemples de nos réalisations:</p>
      <SwiperProduct />
    </section>
            </>
  );
};

export default Produit;