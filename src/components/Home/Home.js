import React from "react";
import Header from "../Header/Header";
import Hero1 from "../Hero1/Hero1";
import Hero2 from "../Hero2/Hero2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <div>
        <div className="flex justify-center pt-12 gap-20 flex-wrap">
          <Hero1 />
          <Hero2 />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <hr
          style={{
            color: "#716767",
            width: "76%",
          }}
        ></hr>
        <div className="flex flex-col">
          <h1 className="text-white text-[20px] mt-10">© 2022 Chronoly</h1>

          <div className="mt-5  flex gap-8 ">
            <div>
              <a href="https://chronoly.io/" />
              <FontAwesomeIcon
                icon={faTelegram}
                style={{ color: "white", height: "25px" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "white", height: "25px" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "white", height: "25px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
