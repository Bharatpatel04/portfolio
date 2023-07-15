import React from "react";
import portal from '../assets/portfolio/portal.jpg'
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import grocery from '../assets/portfolio/grocery.jpg'
import registration from '../assets/portfolio/registration.jpg'
import reactSmooth from '../assets/portfolio/scroll.png'
import door from '../assets/portfolio/door.jpg'


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: grocery,
        link1:()=>{
            window.open('https://grocery-liard.vercel.app/', '_blank');
        },
        link2:()=>{
            window.open('https://github.com/Bharatpatel04/grocery', '_blank');
        }
      },
      {
        id: 2,
        src: portal,
        link1:()=>{
            window.open('https://bharatpatel045.000webhostapp.com/', '_blank');
        },
        link2:()=>{
            window.open('https://github.com/Bharatpatel04/portal-UIc', '_blank');
        }
      },
      {
        id: 3,
        src: registration,
        link1:()=>{
            window.open('https://registration-page-delta.vercel.app/', '_blank');
        },
        link2:()=>{
            window.open('https://github.com/Bharatpatel04/Registration-Page', '_blank');
        }
      },
      {
        id: 4,
        src: reactSmooth,
        link1:()=>{
            window.open('https://legendary-biscotti-4ec45b.netlify.app/', '_blank');
        },
        link2:()=>{
            window.open('https://github.com/Bharatpatel04/react-smoth-scroll', '_blank');
        }
      },
      {
        id: 5,
        src: door,
        link1:()=>{
            window.open('https://delivery-at-door.vercel.app/', '_blank');
        },
        link2:()=>{
            window.open('https://github.com/Bharatpatel04/Delivery-at-door', '_blank');
        }
      },
      {
        id: 6,
        src: reactWeather,
        link1:()=>{
            window.open('https://linkedin.com', '_blank');
        },
        link2:()=>{
            window.open('https://linkedin.com', '_blank');
        }
      },
    ];
  
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src,link1,link2 }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button onClick={link1} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={link2} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Portfolio;
