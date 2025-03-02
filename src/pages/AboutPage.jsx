import {Link} from 'react-router-dom'

function AboutPage(){
    return(
        <>
        <h1>Bienvenidos</h1>
        <p>Somos Kurt Chacón y Alejandro Algodoncito, estudiantes de IronHack, y queremos ser diseñadores web. Bajo la tutela de nuestro profesor Jorge Miyazaki, día a día vamos mejorando. Para más información, les dejamos nuestras cuentas de LinkedIn y GitHub. </p>
        <h2>Kurt</h2>
        <Link to="https://github.com/kurtchs">Github</Link>
        <br />
        <Link to="https://githttps://www.linkedin.com/in/kurt-chacon-saavedra-832184251/hub.com/kurtchs">Linkedin</Link>

        <h2>Alejandro</h2>
        <Link to="https://github.com/AlejandroCorrea21">Github</Link>
        <br />
        <Link to="https://www.linkedin.com/in/alejandro-daniel-correa-rodr%C3%ADguez-47703b353/">Linkedin</Link>


       </> 
    )
}

export default AboutPage