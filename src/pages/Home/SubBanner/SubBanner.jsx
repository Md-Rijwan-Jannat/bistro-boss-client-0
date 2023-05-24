import banner from '../../../assets/home/chef-service.jpg';
const SubBanner = () => {
    return (
        <div className='mb-16'>
            <div className='relative flex flex-col justify-center items-center w-full'>
                <div className='w-full'>
                    <img className='h-[300px] md:h-[570px] w-full' src={banner} alt="" />
                </div>
                <div className='absolute top-11 md:top-28 text-center bg-white rounded-lg p-5 md:p-28 text-gray-500 w-11/12 md:w-11/12 '>
                    <h3 className='text-xl md:text-3xl uppercase'>Bistro Boss</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;