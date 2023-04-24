import React, { useEffect, useState } from "react";
import Kpi from "../containers/assets/images/KPI.PNG";
import { Paraph } from "../fakeData/fakeData.js";
import "../kpi.css";

const KpiCircle = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className="h-[500px] flex flex-col justify-around w-[1440px] mx-auto z-30 ">
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="cursor"
      ></div>
      <Paraph>
        <span className="text-2xl font-extrabold">TEMPS DE PRODUCTIONS / EFFECTIF</span>
        <div className="img-cont">
          <img
            className="imgHover pl-[430px]"
            alt="Peugeot 508"
            src="https://picsum.photos/600/900?random=1"
          />
        </div>
      </Paraph>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-[440px] h-[300px] justify-between">
          <Paraph>
            <span className="text-2xl font-extrabold">Délai de production / article</span>
            <div className="img-cont">
              <img
                className="imgHover pl-[430px] -mt-[100px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=2"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">MARGE NETTE / COMMERCIAL</span>
            <div className="img-cont">
              <img
                className="imgHover pl-[430px] -mt-[200px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=3"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">TOP 10 Fournisseurs</span>
            <div className="img-cont">
              <img
                className="imgHover pl-[430px] -mt-[200px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=4"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">Taux de conversion</span>
            <div className="img-cont">
              <img
                className="imgHover pl-[430px] -mt-[300px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=5"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">Coût moyen par embauche</span>
            <div className="img-cont">
              <img
                className="imgHover pl-[430px] -mt-[400px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=6"
              />
            </div>
          </Paraph>
        </div>
        <div className="">
          <img
            className="xl:w-[400px] z-0"
            alt="Kpi"
            src={Kpi}
            // data-aos="fade-up"
            // data-aos-duration="1500"
          />
        </div>
        <div className="flex flex-col w-[440px] h-[300px] justify-between">
          <Paraph>
            <span className="text-2xl font-extrabold">EVOLUTION MENSUELLE DU RESULTAT</span>
            <div className="img-cont">
              <img
                className="imgHover -mt-[200px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=7"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">Ticket moyen / dépense frais</span>
            <div className="img-cont">
              <img
                className="imgHover -mt-[300px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=8"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">MARGE / ARTICLE</span>
            <div className="img-cont">
              <img
                className="imgHover -mt-[300px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=9"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">Taux de rotation</span>
            <div className="img-cont">
              <img
                className="imgHover -mt-[300px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=10"
              />
            </div>
          </Paraph>
          <Paraph>
            <span className="text-2xl font-extrabold">Age moyen / poste</span>
            <div className="img-cont">
              <img
                className="imgHover -mt-[300px]"
                alt="lorem picsum"
                src="https://picsum.photos/600/900?random=11"
              />
            </div>
          </Paraph>
        </div>
      </div>
      <div className="flex justify-around">
      <Paraph>
          <span className="text-2xl font-extrabold">% répartition des charges</span>
          <div className="img-cont">
            <img
              className="imgHover -mt-[300px]"
              alt="lorem picsum"
              src="https://picsum.photos/600/900?random=15"
            />
          </div>
        </Paraph>
        <Paraph>
          <span className="text-2xl font-extrabold">% répartition des charges</span>
          <div className="img-cont">
            <img
              className="imgHover -mt-[300px]"
              alt="lorem picsum"
              src="https://picsum.photos/600/900?random=15"
            />
          </div>
        </Paraph>
      </div>
    </div>
  );
};

export default KpiCircle;
