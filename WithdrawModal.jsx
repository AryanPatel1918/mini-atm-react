export default function WithdrawModal({ amount, closeModal, withdrawAmount }) {
    return (
        <div onClick={closeModal} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "white", padding: "60px 50px", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
                <h3 style={{ margin: 0 }}>Confirm Withdrawal of ${amount.toFixed(2)}</h3>
                <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button onClick={() => {
                            withdrawAmount(),
                            closeModal()
                        }}
                        style={{ flex: 1 }}>Withdraw</button>
                    <button onClick={closeModal} style={{ flex: 1 }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
