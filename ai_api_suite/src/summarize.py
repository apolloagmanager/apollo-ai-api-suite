from flask import request, jsonify
from transformers import pipeline

summarizer = pipeline('summarization', model='t5-small')

def summarize_route():
    data = request.get_json()
    text = data.get('text', '')
    max_length = data.get('max_length', 130)
    min_length = data.get('min_length', 30)
    
    if not text:
        return jsonify({'error': 'Missing text parameter'}), 400
    
    summary = summarizer(text, max_length=max_length, min_length=min_length)[0]['summary_text']
    return jsonify({'summary': summary})