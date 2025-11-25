import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import demoScreenshot from "../../images/tablet.png";



const AppPreview = () => {
  return <div className="flex flex-col overflow-hidden">
    <ContainerScroll titleComponent={<>
        {/*<h1 className="text-4xl font-semibold text-foreground">
          SimCare
          <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-teal-500">
            3D Medische Simulatie
        </span>
        </h1>*/}
        </>}>
      <img
        src={demoScreenshot}
        alt="App Preview - Sim Care image"
        className="mx-auto rounded-2xl w-full h-full object-cover object-top shadow-2xl"
      />
    </ContainerScroll>
    </div>;
};
export default AppPreview;
