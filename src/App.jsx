import { useState } from "react";
import FriendButtons from "./FriendButtons";

function App() {
    const [selectedFriend, setSelectedFriend] = useState(null);

    const [giftsByFriend, setGiftsByFriend] = useState({
        FRIEND1: [
            {
                name: "LEGO Botanicals Happy Plants Building Toys",
                price: 22.96,
                url: "https://www.amazon.com/LEGO-Botanicals-Happy-Plants-Building/dp/B0DRW6C2RF/",
                image: "https://m.media-amazon.com/images/I/7126IIfAZgL._AC_SL1500_.jpg",
            },
            {
                name: "Crayola Color Wonder Magic",
                price: 14.99,
                url: "https://www.amazon.com/Crayola-Color-Wonder-Magic-Painting/dp/B084Y3DLFJ/",
                image:
                    "https://m.media-amazon.com/images/I/81q13+KL29L._AC_SY300_SX300_QL70_FMwebp_.jpg",
            },
        ],

        FRIEND2: [
            {
                name: "Dr Pepper Pillow",
                price: 29.99,
                url: "https://www.amazon.com/RMKA-Doctor-Pepper-Pillow-RMKAPILLOW-008/dp/B0D8LDPTDL/",
                image:
                    "https://m.media-amazon.com/images/I/71e-sbNf8IL._AC_SY300_SX300_QL70_FMwebp_.jpg",
            },
            {
                name: "Drinks Lovers Canvas Bags",
                price: 13.15,
                url: "https://www.amazon.com/Jollaroo-Drinks-Lovers-Canvas-Bags/dp/B0FJM1QT5H/",
                image:
                    "https://m.media-amazon.com/images/I/81t8H6PXNFL._AC_SX342_SY445_QL70_FMwebp_.jpg",
            },
            {
                name: "Doctor Pepper Candle",
                price: 25.99,
                url: "https://www.amazon.com/Doctor-Pepper-Candle-Occasion-Aesthetic/dp/B0CQ2746WY/",
                image:
                    "https://m.media-amazon.com/images/I/81pdLpgD0YL._AC_SX679_.jpg",
            },
        ],


        FRIEND3: [
            {
                name: "Periodic Table Speed Puzzle Cube",
                price: 9.99,
                url: "https://www.amazon.com/Cuberspeed-Periodic-Table-speed-puzzle/dp/B0CWVK2Q1H",
                image:
                    "https://m.media-amazon.com/images/I/81ULBl6JxZL._AC_SY300_SX300_QL70_FMwebp_.jpg",
            },
        ],
    });

const handleAddFriend = (friendName) => {
    const cleanName = friendName.trim(); // Removes accidental empty spaces

    // If the name already exists, stop immediately so we don't erase their gifts!
    if (giftsByFriend[cleanName]) {
        alert("That friend already exists!");
        return;
    }

    // Use our state function to update the screen
    setGiftsByFriend({
        ...giftsByFriend, // 1. Copy everything currently inside the list
        [cleanName]: []   // 2. Add the new name key with a fresh, empty gift array
    });
};
 if (!selectedFriend) {
    return (
        <FriendButtons 
            friendsList={Object.keys(giftsByFriend)} // Pass the names array down
            onSelect={setSelectedFriend}            // Pass the screen-switcher down
            onAddFriend={handleAddFriend}            // Pass the addition rule down
        />
    );
}
    

    const gifts = giftsByFriend[selectedFriend] ?? [];
    const total = gifts.reduce((sum, g) => sum + g.price, 0);

    const pageStyle = {
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#202020",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "30px 0",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
    };

    const contentContainer = {
        width: "100%",
        maxWidth: "1600px",
        padding: "0 40px",
    };

    const headerRow = {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
    };

    const backButtonStyle = {
        backgroundColor: "#111",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        marginRight: "16px",
    };

    const titlesContainer = {
        flex: 1,
        textAlign: "center",
    };

    const tableWrapper = {
        width: "100%",
        overflowX: "auto",
        marginTop: "20px",
    };

    const tableStyle = {
        borderCollapse: "collapse",
        width: "100%",
        backgroundColor: "#1f1f1f",
        border: "2px solid #666",
    };

    const headerCellStyle = {
        border: "1px solid #666",
        padding: "14px",
        textAlign: "center",
        backgroundColor: "#333",
    };

    const cellStyle = {
        border: "1px solid #666",
        padding: "10px",
        textAlign: "center",
        verticalAlign: "middle",
    };

    const giftButtonStyle = {
        backgroundColor: "#FFEA00",
        color: "#DC143C",
        fontWeight: 900,
        padding: "18px 32px",
        border: "none",
        borderRadius: "18px",
        fontSize: "2.2rem",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        whiteSpace: "normal",
        lineHeight: 1.25,
    };


    const imgStyle = {
        width: "190px",
        height: "190px",
        objectFit: "contain",
        backgroundColor: "white",
        borderRadius: "4px",
    };

    const totalStyle = {
        marginTop: "24px",
        fontSize: "1.9rem",
        fontWeight: "bold",
        textAlign: "center",
    };

    return (
        <div style={pageStyle}>
            <div style={contentContainer}>
                <div style={headerRow}>
                    <button style={backButtonStyle} onClick={() => setSelectedFriend(null)}>
                        ← Back
                    </button>

                    <div style={titlesContainer}>
                        <h1 style={{ fontSize: "3.7rem", margin: "5px 0" }}>Gift List</h1>
                        <h2 style={{ margin: 0 }}>Showing gifts for {selectedFriend}</h2>
                    </div>
                </div>

                <div style={tableWrapper}>
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={headerCellStyle}>Gift</th>
                            <th style={headerCellStyle}>Price</th>
                            <th style={headerCellStyle}>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        {gifts.map((gift) => (
                            <tr key={gift.name}>
                                <td style={cellStyle}>
                                    <button style={giftButtonStyle}>{gift.name}</button>
                                </td>
                                <td style={cellStyle}>${gift.price.toFixed(2)}</td>
                                <td style={cellStyle}>
                                    <a
                                        href={gift.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={gift.image} alt={gift.name} style={imgStyle} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div style={totalStyle}>
                    Total for {selectedFriend}: ${total.toFixed(2)}
                </div>
            </div>
        </div>
    );
}

export default App;
