import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { FaHamburger } from 'react-icons/fa';
import { CiBurger } from 'react-icons/ci';
import { GiHamburger } from 'react-icons/gi';


import { SiBurgerking } from 'react-icons/si';
import { GiRoastChicken } from 'react-icons/gi';
import { GiChickenOven } from 'react-icons/gi';

import "./Advertisement.css";
import { useEffect } from "react";

const Advertisement = () => {

  return (
    <>
      <div className="advertisement">
        <div className="mt-[-50px]">
          <Typography variant="h3">Advertisement Of Food</Typography>
        </div>

        <div className="flex flex-col gap-32">
        <div className="advertisementCube mt-24">
          <div className="advertisementCubeFaces advertisementFaces1">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_1280.jpg"
              alt="Face1"
            />
          </div>

          <div className="advertisementCubeFaces advertisementCubeFaces2">
            <img
              src="https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Face2"
            />
          </div>

          <div className="advertisementCubeFaces advertisementCubeFace3">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"
              alt="Face3"
            />
          </div>

          <div className="advertisementCubeFaces advertisementCubeFace4">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg"
              alt="Face4"
            />
          </div>

          <div className="advertisementCubeFaces advertisementCubeFace5">
            <img src="https://cdn.pixabay.com/photo/2017/11/12/21/11/hamburger-2943825_1280.jpg" alt="Face5" />
          </div>

          <div className="advertisementCubeFaces advertisementCubeFace6">
            <img
              src="https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_1280.jpg"
              alt="Face6"
            />
          </div>
        </div>
        {/* cube under shadow create */}
        <div className="cubeShadow"></div>
        </div>

        <div className="flex justify-center">
          <div className="advertisementBox" id="advertisementBox">
            <FaHamburger />
            <CiBurger />
            <GiHamburger />
            <GiChickenOven />
            <GiRoastChicken />
            <SiBurgerking />
            <CiBurger />
            <GiChickenOven />
            <GiChickenOven />
          </div>
        </div>

      </div>
      
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.048)" }}
        className="custom-shape-divider-top-1687544512"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Advertisement;
