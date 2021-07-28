import Headertab from '../components/headertab/Headertab'
import Footer from '../components/footer/Footer'
import CuerpoVacunas from '../components/cuerpovacunas/Cuerpovacunas';


function Vacunas() {
  return (
    <div className="container">
      <Headertab />
      <CuerpoVacunas />
      <Footer />
     </div>
  );
}

export default Vacunas;