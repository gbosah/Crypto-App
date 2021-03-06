import React from 'react';

function Navbar({handleChange}) {
    return (
        <div className='w- flex flex-col bg-gray-700 text-white'>
            <div className='flex justify-center mb-4 '>
            <input type='text' placeholder='search...' onChange={handleChange} className='mt-2 border-2 rounded-xl px-2 text-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'/>
            </div>
            <div className='w-full'>
            <ul className='flex justify-around font-extrabold text-lg'>
                <li>Name</li>
                <li>Price</li>
                <li>24h%</li>
                <li>Market Cap</li>
                <li>Circulating Supply</li>
            </ul>
            </div>  
        </div>
    );
}

export default Navbar;