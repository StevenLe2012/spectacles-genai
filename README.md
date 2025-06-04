# Spectacles-GenAI

## 🚀 Project Overview

Modern AR often focuses on interaction, not creation. We want to change that. By combining wearable tech with generative AI, **SketchScape** lets users rapidly prototype 3D content with nothing more than a gesture or a finger stroke.

**Pipeline Summary:**
1. **Input** via **Snap Spectacles**  
   Users draw in the air or on a surface. The front-facing camera captures the sketch (hand gestures or fingertip motion).
2. **Generation** via **TRELLIS** (or similar Gen AI)  
   Captured sketches are processed into a 3D model using AI models trained on sketch-to-3D generation.
3. **Visualization** via **Lens Studio**  
   The generated 3D model is placed in the real world using AR anchors and tracking, allowing users to explore or modify their creations.

---

## 🧠 Core Technologies

| Component         | Tech/Tool               | Description                                                                 |
|------------------|-------------------------|-----------------------------------------------------------------------------|
| Sketch Capture    | Snap Spectacles         | Front-facing camera records hand or surface drawings                        |
| Drawing Detection | OpenCV / MediaPipe / SnapML | Hand/finger tracking to extract vectorized or bitmap sketches              |
| 3D Generation     | TRELLIS / Shap-E / GET3D | Generative model converts sketches into 3D geometry                         |
| AR Visualization  | Snap Lens Studio        | Imports 3D assets into an AR scene with world or surface anchoring         |

---

## 🧪 Experimental Features

- ✏️ **Live Sketch Recognition**  
  Real-time capture and sketch tracking using Snap’s camera feed.

- 🎭 **Prompt Fusion**  
  Optional voice/text prompts to enhance context for more accurate 3D generation.

- 🧵 **Creative Iteration**  
  Support for redo/undo sketches and re-generate updated models.

- 🌍 **World Anchoring**  
  Place generated objects realistically on real-world surfaces.

---

## 📁 File Structure

