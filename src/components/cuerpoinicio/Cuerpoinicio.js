import './Cuerpoinicio.css'
import franja from '../../utils/imagenes/franja.png'
import oms from '../../utils/imagenes/oms.png'

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
  
  function CuerpoInicio() {
    return (
      <div className="container">
       <section id="todoini">
            <section id="cuerpo">
              <div id="banner">
                  <div id="parrafobanner">
                  <h2>Unidos ganaremos la batalla</h2>
                  <h1>Covid-19</h1>
                  <Link to="/login">
                  <button id="ingreso"><p>Iniciar sesión <i className="far fa-user"></i></p></button>
                  </Link>
                  </div>
              </div>
                <div id="franj">
              <img src={franja} className="franja" alt="franja" />
              </div>
          </section>
            <section id="caution">
                <div id="transparencia">
                    <div id="sint">
                        <div id="sintomas">
                          <i className="fas fa-arrow-circle-right fa-3x"></i><h2>Signos compatibles con Covid-19</h2>
                        </div> 
                          <ul id="sintomas2">
                            <li> <i className="fas fa-check"></i>Fiebre de 37.5° o más.</li>
                            <li> <i className="fas fa-check"></i> Dolor de garganta.</li>
                            <li><i className="fas fa-check"></i>Tos y dificultad respiratoria.</li>
                            <li> <i className="fas fa-check"></i>Dolor de cabeza.</li>
                            <li> <i className="fas fa-check"></i>Vómito y diarrea.</li>
                          </ul>
                      </div>
                  <div id="sintomas3"> 
                      <div id="qhacer" >
                        <i className="fas fa-question-circle"></i><h2>¿Que hacer?</h2>
                      </div> 
                      <div id="qhacerparra">
                        <p>Si diagnósticas más de dos síntomas,  aisla de inmediato al paciente y procede a realizar
                        cuanto antes el hisopado para confirmar o descartar COVID-19.</p>
                        <img src={oms} className="oms" alt="logooms" /><br />
                        <a href="https://openwho.org/courses/introduction-to-ncov">Curso online nuevo coronavirus OMS</a><br></br>
                      </div>                    
                  </div>
                </div>
          </section>
          <section id="macordeon">
            <div id="menu1">
              <a href="#menu1">Enfermedad por coronavirus (COVID-19): Accesibilidad y asignación de las vacunas</a>
              <p>La OMS considera que todas las personas, en todas partes, que puedan beneficiarse de recibir vacunas
                  seguras y eficaces contra la COVID-19 deben tener acceso a ellas lo antes posible, empezando por aquellas
                  con un mayor riesgo de enfermedad grave o muerte.  
                  El Grupo de Expertos de la OMS de Asesoramiento Estratégico sobre inmunización (SAGE) ha difundido dos
                  documentos clave de orientación para la asignación de vacunas contra la COVID-19 y la priorización de grupos de población: 
                  El marco de valores para la distribución y la priorización de las vacunas contra la COVID-19 ofrece orientación de alto 
                  nivel de alcance mundial sobre los valores y las consideraciones de carácter ético concernientes a la distribución de las
                    vacunas contra la COVID-19 entre los países, así como orientación de ámbito nacional sobre la priorización de grupos de
                    población de cara a la vacunación en los países mientras el suministro sea limitado.  
                  La Hoja de ruta del SAGE de la OMS para el establecimiento de prioridades en el uso de vacunas contra la COVID-19 sugiere estrategias
                  de salud pública y grupos destinatarios prioritarios para niveles de disponibilidad de vacunas y entornos epidemiológicos diferentes.
                    Los ejemplos de grupos destinatarios prioritarios incluyen a los profesionales sanitarios y asistentes sociales de primera línea expuestos
                    a altos riesgos de infección, las personas mayores, y toda persona que corra alto riesgo de defunción por trastornos preexistentes, por ejemplo, 
                    cardiopatía coronaria y diabetes.  </p>
            </div>
            <div id="menu2">
              <a href="#menu2">Seguridad de las vacunas contra el COVID-19 | CDC</a>
              <p>Las vacunas contra el COVID-19 son seguras y efectivas.
                  Las vacunas contra el COVID-19 fueron evaluadas en varios miles de participantes de ensayos clínicos. 
                  Las vacunas cumplieron los rigurosos estándares científicos de seguridad, efectividad y calidad de 
                  fabricación de la Administración de Alimentos y Medicamentos (FDA) necesarios para respaldar la 
                  autorización de uso de emergencia (EUA, por sus siglas en inglés).<br></br>Los resultados son alentadores
                  Los resultados de las iniciativas de seguimiento de la seguridad de las vacunas son alentadores.​​​​​​​
                  Algunas personas no sufren efectos secundarios. Otras notificaron efectos secundarios comunes posteriores
                  a la vacunación contra el COVID-19, como hinchazón, enrojecimiento y dolor en el lugar de la inyección,fiebre,
                  dolor de cabeza,cansancio,dolor muscular,escalofríos,náuseas,Los problemas graves de seguridad son poco frecuentes
                  Hasta la fecha, los sistemas implementados para monitorear la seguridad de las vacunas han detectado solo dos tipos
                    de problemas de salud graves después de la vacunación, ambos poco frecuentes. Estos son la anafilaxia y el síndrome
                    de trombosis-trombocitopenia (TTS, por sus siglas en inglés) después de recibir la vacuna contra el COVID-19 de JJ/Janssen.</p>
            </div>
            <div id="menu3">
              <a href="#menu3">Luego de la vacunacion ¿que sintomas se pueden presentar?</a>
              <p>Como todas las vacunas, estas pueden producir reacciones adversas leves como
                  fiebre o dolor en el lugar de la inyección o, con mucha menos frecuencia, 
                  otras más graves como anafilaxia (reacción alérgica grave).
                  El dolor en el sitio de la inyección es una reacción muy frecuente en las
                  primeras 24-48 horas tras la vacunación. Si amerita, se puede tomar algún 
                  antiinflamatorio oral (ibuprofeno paracetamol, etc.) y aplicar frío local.
                  ¿Cuáles son los posibles efectos adversos que puedo presentar?
                  Los efectos adversos son similares entre las vacunas, con frecuencia de aparición
                    variable. Entre las más frecuentes se destacan:  

                          Reacciones locales (dolor, eritema, edema, endurecimiento)
                          Prurito
                          Cefalea
                          Fatiga
                          Mialgias
                          Náuseas 
                          Diarrea
                          Artralgia (dolor en las articulaciones)
                          Tos
                          Escalofríos
                          Disminución de apetito
                          Vómito / náuseas
                          Exantema (erupción cutánea)
                          Reacción alérgica
                          Fiebre
                          En caso de presentarse, los efectos adversos son generalmente de intensidad leve o moderada
                          y desaparecen unos días después de la vacunación. Las personas mayores presentan con menor
                            frecuencia efectos adversos.

                          ¿Qué debo hacer frente a algún efecto adverso?
                          Reportarlo directamente a tu prestador de salud o en el trámite en línea. También podés
                          hacerlo a través de la App Coronavirus (disponible para Android e Ios). La información que 
                          brindes en la aplicación se enviará al prestador de salud y él notificará al Ministerio de 
                            Salud Pública.  </p>
            </div>
            <div id="menu4">
              <a href="#menu4"> Lineamiento técnico para la gestión de residuos de vacunación- Covid 19.</a>
              <p>A continuación, se relacionan los residuos que se generan durante las jornadas de
                  vacunación contra COVID-19:<br></br>
                  • Residuos Cortopunzantes con Riesgo Biológico o Infeccioso: Agujas, viales
                  de vacunación, ya sea en presentación de jeringas auto descartables o
                  frascos usados que contengan restos de la vacuna.<br></br>
                  • Residuos Biosanitarios con riesgo biológico: Gasas, apósitos, aplicadores,
                  algodones, guantes, tapabocas, entre otros.<br></br>
                  • Residuos peligrosos de bajo riesgo: Envases de los diluyentes<br></br>
                  • Residuos Reciclables: Cajas de cartón y plegadizas, empaques de la jeringa y
                  el capuchón de la aguja, entre otros, siempre y cuando no se encuentren
                  contaminados con fluidos corporales de alto riesgo.  <br></br>           
                    principalmente se utilizan para reconstitución o dilución de las vacunas, lo cual
                    facilita la administración de las mismas ; entre los principales diluyentes de las
                    vacunas para prevención del Covid-19, se encuentra el agua estéril para inyección
                    y el cloruro de sodio al 0,9% el cual se encuentra constituido por 0,9 gramos(g) de
                    cloruro de sodio (NaCl) por 100 mililitros (mL) de agua, también conocido como
                    “solución salina normal” o “suero fisiológico”; tanto el agua estéril para inyección
                    como la solución salina en mención se consideran medicamentos, teniendo en
                    cuenta su uso la solución de cloruro de sodio se utiliza para prevención
                    (ej.hipovolemia), tratamiento ( ej. Estados de deshidratación), entre otros y el agua
                    destilada es utilizada para irrigación de cavidades y áreas quirúrgicas etc. </p>
            </div>
            <div id="menu5">
              <a href="#menu5">Recomendaciones generales al tener contacto con personas infectadas</a>
              <p>Los pacientes deben permanecer aislados en una habitación individual con buena ventilación al exterior 
                y preferentemente con acceso a un baño de uso exclusivo por esta persona (siempre que sea posible).
                  En caso de no ser posible, se recomienda que mantenga una distancia de al menos 1 a 2 metros y que tanto el
                  enfermo como el conviviente usen barbijo quirúrgico, especialmente si no se alcanza la distancia mínima.
                  Las personas sanas y las enfermas no solamente deben intentar usar baños separados sino también diferentes toallas.
                  Las superficies del baño y del inodoro deben limpiarse y desinfectarse al menos una vez al día.
                  Hay que limpiar y desinfectar diariamente las superficies que se tocan con frecuencia, como las mesitas de noche,
                  sillas y otros muebles de dormitorio con un desinfectante de superficie o agua con lavandina al 1% (10cc de lavandina por litro de agua).
                  Colocar la ropa del enfermo en una bolsa separada y manipularla con guantes. Hay que lavar la ropa, sábanas (no agitarlas) y las toallas 
                  con detergente y agua. Lávelos a un mínimo de 60 ° C con un detergente doméstico convencional.
                  Es muy importante evitar los contactos y mantener todas las medidas de higiene personal recomendadas (para el enfermo y los convivientes).
                  Se llevará a cabo un seguimiento telefónico de los síntomas hasta el alta.
                  Ante la presencia de cualquier síntoma o malestar diferente comunicate al 419-5300 Capital y GBA) o 0800-999-2064 (interior).
                  Riesgo de vida/ emergencia 4129-5100 (Capital y GBA) o 0800-999-2064 (interior). </p>
            </div>

          </section>
     </section>
     </div>
    );
  }
export default CuerpoInicio;