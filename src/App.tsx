import { useState } from 'react'
import ActuatorScene from './components/ActuatorScene'
import ControlPanel from './components/ControlPanel'
import BOMPanel from './components/BOMPanel'
import ValidationPanel from './components/ValidationPanel'
import './App.css'

export interface ActuatorParams {
  outerDiameter: number
  housingLength: number
  shaftDiameter: number
  shaftLength: number
  motorThickness: number
  rotorThickness: number
  bearingSize: number
  encoderDiameter: number
  boltCircleDiameter: number
  numBolts: number
  gearboxThickness: number
  sunGearRadius: number
  planetGearRadius: number
  numPlanets: number
}

function App() {
  const [params, setParams] = useState<ActuatorParams>({
    outerDiameter: 100,
    housingLength: 80,
    shaftDiameter: 20,
    shaftLength: 60,
    motorThickness: 15,
    rotorThickness: 10,
    bearingSize: 8,
    encoderDiameter: 40,
    boltCircleDiameter: 85,
    numBolts: 6,
    gearboxThickness: 15,
    sunGearRadius: 10,
    planetGearRadius: 20,
    numPlanets: 3,
  })

  const [exploded, setExploded] = useState(false)
  const [rotating, setRotating] = useState(false)
  const [showLabels, setShowLabels] = useState(true)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Quasi-Direct-Drive Actuator Builder</h1>
      </header>

      <div className="main-content">
        <div className="scene-container">
          <ActuatorScene
            params={params}
            exploded={exploded}
            rotating={rotating}
            showLabels={showLabels}
          />
        </div>

        <div className="sidebar">
          <ControlPanel
            params={params}
            setParams={setParams}
            exploded={exploded}
            setExploded={setExploded}
            rotating={rotating}
            setRotating={setRotating}
            showLabels={showLabels}
            setShowLabels={setShowLabels}
          />

          <BOMPanel params={params} />

          <ValidationPanel params={params} />
        </div>
      </div>
    </div>
  )
}

export default App
