# Certificate Generator

A Node.js package to generate personalized certificates in PDF format.

## Installation

```bash
npm install certificate-generator-js
```

## Features

- Dynamically generates personalized certificates for events, workshops, or courses✨
- Supports batch processing for multiple recipients 🫂
- Allows customization of font color and positioning ✌🏻
- Uses PDF-Lib library for robust PDF generation capabilities 🧑🏻‍💻

## Usage

To generate certificates, use the following command:

```javascript
// Example usage:

import { generateCertificates } from "certificate-generator-js";
import path from "path";
import { rgb } from "pdf-lib";

const fontUrl = path.resolve(__dirname, "./DancingScript-Variable.ttf");
const pdfTemplateUrl = path.resolve(__dirname, "./moksha.pdf");
const outputDir = path.resolve(__dirname, "output");

const names = ["Xeven", "Anish"];
const customColor = rgb(0.5, 0, 0.5);

generateCertificates(
  fontUrl,
  pdfTemplateUrl,
  names,
  outputDir,
  customColor,
  0,
  55
)
  .then(() => console.log("All PDFs generated successfully"))
  .catch((error: any) => console.error("Error generating PDFs:", error));
```

## Configuration

### generateCertificates(fontUrl, pdfTemplateUrl, names, outputDir, fontColor, xm, ym)

- `fontUrl` (string): Path to the font file (.ttf)
- `pdfTemplateUrl` (string): Path to the PDF template (.pdf)
- `names` (array of string): Array of names to generate certificates for
- `outputDir` (string): Directory to save generated PDFs
- `fontColor` (rgb): Color of the text (default: black)
- `xm` (number): X-axis offset (default: 0)
- `ym` (number): Y-axis offset (default: 0)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or issues.

1. Fork and Clone the repository:

   ```
   git clone https://github.com/yourusername/certificate-generator-js.git
   ```

2. Navigate to the project directory:

   ```
   cd certificate-generator-js
   ```

3. Install dependencies:
   ```
   bun install
   ```
