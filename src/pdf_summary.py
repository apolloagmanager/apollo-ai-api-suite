import requests
from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
from io import BytesIO
import fitz  # PyMuPDF

router = APIRouter()

class PDFSummaryRequest(BaseModel):
    url: str = None

@router.post("/summarize-pdf")
async def summarize_pdf(pdf: UploadFile = File(None), request: PDFSummaryRequest = None):
    """
    Summarize PDF from either URL or file upload
    """
    # Get PDF content
    if pdf:
        pdf_content = await pdf.read()
    elif request and request.url:
        try:
            response = requests.get(request.url)
            response.raise_for_status()
            pdf_content = response.content
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Failed to fetch PDF: {str(e)}")
    else:
        raise HTTPException(status_code=400, detail="No PDF provided")
    
    # Process PDF
    try:
        doc = fitz.open(stream=pdf_content, filetype="pdf")
        full_text = ""
        for page in doc:
            full_text += page.get_text()
        
        # Generate summary (placeholder - will integrate with AI model)
        summary = f"PDF summary placeholder. Contains {len(doc)} pages and {len(full_text.split())} words."
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"PDF processing error: {str(e)}")