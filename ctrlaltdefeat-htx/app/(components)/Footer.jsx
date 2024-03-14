import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-2">
      <div className="flex justify-between p-4 items-center space-x-4">
        <p className="text-white">© 2024 Proekt HTX. All rights reserved.</p>
        <div className='space-x-4 text-white'>
          <Link href="#Link1">Link 1</Link>
          <Link href="#Link2">Link 2</Link>
          <Link href="#Link3">Link 3</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
