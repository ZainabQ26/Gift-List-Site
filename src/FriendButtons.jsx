import { useState } from "react";

function FriendButtons({ friendsList, onSelect, onAddFriend }) {
    const [nameInput, setNameInput] = useState("");

    const processSubmission = (e) => {
        e.preventDefault();
        if (!nameInput.trim()) return;

        onAddFriend(nameInput.trim());
        setNameInput("");
    };

    const pageStyle = {
        backgroundColor: "#202020",
        color: "white",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "60px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
    };

    const columnStyle = {
        width: "100%",
        maxWidth: "1100px",
        padding: "0 40px",
    };

    const titleStyle = {
        fontSize: "4.4rem",
        fontWeight: "bold",
        marginBottom: "40px",
        textAlign: "center",
    };

    const btnStyle = {
        width: "100%",
        height: "190px",
        fontSize: "4rem",
        color: "#DC143C",
        backgroundColor: "#FFEA00",
        fontWeight: 900,
        margin: "22px 0",
        cursor: "pointer",
        border: "none",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={pageStyle}>
            <div style={columnStyle}>
                <div style={titleStyle}>Pick a friend</div>

                <form onSubmit={processSubmission} style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
                    <input 
                        type="text"
                        placeholder="Friend's Name..."
                        style={{
                            flex: 1,
                            padding: "15px 25px",
                            fontSize: "1.8rem",
                            borderRadius: "14px",
                            border: "2px solid #555",
                            backgroundColor: "#111",
                            color: "white"
                        }}
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <button type="submit" style={{ padding: "15px 35px", fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer", backgroundColor: "#4CBB17", color: "white", borderRadius: "14px", border: "none" }}>
                        Add
                    </button>
                </form>

                {friendsList.map((friendKey) => (
                    <button 
                        key={friendKey} 
                        style={btnStyle} 
                        onClick={() => onSelect(friendKey)}
                    >
                        {friendKey}
                    </button>
                ))}

                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <button onClick={() => window.print()} style={{ backgroundColor: "#111", color: "white", border: "none", padding: "12px 24px", borderRadius: "8px", cursor: "pointer", fontSize: "1.2rem" }}>
                        🖨️ Print Dashboard Screen
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FriendButtons;