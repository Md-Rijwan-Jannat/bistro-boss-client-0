import { Helmet } from "react-helmet";
import Cover from "../shared/Cover/Cover";
import ContactImg from '../../assets/contact/banner.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaPhoneAlt } from "react-icons/fa";
import DateRange from "../../components/Dates/DateRange";


const Contact = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Contact Us</title></Helmet>
            <Cover img={ContactImg} coverTitle="contact Us" coverDetails="Would you like to taste our dish"></Cover>
            <div>
                <section>
                    <SectionTitle Heading="---Visit Us---" subHeading="OUR LOCATION"></SectionTitle>
                    <div className="md:flex justify-between gap-10 mb-10">
                        <div className="flex flex-col items-center">
                            <div className="bg-[#D1A054] w-[350px] py-6 flex flex-col items-center justify-center">
                                <FaPhoneAlt className=""></FaPhoneAlt>
                            </div>
                            <div className="text-center bg-base-200 w-11/12 h-[200px] space-y-5 mb-10 py-10 ">
                                <h2 className="text-3xl">PHONE</h2>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#D1A054] w-[350px] py-6 flex flex-col items-center justify-center">
                                <FaPhoneAlt className=""></FaPhoneAlt>
                            </div>
                            <div className="text-center bg-base-200 w-11/12 h-[200px] space-y-5 mb-10 py-10">
                                <h2 className="text-3xl">ADDRESS</h2>
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#D1A054] w-[350px] py-6 flex flex-col items-center justify-center">
                                <FaPhoneAlt className=""></FaPhoneAlt>
                            </div>
                            <div className="text-center bg-base-200 w-11/12 h-[200px] space-y-5 mb-10 py-10">
                                <h2 className="text-3xl">WORKING HOURS</h2>
                                <p>+38 (012) 34 56 789</p>
                                <p>Mon - Fri: 08:00 - 22:00</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* date range */}
            <DateRange></DateRange>
        </div>
    );
};

export default Contact;