import { useState } from "react";

export default function MulchQuoteApp() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [pricePerYard, setPricePerYard] = useState(0);

  const area = length * width;

  const cubicYards = (depthInches) => {
    return ((area * (depthInches / 12)) / 27).toFixed(2);
  };

  const totalPrice = (depthInches) => {
    const priceMultiplier = depthInches === 1 ? 1.5 : 1;
    const adjustedPricePerYard = pricePerYard * priceMultiplier;
    return (cubicYards(depthInches) * adjustedPricePerYard).toFixed(2);
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: 24, marginBottom: 20 }}>Mulch Quote Calculator</h1>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 4 }}>Length (feet):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
          style={{ width: '100%', padding: 8, fontSize: 16 }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 4 }}>Width (feet):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
          style={{ width: '100%', padding: 8, fontSize: 16 }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', marginBottom: 4 }}>Price per Cubic Yard ($):</label>
        <input
          type="number"
          value={pricePerYard}
          onChange={(e) => setPricePerYard(parseFloat(e.target.value) || 0)}
          style={{ width: '100%', padding: 8, fontSize: 16 }}
        />
      </div>

      <div style={{ background: '#f9f9f9', padding: 16, borderRadius: 8, fontSize: 16 }}>
        <p><strong>Area:</strong> {area} sq ft</p>
        <p><strong>3\" Depth:</strong> {cubicYards(3)} cu yd - ${totalPrice(3)}</p>
        <p><strong>1\" Depth (1.5x price):</strong> {cubicYards(1)} cu yd - ${totalPrice(1)}</p>
      </div>
    </div>
  );
}
