function FriendButtons({ onSelect }) {
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

                <button style={btnStyle} onClick={() => onSelect("FRIEND1")}>
                    FRIEND1
                </button>
                <button style={btnStyle} onClick={() => onSelect("FRIEND2")}>
                    FRIEND2
                </button>
                <button style={btnStyle} onClick={() => onSelect("FRIEND3")}>
                    FRIEND3
                </button>
            </div>
        </div>
    );
}

export default FriendButtons;
