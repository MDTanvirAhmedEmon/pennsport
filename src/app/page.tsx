import Image from 'next/image';
import logo from '../assets/logo.svg'

const Home = () => {

  return (
    <div className="background-gradient h-[90vh]">
      <div className=' container mx-auto h-full  flex text-white font-bold items-center '>
        <div className=' w-1/2'>
          <h1 className=' text-8xl text-center  bg-gradient-to-r from-white via-[#ececec] to-[#636363] bg-clip-text text-transparent'>Science-Based</h1>
          <h1 className=' text-8xl text-center bg-gradient-to-r from-white via-[#ececec] to-[#161616] bg-clip-text text-transparent pb-10'>Detailing</h1>
        </div>
        <div className=' w-1/2 flex justify-center items-center'>
          <Image src={logo} className='w-[600px]' width={500} height={500} alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default Home;