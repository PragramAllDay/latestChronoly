import React, { useEffect } from "react";
import "./hero1.css";
import { useSelector, useDispatch } from "react-redux";
import { setStake } from "../../redux/reducers/Hero1State";
import { setText } from "../../redux/reducers/Hero1State";

const Hero1 = () => {
  const dispatch = useDispatch();
  const { totalstake } = useSelector((state) => state.stake.value);
  const [stakingTenure, setStakingTenure] = React.useState("0%");
  const [text, setText] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [active1, setActive1] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
  const [active4, setActive4] = React.useState(false);
  const [active5, setActive5] = React.useState(false);
  const [active6, setActive6] = React.useState(false);

  const handleTextFields = (event) => {
    setText(event.target.value);
  };

  const submitFielda = () => {
    setActive5(!active5);
    setActive6(false);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const submitFieldb = () => {
    setActive6(!active6);
    setActive5(false);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };

  useEffect(() => {
    const handlestake = () => {
      // dispatch any actions here
      dispatch(setStake({ stakingtenure: stakingTenure }));
    };
    handlestake();
  }, [dispatch, stakingTenure]);

  const btnState = () => {
    if (active === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };
  const btnState1 = () => {
    if (active1 === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };
  const btnState2 = () => {
    if (active2 === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };
  const btnState3 = () => {
    if (active3 === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };
  const btnState4 = () => {
    if (active4 === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };
  const btnState5 = () => {
    if (active5 === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };
  const btnState6 = () => {
    if (active6 === true) {
      return "btn-active";
    } else {
      return "btn-hero1";
    }
  };

  return (
    <div>
      <div className="box-hero1">
        <h5 className="h5-hero1">PARTICIPATE CRNO STAKE</h5>
        <h1 className="priceQTH">{totalstake} CRNO</h1>
        <br />
        <h6 className="h6-hero1">Total Stake</h6>
        <hr className=" xsm:w-[230px] sm:w-[350px] md:w-[400px] lg:w-[450px] " />
        <div className="pt-5 pb-5  h-[120px]   ">
          <div className="flex flex-wrap justify-center gap-2 w-[300px] md:w-[400px] lg:w-[500px]">
            <button
              className={btnState()}
              style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}
              onClick={() => {
                setStakingTenure("1%");
                setActive(!active);
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                setActive5(false);
                setActive6(false);
              }}
            >
              1 MONTH
            </button>
            <button
              className={btnState1()}
              // style={{ paddingLeft: "0.8rem", paddingRight: "0.8rem" }}
              onClick={() => {
                setStakingTenure("3.3%");
                setActive(false);
                setActive1(!active1);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                setActive5(false);
                setActive6(false);
              }}
            >
              3 MONTHS
            </button>
            <button
              className={btnState2()}
              onClick={() => {
                setStakingTenure("7.5%");
                setActive2(!active2);
                setActive(false);
                setActive1(false);
                setActive5(false);
                setActive6(false);

                setActive3(false);
                setActive4(false);
              }}
            >
              6 MONTHS
            </button>

            <button
              className={btnState3()}
              onClick={() => {
                setStakingTenure("12.6%");
                setActive3(!active3);
                setActive4(false);
                setActive1(false);
                setActive2(false);
                setActive5(false);
                setActive6(false);

                setActive4(false);
              }}
            >
              9 MONTHS
            </button>
            <button
              className={btnState4()}
              onClick={() => {
                setStakingTenure("18.6%");
                setActive4(!active4);
                setActive(false);
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive5(false);
                setActive6(false);
              }}
            >
              12 MONTHS
            </button>
          </div>
        </div>
        <br />
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <h6 className="h6-hero1">Lock Period:</h6>
            <br />
            <h6 className="h6-hero1">Re-locks on registration:</h6>
            <br />
            <h6 className="h6-hero1">Status:</h6>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-white pr-4 text-[20px]">APY</h1>
            <h1 className="text-white text-[20px]">{stakingTenure}</h1>
          </div>
        </div>
        <br />
        <div className="flex flex-col">
          <h2 className="text-white text-[12px]">BALANCE:</h2>
          <div className="flex ">
            <input
              type="text"
              onChange={handleTextFields}
              className="w-[90%]"
            />
            <button
              className={btnState5()}
              onClick={submitFielda}
              style={{ paddingRight: "25px", textAlign: "center" }}
            >
              APPROVE
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[12px]">STAKE BALANCE:</h2>
          <div className="flex ">
            <input
              type="text"
              onChange={handleTextFields}
              className="w-[90%]"
            />
            <button className={btnState6()} onClick={submitFieldb}>
              WITHDRAW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
