import React from "react";
import KpiCircle from "../components/KpiCircle";
import { Link } from "react-router-dom";
import dashlogo from "../containers/assets/images/dashlogo.png";
import rpa from "../containers/assets/images/rpa.png";
import info from "../containers/assets/images/information.png";
import MainImage from "../containers/assets/images/accueil.jpg"
import arrow from "../containers/assets/images/arrow.png";
import db from "../containers/assets/images/db.png";
import smart from "../containers/assets/images/intelligence.png";
import board from "../containers/assets/images/board.png";
import auto from "../containers/assets/images/automatisation.png";
import decision from "../containers/assets/images/decision.png";
import logo from "./assets/images/logo.PNG";
import Swipers from "../components/Swipers";
import OrgCard from "../components/OrgCard";
import Title from "../components/Title";
// import Border from "../components/Border";
import EvolutionLogo from "../components/EvolutionLogo";
import Header from "../components/Header";

const MainPage = () => {
  return (
    <main>
      <div className=" mx-auto z-0 w-full px-1 flex flex-col">
        {/* <div className="py-32 " data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={MainImage}
            alt="mainImage"
            className=" mx-auto sm:h-[300px] w-full md:w-full object-cover shadow-lg"
          />
          <h1 className="absolute top-[250px] left-[130px] text-4xl text-white font-semibold backdrop-blur-[.5px]">
            Data & BI Solutions
          </h1>
        </div> */}
        <Header namePage={"Data & BI Solutions"} MainImage={MainImage}/>
        <div className="w-[300px] xl:w-[1500px] mx-auto relative my-20">
          <div className="parallax"></div>
          <div className="absolute top-0 ">
            <p className="parallax text-2xl text-justify p-2 text-white flex flex-col md:w-[700px] h-[300px] backdrop-blur-sm 2xl:leading-[70px]">
              <span className="text-5xl text-yellow-400 font-semibold">
                Une entreprise
              </span>{" "}
              créée avec une volonté de répondre aux besoins uniques à chaque
              activité et d’apporter des solutions dédiées en analyse BI et en
              applications automatisées pour les dirigeants et leurs équipes.
            </p>
          </div>
        </div>
        {/* <Border /> */}
        <div className="h-[1000px] w-[300px] lg:w-[1020px] lg:h-[320px] mx-auto flex flex-col lg:flex-row justify-between items-center my-20">
          <OrgCard
            cardLogo={dashlogo}
            cardTitle={"Tableaux de Bords"}
            cardDesc={"Créer des tableaux de bords adaptés à vos besoins."}
          />
          <OrgCard
            cardLogo={rpa}
            cardTitle={"Automatisation"}
            cardDesc={
              "Apporter des outils automatisés pour faciliter la communication dans vos équipes."
            }
          />
          <OrgCard
            cardLogo={info}
            cardTitle={"Fiabilité"}
            cardDesc={"Fiabiliser l’information "}
          />
        </div>
        {/* <Border /> */}

        <Title
          titleDesc={
            "Des informations multi-sources, multi-formats collectées et centralisées pour une analyse précise et globale de votre activité"
          }
        />

        <div className="h-full w-full mx-auto my-10 ">
          {/* <Border /> */}
          <div className="" data-aos="zoom-in-down" data-aos-duration="2000">
            <div className="flex flex-wrap h-[1250px] lg:h-[600px] xl:w-[1100px] mx-auto my-5 p-10 shadow-lg rounded-md">
              <div className="h-[230px] w-[250px] xm:w-[500px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-slate-100 opacity-75 mx-auto rounded z-20 shadow-md">
                <p className="mt-10 relative bottom-5  text-zinc-600 text-2xl font-bold">
                  Trésorerie
                </p>
                <p
                  className=" relative mr-[120px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                >
                  Fournisseurs
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  Clients
                </p>
                <p
                  className=" relative ml-[70px] mt-[30px] text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  data-aos-duration="500"
                >
                  Financement
                </p>
              </div>
              <div className="h-[230px] w-[250px] xm:w-[500px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-slate-100 opacity-75 mx-auto rounded z-20 shadow-md">
                <p
                  className=" mt-10 relative bottom-5 right-10 text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="500"
                >
                  Achats
                </p>
                <p
                  className=" relative mr-[100px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-duration="500"
                >
                  Stocks
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  Charges
                </p>
                <p
                  className=" relative md:ml-[70px] mt-[30px] text-zinc-600 text-xl xm:text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1600"
                  data-aos-duration="500"
                >
                  Délais de Rotation
                </p>
              </div>
              <div className="h-[230px] w-[250px] xm:w-[500px] md:w-[750px] lg:w-[450px] border-5 mt-5 bg-slate-100 opacity-75 mx-auto rounded z-20 shadow-md">
                <p
                  className=" mt-10 relative bottom-5 left-8 text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                >
                  CA
                </p>
                <p
                  className=" relative mr-[120px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1400"
                  data-aos-duration="500"
                >
                  Marge
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  Résultats
                </p>
                <p
                  className=" relative ml-[20px] mt-[30px] xm:ml-[150px] text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1700"
                  data-aos-duration="500"
                >
                  Part de marché
                </p>
              </div>
              <div className="h-[230px] w-[250px] xm:w-[500px] md:w-[750px] lg:w-[450px] border-5 mt-5  bg-slate-100 opacity-75 mx-auto rounded z-20 backdrop-blur/10 shadow-md">
                <p
                  className=" mt-10 relative bottom-5 right-8 text-zinc-600 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                >
                  Frais
                </p>
                <p
                  className=" relative ml-[120px] text-2xl text-zinc-600 font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  data-aos-duration="500"
                >
                  Salaires
                </p>
                <p
                  className=" relative mt-[20px] text-blue-900 text-2xl font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="500"
                >
                  Social
                </p>
                <p
                  className=" relative mr-[90px] mt-[30px] text-zinc-600 text-2xl font-bold"
                  data-aos-delay="1800"
                  data-aos-duration="500"
                >
                  Turn-Over
                </p>
              </div>
              <img
                alt="logo"
                src={logo}
                className=" collapse xl:visible z-0 w-[100px] h-[100px] absolute lg:ml-[460px] lg:mt-[210px]"
              />
            </div>
          </div>
          {/* <Border /> */}
        </div>
        <Title
          titleDesc={
            "Faisons interagir vos données pour vous mettre à disposition des rapports précis. Développons ensemble les outils dédiés à votre activité et vos besoins."
            // pour vous accompagner dans votre stratégie et vos décisions."
          }
        />
        {/* <Border /> */}
        <div
          className="evol w-[300px] md:w-[650px] h-[1000px] lg:w-full xl:w-[1280px] lg:h-[600px] flex flex-col lg:flex-row justify-evenly  mx-auto my-10"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className="relative lg:top-[50%]">
            <EvolutionLogo imgEvo={db} txtEvo={"Centralisation des données"} />
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:-rotate-45 lg:relative top-[45%] mx-auto"
            src={arrow}
            alt=""
          />

          <div className="relative lg:top-[20%]">
            <EvolutionLogo
              imgEvo={auto}
              txtEvo={"Automatisation des données"}
            />
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:relative lg:top-[20%] lg:-rotate-45 mx-auto"
            src={arrow}
            alt="arrow"
          />

          <div className="">
            <EvolutionLogo
              imgEvo={smart}
              txtEvo={"Transformation des données"}
            />
          </div>

          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:rotate-45 relative lg:top-[20%] mx-auto"
            src={arrow}
            alt="arrow"
          />
          <div className="relative lg:top-[20%]">
            <EvolutionLogo
              imgEvo={board}
              txtEvo={"Visualisation des données"}
            />
          </div>
          <img
            className="h-[50px] w-[50px] lg:h-[50px] rotate-90 lg:rotate-45 relative lg:top-[48%] mx-auto"
            src={arrow}
            alt="arrow"
          />
          <div className="relative lg:top-[50%]">
            <EvolutionLogo imgEvo={decision} txtEvo={"Prise de décision"} />
          </div>
        </div>
        {/* <Border /> */}
        <Title
          titleDesc={
            " La centralisation de la donnée offre de grandes possibilités d’analyse. Evolution, répartition et autres indicateurs clés sont accessibles."
          }
        />
        {/* <div className="flex flex-row  w-[0px] "> */}
        <KpiCircle />
        {/* </div> */}
        <div
          className="h-full mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* <Border /> */}
          <p className="text-xl my-20">
            Des entreprises comme la vôtre réalise chaque jour des projets BI
            pour améliorer leur quotidien
          </p>
          <Swipers />
          <p className="text-4xl mt-[200px]" data-loc="imagetest">
            Réaliser votre projet
          </p>
          <Link to="/contact">
            <button
              className="text-3xl font-semibold bg-blue-500 shadow-lg shadow-blue-500/50 my-10 p-8 px-20 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500"
              // data-aos="zoom-out"
              // data-aos-duration="1200"
            >
              Allons-Y
            </button>
          </Link>
        </div>
       
      </div>
    </main>
  );
};

export default MainPage;
