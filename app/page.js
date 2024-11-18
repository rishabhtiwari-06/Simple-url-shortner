// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-purple-100">
//       <section className="grid grid-cols-2 h-[50vh]">
//         <div className=" flex flex-col gap-4 justify-center items-center">
//           <p className="text-3xl font-bold">
//             The best URL Shortner in Universe
//           </p>
//           <p className="px-44">
//             We are the most Straight Forward URL Shortner. Most of Url shortner
//             will track you or ask for your details but We Respect Your privacy
//           </p>
//           <div className="flex justify-start w-1/3">
//             <Link href="/shorten" className="w-full">
//               {" "}
//               {/* Add the "w-full" class here */}
//               <button className="bg-purple-600 hover:bg-purple-700 w-full rounded-lg shadow-lg px-2 py-2 my-3 font-bold text-white">
//                 Try Now
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className=" flex justify-start relative">
//           <Image
//             className="mix-blend-darken"
//             alt="Image of a vector"
//             fill={true}
//             src={"/vector.jpg"}
//           />
//         </div>
//       </section>
//       <hr className="" />
//       <section className="">
//         <div className="grid grid-cols-2 h-[41vh]">
//           <div className="flex justify-center items-center">
//             <Image
//               className="mix-blend-darken"
//               alt="Image of a vector"
//               width={240}
//               height={240}
//               src={"/diplomacy.gif"}
//             />
//             <Image
//               className="mix-blend-darken"
//               alt="Image of a vector"
//               width={240}
//               height={240}
//               src={"/user-security.gif"}
//             />
//           </div>
//           <div className="flex flex-col gap-3 items-center justify-center">
//             <h1 className="font-bold text-3xl">
//               Shorten Links, Skip the Login!
//             </h1>
//             <p className=" pr-10">
//               Feel secure 😊 – your privacy is our top priority! We go the extra
//               mile to protect your data, so you can browse freely, knowing we
//               respect your privacy as much as you do
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50vh] p-4">
        <div className="flex flex-col gap-4 justify-center items-center text-center md:text-left px-4">
          <p className="text-2xl md:text-3xl font-bold">
            The Best URL Shortener 
          </p>
          <p className="px-4 md:px-12">
            We are the most straightforward URL shortener. Most URL shorteners
            will track you or ask for your details, but we respect your privacy.
          </p>
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <Link href="/shorten" className="w-full">
              <button className="bg-purple-600 hover:bg-purple-700 w-full rounded-lg shadow-lg px-2 py-2 my-3 font-bold text-white">
                Try Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-full md:h-full">
            <Image
              className="mix-blend-darken object-contain"
              alt="Image of a vector"
              fill={true}
              src="/vector.jpg"
            />
          </div>
        </div>
      </section>
      <hr className="border-gray-300 my-1" />
      <section className="px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[38vh] gap-4">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Image
              className="mix-blend-darken"
              alt="Image of a vector"
              width={140}
              height={140}
              src="/diplomacy.gif"
            />
            <Image
              className="mix-blend-darken"
              alt="Image of a vector"
              width={140}
              height={140}
              src="/user-security.gif"
            />
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start justify-center px-4 text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-3xl">
              Shorten Links, Skip the Login!
            </h1>
            <p className="px-4 md:px-0">
              Feel secure 😊 – your privacy is our top priority! We go the extra
              mile to protect your data, so you can browse freely, knowing we
              respect your privacy as much as you do.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
