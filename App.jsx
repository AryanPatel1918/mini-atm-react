import { useState } from "react"
import AmountCard from "/AmountCard.jsx"
export default function App() { 
    const [total, setTotal] = useState(57.23)
    const [inputValue, setInputValue] = useState("")
    const amounts = [5, 10, 25, 50, 100] 

    const addMoney = () => {
        const amount = Number(inputValue)
        if (!isNaN(amount) && amount > 0) {
            setTotal(prev => prev + amount)
        }
    }
    
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px 0" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Total: ${total.toFixed(2)}</span>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    $
                    <input type="number" min="0.01" style={{ width: "100px" }} placeholder="8.75" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={addMoney}>Add</button>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
                {amounts.map(amount => (
                    <AmountCard key={amount} data={{ amount, isLocked: total < amount }} withdrawAmount={() => setTotal(prev => prev - amount)} />
                ))}
            </div>
        </>
    )
}
