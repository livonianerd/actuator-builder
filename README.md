# Quasi-Direct-Drive Actuator Builder

An interactive 3D parametric design tool for visualizing and configuring quasi-direct-drive (QDD) actuators with integrated planetary gearboxes. Built with React, TypeScript, and Three.js.

## What is a Quasi-Direct-Drive Actuator?

Quasi-Direct-Drive actuators represent a modern approach to robotic actuation that bridges the gap between traditional geared motors and direct-drive systems. They feature:

- **Low gear ratio** (typically 6:1 to 9:1) for optimal torque density
- **Integrated frameless motor** design with the actuator housing serving as the motor frame
- **High backdrivability** enabling compliant control and force sensing
- **Compact planetary gearbox** for efficient torque multiplication
- **Integrated position sensing** with high-resolution encoders

QDD actuators are widely used in advanced robotics applications including legged robots, collaborative robot arms, exoskeletons, and prosthetics where high torque, backdrivability, and precise control are essential.

## Features

### 3D Visualization
- Real-time parametric 3D model with full actuator assembly
- Exploded view mode for component visualization
- Rotation animation demonstrating 6:1 gear reduction
- Interactive camera controls (orbit, zoom, pan)
- Component labels for part identification

### Planetary Gearbox (6:1)
- Sun gear (20 teeth) driven by motor rotor
- Configurable planet gears (3-5 planets, 24 teeth each)
- Fixed ring gear (60 teeth) for 6:1 reduction
- Animated visualization showing speed reduction
- Planet carrier connected to output shaft

### Complete Assembly Components
- **Housing** - Aluminum 6061-T6 outer shell
- **Frameless Motor** - Integrated stator with 12 copper windings
- **Rotor** - 8 NdFeB permanent magnets
- **Planetary Gearbox** - Sun, planet, and ring gears with carrier
- **Bearings** - Front and rear deep groove ball bearings
- **Output Shaft** - Stainless steel 316
- **Encoder Disk** - 32-slot optical encoder for position feedback
- **Mounting Plate** - Configurable bolt pattern for integration

### Parametric Controls
Adjust all key dimensions in real-time:
- Outer diameter and housing length
- Shaft diameter and length
- Motor and rotor thickness
- Bearing size
- Encoder diameter
- Gearbox parameters (thickness, gear sizes, planet count)
- Mounting bolt pattern

### Bill of Materials (BOM)
- Auto-generated parts list with quantities
- Material specifications
- Dimensional details
- Gear tooth counts and ratios

### Design Validation
- Real-time constraint checking
- Structural integrity warnings
- Gearbox fitment validation
- Gear ratio verification
- Engineering assumptions and specifications

## Tech Stack

- **React** - Component-based UI framework
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Vite** - Fast build tooling and dev server

## Installation

```bash
# Clone the repository
git clone https://github.com/livonianerd/actuator-builder.git
cd actuator-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser to `http://localhost:5173`

## Usage

1. **Adjust Parameters** - Use the control panel sliders to modify actuator dimensions
2. **Exploded View** - Toggle to see component spacing and assembly order
3. **Animation** - Enable rotation to visualize the 6:1 gear reduction in action
4. **Labels** - Show/hide component labels for part identification
5. **Review BOM** - Check the auto-generated bill of materials
6. **Validate Design** - Monitor validation panel for design warnings

## Project Structure

```
actuator-builder/
├── src/
│   ├── components/
│   │   ├── ActuatorAssembly.tsx    # Main 3D assembly with all components
│   │   ├── ActuatorScene.tsx       # Three.js scene setup
│   │   ├── BOMPanel.tsx            # Bill of Materials display
│   │   ├── ControlPanel.tsx        # Parameter controls
│   │   └── ValidationPanel.tsx     # Design validation
│   ├── App.tsx                     # Main application component
│   ├── App.css                     # Application styles
│   └── main.tsx                    # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Engineering Specifications

### Default Configuration
- Outer Diameter: 100mm
- Housing Length: 80mm
- Shaft Diameter: 20mm
- Gear Ratio: 6:1 (planetary)
- Motor Type: Frameless brushless DC
- Encoder Resolution: 32 CPR

### Assumptions
- Motor torque constant: 0.5 Nm/A
- Maximum continuous current: 10A
- Gearbox efficiency: ~95%
- Bearing rating: 10,000 RPM
- Operating temperature: -20°C to 80°C
- Magnet grade: N42 NdFeB
- Winding configuration: 3-phase delta

## Use Cases

- **Education** - Understanding actuator design and planetary gearbox mechanics
- **Rapid Prototyping** - Exploring design configurations before CAD/manufacturing
- **Design Communication** - Visualizing concepts for team discussions
- **Research** - Foundation for parametric design tools in robotics

## Future Enhancements

Potential features for future development:
- STL/STEP export for 3D printing and CAD
- Torque/speed curve calculations
- Thermal analysis
- Weight and cost estimation
- Multiple gearbox configurations (different ratios)
- Custom motor winding patterns
- FEA integration

## License

MIT License - feel free to use this project for educational and commercial purposes.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Acknowledgments

Built with assistance from Claude (Anthropic) for educational and engineering visualization purposes.
