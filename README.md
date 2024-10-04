# Certificate Generator

This project provides a node-js based tool for generating customizable certificates in PDF format.

## Features

- Dynamically generates personalized certificates for events, workshops, or courses
- Supports batch processing for multiple recipients
- Allows customization of font color and positioning
- Uses PDF-Lib library for robust PDF generation capabilities

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/certificate-generator-ts.git
   ```

2. Navigate to the project directory:

   ```
   cd certificate-generator-ts
   ```

3. Install dependencies:
   ```
   bun install
   ```

## Usage

To generate certificates, use the following command:

```javascript
// Example usage:

const fontUrl = path.resolve(__dirname, "./assets/DancingScript-Variable.ttf");
const pdfTemplateUrl = path.resolve(__dirname, "./assets/certificate1.pdf");
const outputDir = path.resolve(__dirname, "output");

const names = ["John Doe", "Jane Smith", "Max Mustermann"];
const customColor = rgb(0.5, 0, 0.5);

generateCertificates(
  fontUrl,
  pdfTemplateUrl,
  names,
  outputDir,
  customColor,
  100,
  -50
)
  .then(() => console.log("All PDFs generated successfully"))
  .catch((error) => console.error("Error generating PDFs:", error));
```

## Configuration

- `fontUrl`: Path to the font file (.ttf)
- `pdfTemplateUrl`: Path to the template PDF file
- `names`: Array of recipient names
- `outputDir`: Directory to save generated certificates
- `fontColor`: Color of the text (default: black)
- `xm`: Horizontal offset (default: 0)
- `ym`: Vertical offset (default: 0)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or issues.
