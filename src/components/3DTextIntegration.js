// 3D Text Integration Script
// This script can be used to replace the existing SYNTHHACK title with 3D versions

import SynthHack3DCSS from './SynthHack3DCSS';
import SynthHack3D from './SynthHack3D';

// Usage examples:

// Option 1: CSS-based 3D (Lightweight, no dependencies)
// Replace the existing title div in HeroSection.jsx with:
/*
<div className="mb-8 relative">
  <SynthHack3DCSS />
</div>
*/

// Option 2: Three.js WebGL 3D (More advanced, requires three.js)
// Replace the existing title div in HeroSection.jsx with:
/*
<div className="mb-8 relative" style={{ height: '400px' }}>
  <SynthHack3D />
</div>
*/

// Option 3: Keep existing and overlay 3D effect
// Add after the existing title:
/*
<div className="mb-8">
  <h1 className="space-title-3d mb-4">
    SYNTHHACK
  </h1>
  <h1 className="space-title-3d">
    2K25
  </h1>
  <SynthHack3DCSS />
</div>
*/

export { SynthHack3DCSS, SynthHack3D };