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
    return (cubicYards(depthInches) * pricePerYard).toFixed(2);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Mulch Quote Calculator</h1>
      <div style={{ marginBottom: '1rem' }}>
        <label>Length (feet): </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Width (feet): </label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Price per Cubic Yard ($): </label>
        <input
          type="number"
          value={pricePerYard}
          onChange={(e) => setPricePerYard(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div>
        <p><strong>Area:</strong> {area} sq ft</p>
        <p><strong>3" Depth:</strong> {cubicYards(3)} cu yd - ${totalPrice(3)}</p>
        <p><strong>1" Depth:</strong> {cubicYards(1)} cu yd - ${totalPrice(1)}</p>
      </div>
    </div>
  );
}