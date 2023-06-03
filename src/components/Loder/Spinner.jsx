import { MoonLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div>
            <div
                className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
            >
                <MoonLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Spinner;