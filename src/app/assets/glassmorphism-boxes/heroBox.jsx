import React from "react";

const HeroBox = () => {
   return (
      <div>
         <svg
            width="1028"
            height="243"
            viewBox="0 0 1028 243"
            xmlns="http://www.w3.org/2000/svg"
            style={{
               backdropFilter: "blur(0px)", // Controls the blurriness of the background
               WebkitBackdropFilter: "blur(0px)", // For Safari compatibility
            }}
         >
            <g filter="url(#filter0_b_2177_8)">
               <path
                  d="M265.321 239.21C268.348 241.662 272.126 243 276.021 243H691.979C695.874 243 699.652 241.662 702.679 239.21L960.704 30.2101C973.151 20.128 966.022 0 950.003 0H17.9966C1.97846 0 -5.15069 20.1279 7.2964 30.2101L265.321 239.21Z"
                  fill="rgba(255, 255, 255, 0.05)" // Semi-transparent white
                  stroke="rgba(255, 255, 255, 0.1)" // Subtle border
                  strokeWidth="1"
               />
            </g>
            <defs>
               <filter
                  id="filter0_b_2177_8"
                  x="-9.83711"
                  y="-10.8"
                  width="987.674"
                  height="264.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
               >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                  <feComposite
                     in2="SourceAlpha"
                     operator="in"
                     result="effect1_backgroundBlur_2177_8"
                  />
                  <feBlend
                     mode="normal"
                     in="SourceGraphic"
                     in2="effect1_backgroundBlur_2177_8"
                     result="shape"
                  />
               </filter>
            </defs>
         </svg>
      </div>
   );
};

export default HeroBox;
