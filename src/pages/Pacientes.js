import Headertab from '../components/headertab/Headertab'
import Footer from '../components/footer/Footer'
import CuerpoPaciente from '../components/cuerpopaciente/CuerpoPaciente';



function Pacientes() {
  return (
    <div className="container">
      <Headertab />
      <CuerpoPaciente />
      <Footer />
     </div>
  );
}

export default Pacientes;