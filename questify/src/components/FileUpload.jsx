import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry'; // Adjusted import
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// Set the worker source correctly for Vite

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/bmp', 'application/pdf'];
    if (!validTypes.includes(uploadedFile.type)) {
      setError('Unsupported file type! Please upload a JPG, PNG, BMP, or PDF.');
      return;
    }

    setError('');
    setFile(uploadedFile);
  };

  const extractText = async () => {
    if (!file) {
      setError('Please upload a valid file.');
      return;
    }

    setError('');
    setExtractedText('');

    try {
      if (file.type === 'application/pdf') {
        const pdf = await pdfjsLib.getDocument({ url: URL.createObjectURL(file) }).promise;
        let text = '';

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(' ');
          text += ` ${pageText}`;
        }

        setExtractedText(text);
      } else {
        const result = await Tesseract.recognize(file, 'eng', {
          logger: (m) => console.log(m),
        });
        setExtractedText(result.data.text);
      }
    } catch (err) {
      setError('Error attempting to read the file. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h2>Upload an Image or PDF</h2>
      <input type="file" accept=".jpg, .jpeg, .png, .bmp, .pdf" onChange={handleFileChange} />
      <button onClick={extractText}>Extract Text</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
