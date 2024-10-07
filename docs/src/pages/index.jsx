import '../../app/globals.css';
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Importimg from './components/importimg';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
      setIsOpen(!isOpen); 
    }

    return (
        <> 
            <Header onClick={handleClick} />
            {/* <div className={`${isOpen ? "block" : "hidden"} `}> */}
            <div 
                className={`absolute z-50 fixed top-15 left-0 h-full bg-gray-800 text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ width: '250px' }}
            >
                <h1 className='absolute top-20 left-5 z-50 text-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae tenetur enim, quaerat, et aliquam, ducimus at nulla unde eos rem voluptate laborum quae ipsum aperiam deleniti dolore molestiae sunt!
                </h1>
            </div>
            <div className='relative container top-0 mb-20 border-dotted border-orange-500 border-y-2 min-w-full truncate shadow-md shadow-gray-500/50 hover:border-purple-600 hover:border-y-4' style={{top:'10vh',height:'80vh'}}>
                <div className='flex justify-start truncate' style={{ width: '70%', height: '80vh' }}>
                    <Importimg className='object-cover' />
                </div>
            </div>
            <Footer />
        </>
    );
}


