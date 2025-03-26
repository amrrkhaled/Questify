# Questify - AI-Powered Question Answering Platform

## Project Overview
Questify is an innovative AI-powered platform designed to help students extract questions from uploaded documents (PDFs, Word files, or images) and validate their answers. Whether it's verifying True/False, Multiple Choice, or open-ended questions, Questify accurately analyzes, answers, and labels responses — making learning more engaging and efficient. It uses AI to handle multiple scenarios:
- Extracting questions and answers when present in the document.
- Identifying and validating True/False, Multiple Choice, and open-ended questions.
- Generating answers using AI for open-ended questions without explicit answers.
- Labeling each answer as 'From PDF' or 'AI-Generated'.

---

## Features
1. **Document Upload:** Accepts PDFs, Word files, and images.
2. **OCR and Text Extraction:** Handles both typed and scanned documents.
3. **Question Parsing:** Identifies question types — True/False, Multiple Choice, Open-ended.
4. **Answer Extraction and Validation:**
   - Detects answers from the document when present.
   - Uses AI to generate answers when absent.
   - Labels answers as 'From PDF' or 'AI-Generated'.
5. **Supports Abbreviations:** Recognizes True/False answers like T, F, ✓, ✗, Yes, No, etc.
6. **Feedback:** Validates user answers with extracted/AI-generated answers.

---

## Tech Stack
- **Frontend Only:**
  - **React.js:** For a dynamic and interactive UI.
  - **Tesseract.js:** For OCR and text extraction.
  - **Hugging Face Transformers (In-browser):** For NLP-based question parsing and answer generation.
  - **OpenAI API:** For advanced AI answer generation if necessary.

---

## Project Structure
```
├── src/
│   ├── App.jsx
│   ├── components/
│   └── styles/
├── README.md
├── public/
└── package.json
```

---

## Installation
1. **Clone the Repository:**
```
git clone https://github.com/your-repo/questify.git
cd questify
```
2. **Install Dependencies:**
```
npm install
```

---

## Running the Application
```
npm start
```
The app will start on `http://localhost:3000`.

---

## Workflow and Logic
1. **Document Upload:**
   - User uploads a PDF, Word file, or image.
   - If the file is a scanned image, OCR is applied for text extraction.
2. **Question Parsing:**
   - Identifies question types: True/False, MCQs, Open-ended.
   - Extracts answers from the document when present.
3. **Answer Processing:**
   - If no answer is present, AI generates an answer.
   - Labels each answer as 'From PDF' or 'AI-Generated'.
4. **Feedback and Validation:**
   - The user provides their answers, and the system validates them.

---

## Example Scenarios
- **Scenario 1:** A True/False question with the answer marked as 'T'.
  - Label: 'From PDF'
- **Scenario 2:** An MCQ with no marked answer.
  - Label: 'AI-Generated'
- **Scenario 3:** Open-ended question with no explicit answer.
  - Label: 'AI-Generated'

---

## Future Improvements
- Improve OCR for better handwriting detection.
- Enhance AI accuracy for answer generation.
- Support more file types like Excel.

---

## Contribution
- Fork the repository.
- Create a new branch for your feature.
- Create a Pull Request for review.

---



