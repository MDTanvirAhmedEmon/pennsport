import Image from 'next/image';
import logo from '../../assets/logo.svg'
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
const Header = () => {
    return (
        <header className=' h-16 md:h-20 flex items-center -mb-16 md:-mb-20 z-50'>
            <div className=' px-3 w-full md:container md:mx-auto flex justify-between items-center'>
                <Image
                    src={logo}
                    alt="Logo"
                    width={300}
                    height={300}
                    className=" w-32 md:w-40"
                />
                <div className='md:hidden'>
                    <RxHamburgerMenu className=' w-7 h-7 text-white' />
                </div>
                <div className='hidden md:block'>
                    <div className=' flex items-center gap-10 text-xl '>
                        <Link className=' text-white' href={`/`}>Home</Link>
                        <Link className=' text-white' href={`/service`}>Service</Link>
                        <Link className=' text-white' href={`/service`}>About Us</Link>
                        <Link className=' text-white' href={`/service`}>Contact Us</Link>
                        <Link className=' text-white' href={`/service`}>Pages</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;