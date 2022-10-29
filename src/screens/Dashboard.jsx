import React, { useState, useEffect } from "react";
import "../App.css"

const Dashboard = () => {
  const [open, setOpen] = useState(true);

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
  return (
    <div style={{ height: "100%" }} class="flex flex-col w-screen ">
      <div className=" flex  justify-between p-7">
        <div>
          <h1 className={`${open ? "text-5xl font-semibold font-link" : ""}`}>
            Welcome Bellrock!
          </h1>
          <h1 className="text-sm font-semibold ">Here is your dashboard </h1>
        </div>
        <div className="flex">
          <img class="w-5 h-5 mr-3" src="./src/assets/notification.png" />
          <img
            class="w-10 h-10 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/dc0b/3f58/6128f4024f55b9018ea4a77fcac30c1a?Expires=1667779200&Signature=dCai7wx3jcSa4ZK3xn859AighauSZ9enfTxySPpr9v2ZWPT9pctmV8MuECE6xjsogHGHjLLIEHc32BqhympWksN-Kv795J31l0PDen2mHnSKRIz33IKhz79ntOULmP3llxj4wVmEoK10znghmT~t6OHFQg--tMFRv9NpcOFSY3lEUpVgE38sDX8-tSG1sOl8nR45CAOWX6d5kASSUdS1usdpzq9fjEasJg5tOOghW4b9k70dnmyVA3jgyQ0f2jtzf-M0rPHSWabm86e4ARjx15V6mt~UTPnA0SZtXA~9a-OvqeNc54k4xCZ2ac2ViNfne2~jNpzAiK2C~d8Yb27kKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Rounded avatar"
          ></img>
        </div>
      </div>
      <div
        style={{ height: "470px" }}
        className="rounded-lg bg-white p-5 pt-8 m-1 flex flex-col justify-center items-center shadow-2xl"
      >
        <img class="w-100 h-100 " src="./src/assets/central_image.png" />
        <h1 class="font-semibold text-xl">Coming soon</h1>
        <h1>We’re making some changes</h1>
      </div>
    </div>
  );
};

export default Dashboard;
