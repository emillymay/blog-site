import { useState } from 'react';
import banner from './../assets/banner.png';
import { CiSearch } from "react-icons/ci";

function Search() {
    const tags = [
        {
            id: 1,
            name: 'Dark Fantasy',
        },
        {
            id: 2,
            name: 'Urban Fantasy',
        },
        {
            id: 3,
            name: 'Sword & Sorcery',
        },
        {
            id: 4,
            name: 'Magical Realism',
        },
        {
            id: 5,
            name: 'Steampunk',
        }
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <div className='relative text-center mt-8 flex-col px-[70px] md:px-[150px]'>
            <img src={banner} className='rounded-2xl w-full' style={{ height: '75%' }} />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
                <h1 className='text-4xl md:text-5xl font-bold-libre'>A Literary Escape</h1>
                <h2 className='text-2xl md:text-3xl mt-2 font-libre'>A (Mostly) Fantasy Book Review Blog</h2>
            </div>
            <div className='absolute top-[calc(75%+40px)] left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2'>
                <div className='bg-white shadow-lg p-3 rounded-lg flex items-center'>
                    <CiSearch className='text-[20px] text-gray-400 mr-2'/>
                    <input type='text' placeholder="Search" className='outline-none w-full pl-2' />
                </div>
                <div className='mt-4'>
                    <ul className='flex justify-center gap-4'>
                        {tags.map((item, index) => (
                            <li
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className={`${index === activeIndex ? 'bg-red-500 text-white' : ''} p-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Search;