import { Circles } from "react-loader-spinner";


const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Circles
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    );
};

export default Loader;