from fastapi import FastAPI
from . import health_check, text_summary, pdf_summary  # Added pdf_summary

app = FastAPI()

# Include routers
app.include_router(health_check.router)
app.include_router(text_summary.router)
app.include_router(pdf_summary.router)  # New PDF endpoint

# Add new document processing endpoint
from . import document_processing
app.include_router(document_processing.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Apollo AI API Suite"}