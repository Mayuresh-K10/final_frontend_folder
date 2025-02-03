import React from "react";

const PageIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1570_1083)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4894 7.94258C6.04475 11.1718 3.8224 12.7865 2.94956 15.1715C2.87954 15.3628 2.81656 15.5567 2.76075 15.7526C2.06501 18.1952 2.91387 20.8077 4.61159 26.0328C6.30931 31.2578 7.15817 33.8703 9.15675 35.4375C9.31708 35.5632 9.48196 35.683 9.65106 35.7966C11.7591 37.2131 14.5061 37.2131 20 37.2131C25.494 37.2131 28.2409 37.2131 30.349 35.7966C30.5181 35.683 30.6829 35.5632 30.8433 35.4375C32.8418 33.8703 33.6907 31.2578 35.3884 26.0328C37.0861 20.8077 37.935 18.1952 37.2393 15.7526C37.1835 15.5567 37.1205 15.3628 37.0505 15.1715C36.1776 12.7865 33.9553 11.1718 29.5106 7.9426C25.0659 4.71334 22.8435 3.09869 20.3055 3.00559C20.1019 2.99812 19.8981 2.99812 19.6945 3.00559C17.1565 3.09869 14.9341 4.71333 10.4894 7.94258Z"
          fill="#7B90FF"
        />
      </g>
      <g filter="url(#filter1_d_1570_1083)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6667 28.1161C15.9764 28.1161 15.4167 28.6757 15.4167 29.3661C15.4167 30.0564 15.9764 30.6161 16.6667 30.6161H23.3334C24.0238 30.6161 24.5834 30.0564 24.5834 29.3661C24.5834 28.6757 24.0238 28.1161 23.3334 28.1161H16.6667Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1570_1083"
          x="-21.4829"
          y="-21"
          width="82.9658"
          height="82.2131"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1570_1083"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1570_1083"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1570_1083"
          x="-21.3274"
          y="-8.6281"
          width="89.1667"
          height="82.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3.25583" dy="3.25583" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.482353 0 0 0 0 0.751059 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1570_1083"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1570_1083"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PageIcon;