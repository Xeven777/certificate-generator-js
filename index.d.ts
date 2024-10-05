// index.d.ts

import { RGB } from "pdf-lib";

/**
 * Generates a single PDF certificate.
 *
 * @param fontUrl - Path to the font file (.ttf)
 * @param pdfTemplateUrl - Path to the PDF template (.pdf)
 * @param name - Name to be printed on the certificate
 * @param outputDir - Directory to save generated PDFs
 * @param fontColor - Color of the text (default: black)
 * @param xm - X-axis offset (default: 0)
 * @param ym - Y-axis offset (default: 0)
 * @throws Will throw an error if the name is too long
 */
export function generatePDF(
  fontUrl: string,
  pdfTemplateUrl: string,
  name: string,
  outputDir?: string,
  fontColor?: RGB,
  xm?: number,
  ym?: number
): Promise<void>;

/**
 * Generates multiple PDF certificates.
 *
 * @param fontUrl - Path to the font file (.ttf)
 * @param pdfTemplateUrl - Path to the PDF template (.pdf)
 * @param names - Array of names to generate certificates for
 * @param outputDir - Directory to save generated PDFs
 * @param fontColor - Color of the text (default: black)
 * @param xm - X-axis offset (default: 0)
 * @param ym - Y-axis offset (default: 0)
 * @throws Will throw an error if no names are provided
 */
export function generateCertificates(
  fontUrl: string,
  pdfTemplateUrl: string,
  names: string[],
  outputDir?: string,
  fontColor?: RGB,
  xm?: number,
  ym?: number
): Promise<void>;
