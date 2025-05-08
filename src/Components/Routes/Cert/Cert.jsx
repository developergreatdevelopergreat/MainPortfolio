import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import './Cert.css';


const hcia = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158338/HCIA_cvu2ap.webp"
const java = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158337/Java_course_ovcdpp.webp"
const Git = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158328/Git_and_Github_figiut.webp"
const introToBackend = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158330/Intro_to_backend_b8plvf.webp"
const ProgramminginPython = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/ProgrammingInPython_jynq96.webp"
const versionControl = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158321/VersionControl_qaw4vj.webp"
const introToDataBase = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158328/Intro_to_database_mf47g5.webp"
const aice = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158334/alx_up9vdv.webp"
const ecpc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158330/ecpc_h69udh.webp"
const dotpy = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158331/dotpy_jefwd4.webp"
const clean = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158337/clean_viakud.webp"
const oop = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158325/oop_jylarf.webp"
const hc = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158335/html_clwgwq.webp"
const py = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158322/pyrhon_ap5njq.webp"
const pan = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/pandas_ekptzt.webp"
const machine = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158325/machine_bpmwnd.webp"
const data = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158336/data_nt65ih.webp"
const sql = "https://res.cloudinary.com/dqktuc5ej/image/upload/v1745158326/sql_btezcp.webp"

const certificates = [
  { img: hcia, alt: "hcia", main: "HCIA:AI", sub: "From: Huawei ICT Academy" },
  { img: java, alt: "Java", main: "Java Course", sub: "From: Huawei ICT Academy" },
  { img: Git, alt: "Git", main: "Intro to Git and Github", sub: "From: Google | Coursera" },
  { img: introToBackend, alt: "Intro to Backend", main: "Intro to Backend", sub: "From: Meta | Coursera" },
  { img: ProgramminginPython, alt: "Programming in Python", main: "Programming in Python", sub: "From: Meta | Coursera" },
  { img: versionControl, alt: "Version Control", main: "Version Control", sub: "From: Meta | Coursera" },
  { img: introToDataBase, alt: "Intro to DataBase", main: "Intro to DataBase", sub: "From: Meta | Coursera" },
  { img: aice, alt: "AICE", main: "AI Career Essential", sub: "From: Alx" },
  { img: ecpc, alt: "ECPC", main: "ECPC Competition", sub: "Technology: ECPC" },
  { img: dotpy, alt: "DOtpy", main: "AI Diploma", sub: "From: Dotpy" },
  { img: clean, alt: "clean-code", main: "Clean Code", sub: "From: ITI" },
  { img: oop, alt: "OOP", main: "Mastering OOP", sub: "From: ITI" },
  { img: hc, alt: "HTML-CSS", main: "HTML and CSS", sub: "From: ITI" },
  { img: py, alt: "python", main: "Python", sub: "From: Kaggle" },
  { img: pan, alt: "Pandas", main: "Pandas", sub: "From: Kaggle" },
  { img: machine, alt: "intro-to-machine", main: "Intro to Machine Learning", sub: "From: Kaggle" },
  { img: data, alt: "data-cleaning", main: "Data Cleaning", sub: "From: Kaggle" },
  { img: sql, alt: "sql", main: "SQL Course", sub: "From: Udemy" },
];

const MotionNavLink = motion(NavLink);

const Cert = () => {
  return (
    <div className="certificates-container">
      <motion.div 
        className="title-section"
      >
        <h1 className="title">Certificates</h1>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div 
        className="certificates-grid"
        variants={{
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
        initial="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certificates.map(({ img, alt, main, sub }, index) => (
          <MotionNavLink 
            exact
            to={`/certificats/${alt}`}
            className="certificate-card" 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="card-content">
              <div className="image-wrapper">
                <img src={img} alt={alt} />
                <div className="image-overlay"></div>
              </div>
              <div className="text-content">
                <h3 className="cert-title">{main}</h3>
                <p className="cert-subtitle">{sub}</p>
              </div>
            </div>
          </MotionNavLink>
        ))}
      </motion.div>
    </div>
  );
};

export default Cert;