'use client'
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
        

// const Navbar = () => {
//   return (
//     <nav className="bg-purple-500 min-h-14 text-white flex justify-around items-center">
//       <div className=" flex justify-center">
//       <Image className="mix-blend-darken" alt="Image of a vector" height={50} width={50} src={"/link.gif"}/>
//         <h1 className="pt-1 font-bold text-3xl">BitLinker</h1>
//         </div>
//       <ul className="flex gap-6">
//         <Link href="/">
//           <li className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Home</li>
//         </Link>
//         <Link href={"/contact"}>
//           <li className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Contact</li>
//         </Link>
//         <Link href={"/about"}>
//           <li className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">About</li>
//         </Link>
//         <li className="">
//           <Link href={"/shorten"}>
//             <button className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Try Now</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-500 min-h-14 text-white flex justify-between items-center px-4 md:px-8">
      <div className="flex items-center">
        <Image className="mix-blend-darken" alt="Image of a vector" height={50} width={50} src={"/link.gif"} />
        <h1 className="pt-1 font-bold text-3xl">BitLinker</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <Link href="/" className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Home</Link>
        <Link href="/contact" className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Contact</Link>
        <Link href="/about" className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">About</Link>
        <Link href="/shorten">
          <button className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Try Now</button>
        </Link>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-20" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-500 flex flex-col items-center gap-6 py-4 md:hidden">
          <Link href="/" onClick={toggleMenu} className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Home</Link>
          <Link href="/contact" onClick={toggleMenu} className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Contact</Link>
          <Link href="/about" onClick={toggleMenu} className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">About</Link>
          <Link href="/shorten" onClick={toggleMenu}>
            <button className="semi-bold hover:bg-purple-600 rounded-lg px-2 py-1">Try Now</button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
