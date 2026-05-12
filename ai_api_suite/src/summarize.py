from flask import Blueprint, request, jsonify
from transformers import pipeline

summarize_route = Blueprint('summarize', __name__)
summarizer = pipeline('summarization', model='t5-small')

@summarize_route.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get('text', '')
    max_length = data.get('max_length', 130)
    min_length = data.get('min_length', 30)
    
    if not text:
        return jsonify({'error': 'Missing text parameter'}), 400
    
    summary = summarizer(text, max_length=max_length, min_length=min_length)[0]['summary_text']
    return jsonify({'summary': summary})