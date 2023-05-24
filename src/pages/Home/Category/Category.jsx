import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div>
            <SectionTitle 
            subHeading={"---From 11:00am to 10:00pm---"}
            Heading={"ORDER ONLINE"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <h3 className="text-3xl uppercase text-stone-400 -mt-24 text-center">Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image2} alt="" />
                    <h3 className="text-3xl uppercase text-stone-400 -mt-24 text-center">Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image3} alt="" />
                    <h3 className="text-3xl uppercase text-stone-400 -mt-24 text-center">Soups</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image4} alt="" />
                    <h3 className="text-3xl uppercase text-stone-400 -mt-24 text-center">desserts</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image5} alt="" />
                    <h3 className="text-3xl uppercase text-stone-400 -mt-24 text-center">Salad</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;