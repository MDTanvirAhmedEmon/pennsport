import gtec from '../../assets/home/gtechniq.png'
import gyeon from '../../assets/home/gyeon.png'
import cqpro from '../../assets/home/cqpro.png'
import Image from 'next/image';

const Certification = () => {
    return (
        <div className=' grid md:grid-cols-3 gap-6 py-10 md:py-20'>
            <Image src={gtec} alt='img' width={500} height={500} className=' w-full' />
            <Image src={gyeon} alt='img' width={500} height={500} className=' w-full' />
            <Image src={cqpro} alt='img' width={500} height={500} className=' w-full' />
        </div>
    );
};

export default Certification;