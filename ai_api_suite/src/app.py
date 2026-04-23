from flask import Flask
from .summarize import summarize_route

app = Flask(__name__)
app.register_blueprint(summarize_route)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)