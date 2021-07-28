import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CuerpoInicio from '../components/cuerpoinicio/Cuerpoinicio';


function Inicio() {
  return (
    <div className="container">
      <Header />
        <CuerpoInicio />
     <Footer />
     </div>
  );
}

export default Inicio;