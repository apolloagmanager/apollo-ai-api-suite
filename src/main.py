from fastapi import FastAPI
from . import health_check, text_summary, pdf_summary  # Added pdf_summary

app = FastAPI()

# Include routers
app.include_router(health_check.router)
app.include_router(text_summary.router)
app.include_router(pdf_summary.router)  # New PDF endpoint

@app.get("/")
def read_root():
    return {"message": "Welcome to Apollo AI API Suite"}