import { useState } from "react"
import WithdrawModal from "/WithdrawModal.jsx"
export default function AmountCard({ data: { amount, isLocked }, withdrawAmount }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return (
        <>
            <div onClick={isLocked ? undefined : () => setIsModalOpen(true)} style={{ opacity: isLocked ? 0.5 : 1, border: "2px solid black", borderRadius: 30, aspectRatio: 8/4, display: "flex", justifyContent: "center", alignItems: "center", cursor: isLocked ? "default" : "pointer", position: "relative", overflow: "hidden" }}>
                <h3>${amount.toFixed(2)}</h3>
                {isLocked && <span style={{ fontSize: "1.5rem", position: "absolute", right: 0, top: 0, backgroundColor: "black", padding: 4, borderRadius: 0 }}>🔒</span>}
            </div>
            {isModalOpen && <WithdrawModal amount={amount} closeModal={() => setIsModalOpen(false)} withdrawAmount={withdrawAmount} />}
        </>
    )
}
