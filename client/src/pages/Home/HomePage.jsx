import AwwMenu from "../../components/AwwMenu/AwwMenu.jsx";
import Header from "../../components/Header/Header.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import Block from "../../components/block.jsx";
import DynamicImgContain from "../../layout/Section/DynamicImgContain/DynamicImgContain.jsx";
import SwiperMenu from "../../layout/Section/SwiperMenu/SwiperMenu.jsx";
import Footer from "../../layout/Footer/Footer.jsx";
import PaymentPage from "../PaymentPage/PaymentPage.jsx";

const HomePage = () => {
  return (
    <>
      <Marquee></Marquee>
      <Header></Header>
      <AwwMenu></AwwMenu>
      <DynamicImgContain></DynamicImgContain>
      <SwiperMenu></SwiperMenu>
     
      <Block></Block>
      <Footer></Footer>
     
      
    </>
  );
};

export default HomePage;
