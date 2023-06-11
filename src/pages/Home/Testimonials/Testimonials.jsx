import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-rose.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="mb-16">
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                Heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col justify-center items-center px-5 md:px-24 py-16">
                            <Rating
                                style={{
                                    maxWidth: 150,
                                    marginBottom: "48px"
                                }} value={review.rating} />
                            <img className="w-24 h-24 mb-5" src="https://e7.pngegg.com/pngimages/11/904/png-clipart-quotation-mark-symbol-computer-icons-quotation-text-silhouette-thumbnail.png" alt="" />
                            <p>{review.details}</p>
                            <h2 className="text-2xl font-bold text-yellow-500">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;