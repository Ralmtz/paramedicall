import React, { useState } from 'react';
import './index.css';
import '../base.css';
import HeaderServicios from './FOTO-HEADER-SERVICIOS.png';
import IconoArea from './ICONO-AREAPARAMEDICALL.png';
import IconoCMI from './ICONO-CMI.png';
import IconoCME from './ICONO-CME.png';
import IconoOutSourcing from './ICONO-OUTSOURCING.png';
import IconoTraslado from './ICONO-TRASLADO.png';
import ImgTablaComparativa from './tabla-1600.png'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';

function Servicios() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (<div>
        <div className="container-logo-encabezado-Servicios">
            <img className='img-header' src={HeaderServicios} alt='Header Servicios' />
            <div className='text-encima-servicios'>
                <p className='t-1-servicios'>NUESTROS SERVICIOS</p>
                <p className='t-2-servicios'>SOLUCIONES INTEGRALES</p>
                <p className='t-3-servicios'>Y HUMANAS</p>
            </div>
        </div>
        <div className='c-nuestrasAmbulancias'>
            <h1 className='h1-nuestrasAmbulancias'>NUESTRAS AMBULANCIAS</h1>
            <p className='p-nuestrasAmbulancias'>
                Únicos con ambulancias de Terapia Intensiva, equipadas bajo la NOM de la Secretaría de Salud. Con unidades de reciente modelo, personal médico profesional y capacitado, estamos listos para brindar un servicio cálido, oportuno y de calidad.
            </p>
        </div>
        <div className='c-equipadasCon'>
            <h2 className='h2-equipadas'>EQUIPADAS CON</h2>
            <p className='p-dentrode'>(Dentro de las carácteristicas de terapia intensiva)</p>
            <div className='sc-equipadasCon'>
                <div className='i-equipadasCon'>
                    <ul>
                        <li>Monitor multiparamétrico</li>
                        <li> Electrocardiógrafo de 12 derivaciones</li>
                        <li> Monitor desfibrilador con marcapasos</li>
                        <li> Ventilador automático adulto y pediátrico</li>
                        <li> Infusor de presión</li>
                        <li> Doppler fetal</li>
                        <li> Pantalón neumático antishock</li>
                        <li> Equipo de inmovilización</li>
                        <li> Bomba de infusión</li>
                    </ul>
                </div>
                <div className='i-equipadasCon-2'>
                    <ul>
                        <li>Micronebulizador</li>
                        <li>Carro camilla hasta 250 kgs</li>
                        <li>Equipo de aspiración de secreciones fijo y portátil</li>
                        <li>Equipo esterilizado para atención de parto</li>
                        <li>Tanque de oxígeno fijo y portátiles</li>
                        <li>Cuadro de medicamentos: analgesia, cardiología,  inmunoalergicas, intoxicaciones, endocrinología,  neumología, electrolíticas y sustitutos de plasma, gastroenterología y neurología.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='c-tabla'>
            <div className='i-tabla'>
                <picture>
                    <source srcSet={ImgTablaComparativa} media="(max-width: 400px)" width='100%' />
                    <source srcSet={ImgTablaComparativa} media="(max-width: 700px)" width='100%' />
                    <source srcSet={ImgTablaComparativa} media="(max-width: 1000px)" width='100%' />
                    <img src={ImgTablaComparativa} alt="Icono Valores" width='100%' />
                </picture>

            </div>
        </div>
        <div className='c-listadoServicios'>
            <div className='c-panel-1'>
                <div className='i-panel-1'>
                    <h2 className='h2-tituloServicios'>ÁREA PARAMEDICALL</h2>
                    <p className='p-textServicios'>
                        Buscando resolver los temas relacionados con la medicina del trabajo, hemos desarrollado un <strong>SERVICIO MÉDICO para las industrias, empresas, instituciones, pequeñas y medianas empresas, comercios y negocios en general, </strong>que deseen estar protegidos ante cualquier eventualidad de Emergencias, Urgencias y Consultas Médicas, mediante un <strong>EQUIPO PROFESIONAL en la SALUD y en su propio lugar de trabajo.</strong>
                    </p>
                </div>
                <div className='i-panel-2'>
                    <img className='icono-servicioCollap' src={IconoArea} alt='Logo Área' />
                </div>
            </div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Tooltip title="Clic para ver más información" arrow>
                            <h2 className='h2-ventajasAhorros'>Ventajas y Ahorros del Servicio</h2>
                        </Tooltip>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='c-ventajas-servicio'>
                        <ul>
                            <li>Servicio Médico con EXPERIENCIA, CONFIABLE E INMEDIATO, con tiempos de respuesta garantizados.</li>
                            <li>Servicio Médico ILIMITADO.</li>
                            <li>Disponible las 24 horas, los 7 días de la semana.</li>
                            <li>El trabajador es atendido en la misma empresa, evitando el AUSENTISMO por enfermedad.</li>
                            <li>Nuestro servicio le permite ahorrar pues incluye la primer dosis del medicamento, así como el material médico que sea necesario durante la atención.</li>
                            <li>La tripulación en cada ambulancia consta de: médico, paramédico y enfermero.</li>
                            <li>En las atenciones médicas donde nuestro médico indique el traslado al hospital, éste será sin costo.</li>
                            <li>Nuestro objetivo es resolver la situación médica mediante un CORRECTO diagnóstico y medicación.</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className='c-panel-1'>
                <div className='i-panel-1'>
                    <h2 className='h2-tituloServicios'>COBERTURA MÉDICA INDIVIDUAL (CMI)</h2>
                    <p className='p-textServicios'>
                        Pensando en brindar <strong>atención médica de Emergencias, Urgencias y Consultas Médicas en el hogar,</strong> hemos desarrollado el servicio de <strong>COBERTURA MÉDICA INDIVIDUAL (CMI),</strong> implementado por un EQUIPO MÉDICO CONFIABLE y con AMPLIA EXPERIENCIA.
                    </p>
                </div>
                <div className='i-panel-2'>
                    <img className='icono-servicioCollap' src={IconoCMI} alt='Logo Área' />
                </div>
            </div>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Tooltip title="Clic para ver más información" arrow>
                            <h2 className='h2-ventajasAhorros'>Ventajas y Ahorros del Servicio</h2>
                        </Tooltip>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='c-ventajas-servicio'>
                        <ul>
                            <li>Servicio Médico a DOMICILIO, enfocado en CURAR al paciente y NO en estabilizarlo
                            y trasladarlo al hospital.
                            </li>
                            <li>Servicio Médico ILIMITADO y con tiempos de respuesta garantizados.</li>
                            <li>Disponible las 24 horas, los 7 días de la semana.</li>
                            <li>Ambulancias de Terapia Intensiva.</li>
                            <li>Disponible para cualquier persona, sin importar la edad o antecedentes médicos.</li>
                            <li>Nuestro servicio le permite ahorrar pues incluye la primer dosis del medicamento, así como el material médico que sea necesario durante la atención.</li>
                            <li>La tripulación en cada ambulancia consta de: médico, paramédico y enfermero.</li>
                            <li>En las atenciones médicas donde nuestro médico indique el traslado al hospital, éste será sin costo.</li>
                            <li>Nuestro objetivo es resolver la situación médica mediante un CORRECTO diagnóstico y medicación.</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className='c-panel-1'>
                <div className='i-panel-1'>
                    <h2 className='h2-tituloServicios'>COBERTURA MÉDICA EMPRESARIAL (CME)</h2>
                    <p className='p-textServicios'>
                        Pensando en todas aquellas empresas que deseen brindarle un beneficio adicional a sus trabajadores, hemos desarrollado este servicio para <strong>brindar atención médica de Emergencias, Urgencias y Consultas Médicas en cualquier lugar donde se encuentre su negocio</strong> (dentro de nuestra zona de cobertura).
                    </p>
                </div>
                <div className='i-panel-2'>
                    <img className='icono-servicioCollap' src={IconoCME} alt='Logo Área' />
                </div>
            </div>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Tooltip title="Clic para ver más información" arrow>
                            <h2 className='h2-ventajasAhorros'>Ventajas y Ahorros del Servicio</h2>
                        </Tooltip>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='c-ventajas-servicio'>
                        <ul>
                            <li>Servicio Médico a DOMICILIO, enfocado en CURAR al paciente y NO en estabilizarlo y trasladarlo al hospital.</li>
                            <li>Servicio Médico ILIMITADO y con tiempos de respuesta garantizados.</li>
                            <li>Disponible las 24 horas, los 7 días de la semana.</li>
                            <li>Ambulancias de Terapia Intensiva.</li>
                            <li>Disponible para cualquier persona, sin importar la edad o antecedentes médicos.</li>
                            <li>Nuestro servicio le permite ahorrar pues incluye la primer dosis del medicamento, así como el material médico que sea necesario durante la atención.</li>
                            <li>La tripulación en cada ambulancia consta de: médico, paramédico y enfermero.</li>
                            <li>En las atenciones médicas donde nuestro médico indique el traslado al hospital, éste será sin costo.</li>
                            <li>Nuestro objetivo es resolver la situación médica mediante un CORRECTO diagnóstico y medicación.</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className='c-panel-1'>
                <div className='i-panel-1'>
                    <h2 className='h2-tituloServicios'>SERVICIOS DE OUTSOURCING</h2>
                    <p className='p-textServicios'>
                        Hemos desarrollado <strong>servicios para cubrir todas las áreas de Salud Ocupacional, Enfermería Industrial y Medicina Prehospitalaria</strong> de una manera especializada y con altos estándares de calidad. Cumpliendo con la normativa vigente por parte de la Secretaría de Salud (COEPRIS), STPS y Protección Civil.
                    </p>
                </div>
                <div className='i-panel-2'>
                    <img className='icono-servicioCollap-outsourcing' src={IconoOutSourcing} alt='Icono' />
                </div>
            </div>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Tooltip title="Clic para ver más información" arrow>
                            <h2 className='h2-ventajasAhorros'>Lista de servicios que se cubren</h2>
                        </Tooltip>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='c-ventajas-servicio'>
                        <ul>
                            <li>Servicio de médico industrial</li>
                            <li>Servicio de paramédico industrial</li>
                            <li>Servicio de enfermero industrial</li>
                            <li>Supervisor de seguridad industrial en planta</li>
                            <li>Renta de ambulancia de terapia intensiva y urgencias básicas</li>
                            <li>Exámenes médicos</li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div className='c-panel-1' style={{ paddingBottom: '50px' }}>
                <div className='i-panel-1'>
                    <h2 className='h2-tituloServicios'>TRASLADO DE PACIENTES</h2>
                    <p className='p-textServicios'>
                        Este servicio cubre a pacientes tanto locales como foráneos que requieran esta atención, y se divide en tres tipos de traslados: <span style={{color: 'white'}}>Este servicio cubre a pacientes tanto locales como</span>
                    </p>
                    <ul>
                        <li>Ordinarios</li>
                        <li>Urgentes</li>
                        <li>Intensiva</li>
                    </ul>
                </div>
                <div className='i-panel-2'>
                    <img className='icono-servicioCollap' src={IconoTraslado} alt='Icono' />
                </div>
            </div>
        </div>
        <div className='c-preguntas'>
            <h2 className='h2-preguntasF'>PREGUNTAS FRECUENTES</h2>
            <div className='i-preguntas'>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Clic para ver más información" arrow>
                                <h3 className='h2-ventajasAhorros'><strong>¿Realizan traslados foráneos? </strong></h3>
                            </Tooltip>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='c-ventajas-servicio'>
                            <p>Si, tenemos de tres tipos: ordinarios, urgentes y de terapia intensiva. </p>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Clic para ver más información" arrow>
                                <h3 className='h2-ventajasAhorros'><strong>¿Realizan exámenes médicos para entrar a plantas industriales?</strong></h3>
                            </Tooltip>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='c-ventajas-servicio'>
                            <p>Si, son realizados en nuestras instalaciones y con nuestro médico especialista en Medicina del Trabajo.</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Clic para ver más información" arrow>
                                <h3 className='h2-ventajasAhorros'><strong>¿Realizan consultas médicas a domicilio? </strong></h3>
                            </Tooltip>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='c-ventajas-servicio'>
                            <p>Si, bajo el esquema de CMI, CME y/o Área Paramedicall (AP).</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8bh-content"
                        id="panel8bh-header"
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Clic para ver más información" arrow>
                                <h3 className='h2-ventajasAhorros'><strong>¿Los doctores a bordo de la ambulancia son médicos generales?  </strong></h3>
                            </Tooltip>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='c-ventajas-servicio'>
                            <p>No, los doctores cuentan con especialidad médica y/o maestría.</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel9bh-content"
                        id="panel9bh-header"
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Clic para ver más información" arrow>
                                <h3 className='h2-ventajasAhorros'><strong>¿El personal médico a bordo de la ambulancia cuenta con experiencia?</strong></h3>
                            </Tooltip>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='c-ventajas-servicio'>
                            <p>Si, el mínimo de experiencia son 3 años.</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>);
}
export default Servicios;