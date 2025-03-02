import lupa from "../assets/lupa.png"
import notification from "../assets/notification.png"
import usuario from "../assets/user.png"

function Navbar() {

    return (
        <>

            <div style={{ width: "100%", height: 100, marginLeft: "10%", backgroundColor: "purple", display: "flex", justifyContent: "flex-start" }}>
                <div>
                    <img src={lupa} alt="" style={{ width: 30, height: 20, marginLeft: "10%", backgroundColor: "purple", display: "flex", justifyContent: "flex-start" }} />
                    <p style={{}}>Search</p>
                </div>
                <div style={{ width: 30, height: 20, display: "flex", justifyContent: "flex-end", }}>
                    <img src={notification} alt="" />
                    <img src={usuario} alt="" style={{ width: 30, height: 20 }} />
                </div>
            </div >

        </>
    )
};

export default Navbar;