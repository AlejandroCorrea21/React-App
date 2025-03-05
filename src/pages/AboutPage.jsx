import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <>
            <h1 style={{ color: '#57C5FA', textAlign: 'center' }}>Bienvenidos</h1>
            <p style={{ color: 'black', fontSize: '18px', fontStyle: 'italic', textAlign: 'center' }}>
                Somos Kurt Delaselva y Alejandro Algodoncito, estudiantes de IronHack, y queremos ser diseñadores web. Bajo la tutela de nuestro profesor Jorge Miyazaki, día a día vamos mejorando. Para más información, les dejamos nuestras cuentas de LinkedIn y GitHub.
            </p>

            <h2 style={{ color: 'black', fontSize: '25px', fontStyle: 'italic', textAlign: 'center' }}>Kurt</h2>
            <div style={{ textAlign: 'center' }}>
                <Link style={{ fontSize: '18px', margin: '5px' }} to="https://github.com/kurtchs" target="_blank" rel="noopener noreferrer">GitHub</Link>
                <br />
                <Link style={{ fontSize: '18px', margin: '5px' }} to="https://www.linkedin.com/in/kurt-chacon-saavedra-832184251/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </div>

            <h2 style={{ color: 'black', fontSize: '25px', fontStyle: 'italic', textAlign: 'center' }}>Alejandro</h2>
            <div style={{ textAlign: 'center' }}>
                <Link style={{ fontSize: '18px', margin: '5px' }} to="https://github.com/AlejandroCorrea21" target="_blank" rel="noopener noreferrer">GitHub</Link>
                <br />
                <Link style={{ fontSize: '18px', margin: '5px' }} to="https://www.linkedin.com/in/alejandro-daniel-correa-rodr%C3%ADguez-47703b353/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </div>
        </>
    )
}

export default AboutPage;