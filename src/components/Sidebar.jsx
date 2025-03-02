import logo from "../assets/logo.png"
import menu from "../assets/menu.png"
import orders from "../assets/orders.png"
import offers from "../assets/offers.png"
import settings from "../assets/settings.png"

function Sidebar() {

    return (
        <>
            <div style={{ width: "10%", top: -310, backgroundColor: "red", display: "flex", flexDirection: "column" }}>
                <img src={logo} alt="Logo" style={{}} />

                <h1 style={{}}>Mini Iron Commerce</h1 >

                <img src={menu} alt="Menu" style={{}} />

                <img src={orders} alt="Orders" style={{}} />

                <h2 style={{}}>Orders</h2 >

                <img src={offers} alt="Orders" style={{}} />

                <h2 style={{}}>Offers</h2 >

                <img src={settings} alt="Orders" style={{}} />

                <h2 style={{}}>Settings</h2 >

            </div>

        </>
    )
};

export default Sidebar;