import logo from "../assets/logo.png"

function Sidebar() {

    return (
        <>
            <section style={{ backgroundColor: "white", height: 800, width: 220, top: 0, left: 0 }}>
                <img src={logo} alt="Logo" style={{ height: 70, width: 140, position: "absolute", top: -2, left: 70 }} />

                <h1 style={{ margin: -8, fontSize: 20, textAlign: "right", display: "flex", width: "10vw", color: "black" }}>Mini Iron Commerce</h1 >

            </section>


        </>
    )
};

export default Sidebar;