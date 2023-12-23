import React from "react";
import NavBar from "./NavBar";

interface BannerProps {

}

const Banner: React.FC<BannerProps> = ({ }: BannerProps) => {

  return (
    <div>
      <NavBar />
      <h1>Banner!</h1>
    </div>
  );
}

export default Banner;