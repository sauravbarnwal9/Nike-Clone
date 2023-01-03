import { useEffect, useState } from "react";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Home } from "./pages/home/Home";
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
  const [loading, setLoading] = useState(false);
  let loader = document.getElementById('loader');

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     loader.style.display= 'none';
  //     setLoading(false);
  //   }, 5000)
  // },[])

  return (
    <div> 
      {!loading && <AllRoutes />}    
      {/* <Wishlist/> */}
      
    </div>
  );
}

export default App;






