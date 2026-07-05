import { ActuatorParams } from '../App'

interface ControlPanelProps {
  params: ActuatorParams
  setParams: (params: ActuatorParams) => void
  exploded: boolean
  setExploded: (exploded: boolean) => void
  rotating: boolean
  setRotating: (rotating: boolean) => void
  showLabels: boolean
  setShowLabels: (showLabels: boolean) => void
}

export default function ControlPanel({
  params,
  setParams,
  exploded,
  setExploded,
  rotating,
  setRotating,
  showLabels,
  setShowLabels,
}: ControlPanelProps) {
  const updateParam = (key: keyof ActuatorParams, value: number) => {
    setParams({ ...params, [key]: value })
  }

  return (
    <div className="panel">
      <h2>Controls</h2>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="exploded"
          checked={exploded}
          onChange={(e) => setExploded(e.target.checked)}
        />
        <label htmlFor="exploded">Exploded View</label>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="rotating"
          checked={rotating}
          onChange={(e) => setRotating(e.target.checked)}
        />
        <label htmlFor="rotating">Animate Rotation</label>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="labels"
          checked={showLabels}
          onChange={(e) => setShowLabels(e.target.checked)}
        />
        <label htmlFor="labels">Show Labels</label>
      </div>

      <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #3a3a3a' }} />

      <h2>Dimensions</h2>

      <div className="control-group">
        <label>
          Outer Diameter: <span className="control-value">{params.outerDiameter} mm</span>
        </label>
        <input
          type="range"
          min="60"
          max="150"
          value={params.outerDiameter}
          onChange={(e) => updateParam('outerDiameter', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Housing Length: <span className="control-value">{params.housingLength} mm</span>
        </label>
        <input
          type="range"
          min="40"
          max="120"
          value={params.housingLength}
          onChange={(e) => updateParam('housingLength', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Shaft Diameter: <span className="control-value">{params.shaftDiameter} mm</span>
        </label>
        <input
          type="range"
          min="10"
          max="40"
          value={params.shaftDiameter}
          onChange={(e) => updateParam('shaftDiameter', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Shaft Length: <span className="control-value">{params.shaftLength} mm</span>
        </label>
        <input
          type="range"
          min="30"
          max="100"
          value={params.shaftLength}
          onChange={(e) => updateParam('shaftLength', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Motor Thickness: <span className="control-value">{params.motorThickness} mm</span>
        </label>
        <input
          type="range"
          min="8"
          max="30"
          value={params.motorThickness}
          onChange={(e) => updateParam('motorThickness', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Rotor Thickness: <span className="control-value">{params.rotorThickness} mm</span>
        </label>
        <input
          type="range"
          min="5"
          max="20"
          value={params.rotorThickness}
          onChange={(e) => updateParam('rotorThickness', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Bearing Size: <span className="control-value">{params.bearingSize} mm</span>
        </label>
        <input
          type="range"
          min="4"
          max="15"
          value={params.bearingSize}
          onChange={(e) => updateParam('bearingSize', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Encoder Diameter: <span className="control-value">{params.encoderDiameter} mm</span>
        </label>
        <input
          type="range"
          min="20"
          max="60"
          value={params.encoderDiameter}
          onChange={(e) => updateParam('encoderDiameter', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Bolt Circle Diameter: <span className="control-value">{params.boltCircleDiameter} mm</span>
        </label>
        <input
          type="range"
          min="50"
          max="130"
          value={params.boltCircleDiameter}
          onChange={(e) => updateParam('boltCircleDiameter', Number(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>
          Number of Bolts: <span className="control-value">{params.numBolts}</span>
        </label>
        <input
          type="range"
          min="3"
          max="12"
          value={params.numBolts}
          onChange={(e) => updateParam('numBolts', Number(e.target.value))}
        />
      </div>
    </div>
  )
}
