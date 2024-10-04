import { PDFDocument, rgb, type Color } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";

const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const generatePDF = async (
  fontUrl: string,
  pdfTemplateUrl: string,
  name: string,
  outputDir: string = "output",
  fontColor: Color = rgb(0, 0, 0), // Default black color
  xm: number = 0, // Default x-offset
  ym: number = 0 // Default y-offset
) => {
  let nameLength = name.length;
  if (nameLength > 30)
    throw new Error("Name too long. Retry with a shorter name");

  const fontBytes = fs.readFileSync(fontUrl);
  const fontSize = nameLength > 20 ? 48 : 60;
  const existingPdfBytes = fs.readFileSync(pdfTemplateUrl);
  const pdfDoc = await PDFDocument.load(new Uint8Array(existingPdfBytes));
  pdfDoc.registerFontkit(fontkit);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const customFont = await pdfDoc.embedFont(
    fontBytes.buffer as unknown as ArrayBuffer
  );

  const pageSize = firstPage.getSize();
  const textWidth = customFont.widthOfTextAtSize(name, fontSize);
  const textHeight = customFont.heightAtSize(fontSize);
  const pageWidth = pageSize.width;
  const pageHeight = pageSize.height;

  firstPage.drawText(name, {
    x: pageWidth / 2 - textWidth / 2 + xm,
    y: pageHeight / 2 - textHeight / 2 + ym,
    size: fontSize,
    font: customFont,
    color: fontColor,
  });

  const pdfBytes = await pdfDoc.save();
  const fileName = `${name}-Certificate-${(Math.random() * 1000000).toPrecision(
    6
  )}.pdf`;
  const outputPath = path.join(outputDir, fileName);
  fs.writeFileSync(outputPath, pdfBytes);
};

const generateCertificates = async (
  fontUrl: string,
  pdfTemplateUrl: string,
  names: string[],
  outputDir?: string,
  fontColor?: Color,
  xm?: number, // Default x-offset
  ym?: number // Default y-offset
) => {
  console.time("Certificates");
  const capitalizedNames = names
    .map((name) => capitalize(name.trim()))
    .filter(Boolean);
  if (capitalizedNames.length === 0) {
    throw new Error("Enter at least one name correctly");
  }
  for (const name of capitalizedNames) {
    await generatePDF(
      fontUrl,
      pdfTemplateUrl,
      name,
      outputDir,
      fontColor,
      xm,
      ym
    );
  }
  console.timeEnd("Certificates");
};

// Example usage:

// const fontUrl = path.resolve(__dirname, "./assets/DancingScript-Variable.ttf");
// const pdfTemplateUrl = path.resolve(__dirname, "./assets/certificate1.pdf");
// const outputDir = path.resolve(__dirname, "output");

// const names = ["John Doe", "Jane Smith", "Max Mustermann"];
// const customColor = rgb(0.5, 0, 0.5);

// generateCertificates(
//   fontUrl,
//   pdfTemplateUrl,
//   names,
//   outputDir,
//   customColor,
//   100,
//   -50
// )
//   .then(() => console.log("All PDFs generated successfully"))
//   .catch((error) => console.error("Error generating PDFs:", error));
