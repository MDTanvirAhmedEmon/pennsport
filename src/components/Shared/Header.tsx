import Image from 'next/image';
import logo from '../../assets/logo.svg'
import Link from 'next/link';
const Header = () => {
    return (
        <header className=' h-20 flex items-center -mb-20 z-50'>
            <div className=' container mx-auto flex justify-between items-center'>
                <Image
                    src={logo}
                    alt="Logo"
                    width={300}
                    height={300}
                    className=" w-40"
                />
                <div className=' flex items-center gap-10 text-xl'>
                    <Link className=' text-white' href={`/`}>Home</Link>
                    <Link className=' text-white' href={`/service`}>Service</Link>
                    <Link className=' text-white' href={`/service`}>About Us</Link>
                    <Link className=' text-white' href={`/service`}>Contact Us</Link>
                    <Link className=' text-white' href={`/service`}>Pages</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;