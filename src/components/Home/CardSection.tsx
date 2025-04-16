import successBg from './../../assets/home/success-bg.png';

const CardSection: React.FC = () => {
    const imageStyle = {
        backgroundImage: `URL(${successBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
    };
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 py-14 xl:py-20">
            <div
                className="relative px-6 py-28 xl:py-32 rounded-2xl shadow-[5px_20px_15px_0px_rgba(0,0,0,0.1)] bg-[#f4f4f8]"
                style={imageStyle}
            >
                <p className=" text-xl xl:text-2xl absolute top-4 left-5">Successfully completed car</p>
                <p className=" text-xl xl:text-2xl absolute top-12 left-5">detailing projects</p>
                <h2 className=" text-5xl xl:text-6xl font-bold  absolute bottom-5 xl:bottom-7 right-4 ">300+</h2>
            </div>
            <div
                className="relative px-6 py-28 xl:py-32 rounded-2xl shadow-[5px_20px_15px_0px_rgba(0,0,0,0.1)] bg-[#f4f4f8]"
                style={{ backgroundImage: `url(${successBg})` }}
            >
                <p className=" text-xl xl:text-2xl absolute top-4 left-5">Experience we have gained</p>
                <p className=" text-xl xl:text-2xl absolute top-12 left-5">by working worldwide</p>
                <h2 className=" text-5xl xl:text-6xl font-bold  absolute bottom-5 xl:bottom-7 right-4 ">12Y+</h2>
            </div>
            <div
                className="relative px-6 py-28 xl:py-32 rounded-2xl shadow-[5px_20px_15px_0px_rgba(0,0,0,0.1)] bg-[#f4f4f8]"
                style={{ backgroundImage: `url(${successBg})` }}
            >
                <p className=" text-xl xl:text-2xl absolute top-4 left-5">Total revenue that generated</p>
                <p className=" text-xl xl:text-2xl absolute top-12 left-5">from last month</p>
                <h2 className=" text-5xl xl:text-6xl font-bold  absolute bottom-5 xl:bottom-7 right-4 ">45B</h2>
            </div>

            {/* Second Card */}
            {/* <div className="w-1/3 px-6 py-20 rounded-2xl shadow-[5px_20px_15px_0px_rgba(0,0,0,0.1)] bg-[#f4f4f8]">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">12Y+</h2>
                    <p className="text-lg">Experience we have gained by working worldwide</p>
                </div>
            </div>

            {/* Third Card */}
            {/* <div className="w-1/3 px-6 py-20 rounded-2xl shadow-[5px_20px_15px_0px_rgba(0,0,0,0.1)] bg-[#f4f4f8]">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">45B</h2>
                    <p className="text-lg">Total revenue that generated from last month</p>
                </div>
            </div>  */}
        </div>
    );
};

export default CardSection;
