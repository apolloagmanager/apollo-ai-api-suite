import PyPDF2
from transformers import pipeline
from io import BytesIO

def summarize_pdf(pdf_bytes, max_length=130, min_length=30):
    """
    Summarizes text extracted from a PDF file
    """
    # Extract text from PDF
    pdf_reader = PyPDF2.PdfReader(BytesIO(pdf_bytes))
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text() + "\n"
    
    # Summarize the extracted text
    summarizer = pipeline('summarization', model='t5-small')
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']