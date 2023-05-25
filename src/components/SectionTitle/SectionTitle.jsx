
const SectionTitle = ({ subHeading, Heading }) => {
    return (
        <div className="flex flex-col justify-center text-center items-center  mb-12 mt-16">
            <p className="text-yellow-500 mb-5">{subHeading}</p>
            <h2 className=" text-3xl uppercase border-t-4 border-b-4 w-1/3 py-5">{Heading}</h2>
        </div>
    );
};

export default SectionTitle;