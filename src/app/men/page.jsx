// import React from 'react';

// const Men = () => {
//   return (
//     <div>
//       <h2>Men's Clothing</h2>
//       <p>Explore our collection of men's fashion.</p>
//     </div>
//   );
// };

// export default Men;



import React from "react";

const Men = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h2 className="text-4xl font-bold text-white">Men's Clothing</h2>
      <p className="text-lg text-white mt-4">Explore our collection of men's fashion.</p>
      
      {/* Update Message */}
      <div className="bg-yellow-100 text-yellow-800 px-6 py-3 mt-6 rounded-lg shadow-md animate-bounce">
        🚧 This section is under construction and will be updated soon! Stay tuned.
      </div>
    </div>
  );
};

export default Men;
