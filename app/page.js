import Baners from "./Home/componentes/Baners";
import Banner1 from "./Home/componentes/Banner1";
import BestSellers from "./Home/componentes/BestSellers";
import Copon from "./Home/componentes/Copon";
import Photos from "./Home/componentes/Photos";
import Productbycategory from "./Home/componentes/Productbycategory";

export default function Home() {
  return (
    <div>
      <Baners />
      <BestSellers />
      <Banner1 />
      <Productbycategory category="beauty" />
      <Copon />
      <Productbycategory category="groceries" />
      <Photos />
      
    </div>
  );
}
