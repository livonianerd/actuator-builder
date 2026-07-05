import { ActuatorParams } from '../App'

interface BOMPanelProps {
  params: ActuatorParams
}

export default function BOMPanel({ params }: BOMPanelProps) {
  const bomItems = [
    {
      part: 'Housing',
      material: 'Aluminum 6061-T6',
      qty: 1,
      specs: `OD: ${params.outerDiameter}mm, L: ${params.housingLength}mm`,
    },
    {
      part: 'Stator Assembly',
      material: 'Copper + Silicon Steel',
      qty: 1,
      specs: `OD: ${(params.outerDiameter * 0.9).toFixed(1)}mm, ${params.motorThickness}mm thick`,
    },
    {
      part: 'Rotor Assembly',
      material: 'Steel + NdFeB Magnets',
      qty: 1,
      specs: `OD: ${(params.outerDiameter * 0.7).toFixed(1)}mm, ${params.rotorThickness}mm thick`,
    },
    {
      part: 'Output Shaft',
      material: 'Stainless Steel 316',
      qty: 1,
      specs: `D: ${params.shaftDiameter}mm, L: ${params.shaftLength}mm`,
    },
    {
      part: 'Deep Groove Bearings',
      material: 'Chrome Steel',
      qty: 2,
      specs: `ID: ${params.shaftDiameter}mm, OD: ${params.shaftDiameter + params.bearingSize * 2}mm`,
    },
    {
      part: 'Encoder Disk',
      material: 'FR4 PCB',
      qty: 1,
      specs: `D: ${params.encoderDiameter}mm, 32 slots`,
    },
    {
      part: 'Mounting Plate',
      material: 'Aluminum 6061-T6',
      qty: 1,
      specs: `D: ${(params.outerDiameter * 1.1).toFixed(1)}mm, bolt circle: ${params.boltCircleDiameter}mm`,
    },
    {
      part: 'Mounting Bolts',
      material: 'Steel Grade 8.8',
      qty: params.numBolts,
      specs: 'M6 x 20mm',
    },
    {
      part: 'Optical Encoder Sensor',
      material: 'Electronic',
      qty: 1,
      specs: 'Reflective type, 32 CPR',
    },
  ]

  return (
    <div className="panel">
      <h2>Bill of Materials</h2>
      <table className="bom-table">
        <thead>
          <tr>
            <th>Part</th>
            <th>Material</th>
            <th>Qty</th>
            <th>Specifications</th>
          </tr>
        </thead>
        <tbody>
          {bomItems.map((item, index) => (
            <tr key={index}>
              <td>{item.part}</td>
              <td>{item.material}</td>
              <td>{item.qty}</td>
              <td style={{ fontSize: '0.8rem' }}>{item.specs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
