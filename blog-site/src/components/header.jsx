import banner from '../assets/banner.png';
import { CiYoutube } from "react-icons/ci";

function Header() {
    return (
        <div className='flex justify-between items-center'>
            <img src={banner} className='w-[180px]' />
            <ul className='flex gap-4 md:gap-14'> 
                <li className='hover:font-bold cursor-pointer'>Home</li>
                <li className='hover:font-bold cursor-pointer'>About Us</li>
                <li className='hover:font-bold cursor-pointer'>Contact Us</li>
            </ul>
            <button className='bg-red-400 rounded-full text-white flex items-center p-2'>
  Subscribe <CiYoutube className='ml-3 text-[20px]'/>
</button>

        </div>


    )
}

export default Header