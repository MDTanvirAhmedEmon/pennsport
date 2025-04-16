import Image from 'next/image';
import logo from '../assets/logo.svg'
import CardSection from '@/components/Home/CardSection';
import Certification from '@/components/Home/Certification';

const Home = () => {

  return (
    <>
      <div className="background-gradient h-[90vh]">
        <div className=' container mx-auto h-full  flex flex-col md:flex-row justify-center text-white font-bold items-center '>
          <div className=' md:w-1/2'>
            <h1 className='text-5xl lg:text-7xl 2xl:text-8xl text-center  bg-gradient-to-r from-white via-[#ececec] to-[#636363] bg-clip-text text-transparent'>Science-Based</h1>
            <h1 className='text-5xl lg:text-7xl 2xl:text-8xl text-center bg-gradient-to-r from-white via-[#ececec] to-[#161616] bg-clip-text text-transparent pb-10'>Detailing</h1>
          </div>
          <div className=' md:w-1/2 flex justify-center items-center'>
            <Image src={logo} className=' w-[350px] lg:w-[500px] 2xl:w-[600px] mt-6 md:mt-0' width={500} height={500} alt='logo' />
          </div>
        </div>
      </div>

      <div className=' md:container md:mx-auto px-3 md:px-0'>
        <CardSection></CardSection>
      </div>

      <div className=' md:container md:mx-auto px-3 md:px-0'>
        <h2 className=' text-2xl md:text-4xl text-center font-bold text-[#333333]'>Trusted and Certified</h2>
        {/* <CardSection></CardSection> */}
        <Certification></Certification>
      </div>

    </>
  );
};

export default Home;