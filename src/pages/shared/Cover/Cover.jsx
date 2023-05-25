import { Parallax } from 'react-parallax';

const Cover = ({ img, coverTitle, coverDetails }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            className='mb-20'
        >
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-10/12 text-center text-neutral-content">
                    <div className="w-11/12 bg-black bg-opacity-40 p-28 mt-20">
                        <h1 className="mb-5 text-6xl font-bold uppercase">{coverTitle}</h1>
                        <p className="mb-5 uppercase">{coverDetails}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;