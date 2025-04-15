import Image from 'next/image';
import logo from '../../assets/logo.svg';
import Link from 'next/link';
import { LuMailOpen } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { PiInstagramLogo } from 'react-icons/pi';

const Footer = () => {
    return (
        <div className='bg-[#040414]'>
            <div className='container mx-auto px-6 py-10'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Logo Section */}
                    <div className='mb-6 md:mb-0'>
                        <Image src={logo} width={500} height={500} className='w-[300px]' alt='logo' />
                    </div>

                    {/* Contact Info */}
                    <div className='text-white'>
                        <h2 className='text-xl font-semibold mb-4'>Contact Info</h2>
                        <p className='flex items-center gap-1 mb-4'><LuMailOpen className=' w-5 h-5' /> Email: <a href='mailto:Neal@RennsportDetailers.com' className='text-[#F9F9F9]'>Neal@RennsportDetailers.com</a></p>
                        <p className='mb-2 flex items-center gap-1'><FiPhone className=' w-5 h-5' /> Phone: <a href='tel:+13170992237' className='text-[#F9F9F9]'>317-093-2237</a></p>
                    </div>

                    {/* Useful Links */}
                    <div className='text-white'>
                        <h2 className='text-xl font-semibold mb-4'>Useful Links</h2>
                        <div className='flex flex-col gap-4'>
                            <Link href='/about' className='text-[#F9F9F9]'>About Us</Link>
                            <Link href='/contact' className='text-[#F9F9F9]'>Contact Us</Link>
                            <Link href='/privacy-policy' className='text-[#F9F9F9]'>Privacy Policy</Link>
                            <Link href='/terms' className='text-[#F9F9F9]'>Terms & Conditions</Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className='text-white'>
                        <h2 className='text-xl font-semibold mb-4'>Social Media Links</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-1'>
                                <FaFacebook className=' w-5 h-5' /> <Link href='https://fLinkcebook.com' className='text-[#F9F9F9]'>Facebook</Link>
                            </div>
                            <div className='flex items-center gap-1'>
                                <PiInstagramLogo className=' w-5 h-5' /> <Link href='https://instLinkgram.com' className='text-[#F9F9F9]'>Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='text-white border-t border-[#7B7F8D] py-5'>
                <p className='text-center text-[#7B7F8D]'>© Copyright 2024 Design By Sufiya Akter. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
