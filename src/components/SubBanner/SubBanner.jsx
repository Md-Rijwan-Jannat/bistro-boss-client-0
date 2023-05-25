import banner from '../../assets/home/chef-service.jpg';
const SubBanner = ({title, text}) => {
    return (
        <div className='mb-16'>
            <div className='relative flex flex-col justify-center items-center w-full'>
                <div className='w-full'>
                    <img className='h-[300px] md:h-[570px] w-full' src={banner} alt="" />
                </div>
                <div className='absolute top-11 md:top-28 text-center text-black bg-white opacity-50 rounded-lg p-5 md:p-28 w-11/12 md:w-11/12 '>
                    <h3 className='text-xl md:text-3xl uppercase'>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;