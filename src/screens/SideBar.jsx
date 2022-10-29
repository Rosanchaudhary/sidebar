import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;

    if (width < 600) {
      setOpen(false);
    }
    if (width >= 601) {
      setOpen(true);
    }
  };
  const Menus = [
    { title: "Dashboard", src: "trend" },
    { title: "Staff Management", src: "management" },
    { title: "Emplyee Management", src: "management" },
    { title: "Schedule ", src: "calandertwo" },
    { title: "Incidents", src: "incident" },
    { title: "Timesheet", src: "timesheet" },
    { title: "Reports", src: "reports" },
    { title: "Organization", src: "organization" },
    { title: "Invoicing ", src: "invoicing" },
    { title: "Financial", src: "financial" },
  ];

  return (
    <div
      className={` ${
        open ? "w-72  pt-8 m-10" : "w-fit "
      } bg-white h-max pt-2 relative duration-300 m-2 rounded-lg shadow-2xl`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className={`${
            open ? "w-20 h-20 rounded-full mt-8" : "w-7 h-7 rounded-full"
          }`}
          src="https://s3-alpha-sig.figma.com/img/dc0b/3f58/6128f4024f55b9018ea4a77fcac30c1a?Expires=1667779200&Signature=dCai7wx3jcSa4ZK3xn859AighauSZ9enfTxySPpr9v2ZWPT9pctmV8MuECE6xjsogHGHjLLIEHc32BqhympWksN-Kv795J31l0PDen2mHnSKRIz33IKhz79ntOULmP3llxj4wVmEoK10znghmT~t6OHFQg--tMFRv9NpcOFSY3lEUpVgE38sDX8-tSG1sOl8nR45CAOWX6d5kASSUdS1usdpzq9fjEasJg5tOOghW4b9k70dnmyVA3jgyQ0f2jtzf-M0rPHSWabm86e4ARjx15V6mt~UTPnA0SZtXA~9a-OvqeNc54k4xCZ2ac2ViNfne2~jNpzAiK2C~d8Yb27kKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="Rounded avatar"
        ></img>
        <h1 className={`${open ? "font-semibold text-xl" : "hidden"}`}>
          Guardhosue
        </h1>
      </div>

      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            onClick={() => {
              setSelected(index);
            }}
            key={index}
            style={{
              backgroundColor: selected === index ? "#F2385F" : "#fff",
              color: selected === index ? "#fff" : "#2A2D43",
              fontSize:selected === index ? "12px" : "10px",
              fontWeight:selected === index ? "700" : "400",
            }}
            className={`flex rounded-md p-2 mt-2 cursor-pointer text-sm items-center gap-x-4 
           `}
          >
            <img src={`./src/assets/${Menu.src}.png`} style={{tintColor:"black"}}/>
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-link`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
