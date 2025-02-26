import logo from "../assets/logo.png"
import menu from "../assets/menu.png"
import orders from "../assets/orders.png"
import offers from "../assets/offers.png"
import settings from "../assets/settings.png"

function Sidebar() {

    return (
        <>
            <section style={{ backgroundColor: "white", height: 800, width: 220, top: 0, left: 0 }}>
                <img src={logo} alt="Logo" style={{ height: 70, width: 140, position: "absolute", top: -2, left: -30 }} />

                <h1 style={{ margin: -8, fontSize: 18, paddingLeft: 80, paddingTop: 5, width: "10vw", color: "black" }}>Mini Iron Commerce</h1 >

                <img src={menu} alt="Menu" style={{ height: 20, width: 30, position: "absolute", top: 20, left: 190 }} />

                <img src={orders} alt="Orders" style={{ height: 20, width: 35, position: "absolute", top: 80, left: 10 }} />

                <h2 style={{ margin: -8, fontSize: 15, paddingLeft: 60, paddingTop: 27, width: "10vw", color: "black" }}>Orders</h2 >

                <img src={offers} alt="Orders" style={{ height: 20, width: 32, position: "absolute", top: 120, left: 10 }} />

                <h2 style={{ margin: -8, fontSize: 15, paddingLeft: 60, paddingTop: 25, width: "10vw", color: "black" }}>Offers</h2 >

                <img src={settings} alt="Orders" style={{ height: 18, width: 28, position: "absolute", top: 710, left: 10 }} />

                <h2 style={{ margin: -8, fontSize: 15, paddingLeft: 60, paddingTop: 575, width: "10vw", color: "black" }}>Settings</h2 >

            </section>

        </>
    )
};

export default Sidebar;