import { ActuatorParams } from '../App'

interface ValidationPanelProps {
  params: ActuatorParams
}

export default function ValidationPanel({ params }: ValidationPanelProps) {
  const validations = []
  const assumptions = [
    'Motor torque constant: 0.5 Nm/A',
    'Bearing rated for 10,000 RPM',
    'Operating temperature: -20°C to 80°C',
    'Encoder resolution: 32 CPR (counts per revolution)',
    'Maximum continuous current: 10A',
    'Peak torque duration: 1 second',
    'Estimated gear ratio: 6:1 (quasi-direct-drive)',
    'Air gap between stator and rotor: 0.5mm',
    'Magnet grade: N42 NdFeB',
    'Winding: 3-phase, delta configuration',
  ]

  // Validation checks
  if (params.shaftDiameter > params.outerDiameter * 0.5) {
    validations.push({
      type: 'error',
      title: 'Shaft Too Large',
      message: 'Shaft diameter should be less than 50% of outer diameter for structural integrity.',
    })
  }

  if (params.boltCircleDiameter > params.outerDiameter * 1.05) {
    validations.push({
      type: 'warning',
      title: 'Bolt Circle Warning',
      message: 'Bolt circle diameter is close to housing diameter. Ensure mounting plate has adequate material.',
    })
  }

  if (params.bearingSize < params.shaftDiameter * 0.3) {
    validations.push({
      type: 'warning',
      title: 'Small Bearing Size',
      message: 'Bearing size may be insufficient for load capacity. Consider increasing bearing size.',
    })
  }

  if (params.motorThickness < params.outerDiameter * 0.1) {
    validations.push({
      type: 'warning',
      title: 'Thin Motor',
      message: 'Motor thickness is relatively small. This may limit torque production.',
    })
  }

  if (params.housingLength < params.motorThickness + params.rotorThickness + 20) {
    validations.push({
      type: 'error',
      title: 'Housing Too Short',
      message: 'Housing length must accommodate motor, rotor, and bearings with clearance.',
    })
  }

  if (params.numBolts < 4) {
    validations.push({
      type: 'warning',
      title: 'Few Mounting Bolts',
      message: 'Consider using at least 4 bolts for even load distribution and vibration resistance.',
    })
  }

  if (validations.length === 0) {
    validations.push({
      type: 'info',
      title: 'Design Valid',
      message: 'All dimensional constraints are satisfied. Design appears structurally sound.',
    })
  }

  return (
    <div className="panel">
      <h2>Validation & Assumptions</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.95rem', marginBottom: '0.8rem', color: '#cccccc' }}>
          Design Validation
        </h3>
        {validations.map((validation, index) => (
          <div key={index} className={`validation-item ${validation.type}`}>
            <h3>{validation.title}</h3>
            <p>{validation.message}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ fontSize: '0.95rem', marginBottom: '0.8rem', color: '#cccccc' }}>
          Engineering Assumptions
        </h3>
        <ul className="assumption-list">
          {assumptions.map((assumption, index) => (
            <li key={index}>{assumption}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
