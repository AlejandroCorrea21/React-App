import lupa from "../assets/lupa.png"
import notification from "../assets/notification.png"
import usuario from "../assets/user.png"

function Navbar() {

    return (
        <>

            <section style={{ position: "fixed", top: 1, right: 0, backgroundColor: "white", textAlign: "right", display: "flex", width: "76vw", alignItems: "center", border: "1px solid black" }}>
                <img src={lupa} alt="" style={{ position: "fixed", height: 15, width: 20, top: 20, left: 200, paddingLeft: 40 }} />

                <p style={{ fontSize: 15, color: "black", paddingLeft: 50 }}>Search</p>
                <img src={notification} alt="" style={{ position: "fixed", height: 15, width: 20, top: 20, right: 50 }} />
                <img src={usuario} alt="" style={{ position: "fixed", height: 15, width: 20, top: 20, right: 20 }} />

            </section>

        </>
    )
};

export default Navbar;