from flask import Blueprint, request, jsonify
from .pdf_summarize import summarize_pdf

pdf_route = Blueprint('pdf', __name__)

@pdf_route.route('/summarize-pdf', methods=['POST'])
def pdf_summary():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and file.filename.endswith('.pdf'):
        max_length = int(request.form.get('max_length', 130))
        min_length = int(request.form.get('min_length', 30))
        
        pdf_bytes = file.read()
        summary = summarize_pdf(pdf_bytes, max_length, min_length)
        return jsonify({'summary': summary})
    
    return jsonify({'error': 'Invalid file type'}), 400