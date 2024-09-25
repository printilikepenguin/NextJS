// function App() {
//   const picsArray: string[] = [
//     "bkhbb.jpeg",
//     "bab.jpeg",
//     "jb.svg",
//     "Unknown.svg",
//     "Unknownj.svg",
//     "vite.svg",
//   ];

//   return (
//     <div className="w-full max-w-4xl mx-auto py-6 px-4">
//       <header className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
//         {/* More Buttons */}
//       </header>
//       <div className="grid grid-cols-3 gap-4">
//         {[...picsArray].map((photo: string, index) => (
//           <a key={index} className="group" href="#">
//             <img
//               src={photo}
//               width="400"
//               height="400"
//               alt={`Photo ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
//               style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
//             />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import bab_assets from "./assets/images/bab_asset.jpeg";
import Signupbox from "./components/auth/Signupbox";

export default function App() {
  return (
    <>
      <div className="item-middle p-4 ">
        <Signupbox />
        {/* 퍼블릭 가져오는 법 */}
        <img src="bab.jpeg" alt="bab" />
        {/* src 가져오는 법 */}
        <img src={bab_assets} alt="hachiware is eating bab" />
      </div>
    </>
  );
}
