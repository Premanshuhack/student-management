from flask import Flask,request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import speech_recognition as sr
app = Flask(__name__)
CORS(app)

# Sample data (you can replace this with your actual data source)
sample_data = {
    'name': 'John Doe',
    'age': 30,
    'city': 'New York'
}
data={
        'name':"",
        'role':"",
        'rollno.':""
    }

client = MongoClient('mongodb://localhost:27017/')
db = client['config']  # Replace 'mydatabase' with your database name
collections = db['students']  # Replace 'mycollection' with your collection name
recognizer = sr.Recognizer()
def convert_to_dict(document):
    if isinstance(document, dict):
        document['_id'] = str(document['_id'])
    return document

# Define a function to transcribe speech from microphone input
def transcribe_speech():
    with sr.Microphone() as source:
        print("Speak something...")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        audio = recognizer.listen(source)  # Listen for speech input

    try:
        # Use Google Web Speech API for speech recognition
        text = recognizer.recognize_google(audio)
        return text
    except sr.UnknownValueError:
        print("Sorry, I couldn't understand what you said.")
    except sr.RequestError as e:
        print(f"Could not request results from Google Web Speech API; {e}")

# Call the function to transcribe speech
@app.route('/api/data', methods=['POST'])
def get_data():
    transcribed_text = transcribe_speech()
    print("You said:", transcribed_text)
    data=collections.find({'name':transcribed_text})
    data = [convert_to_dict(document) for document in data]
    return jsonify(data)

@app.route('/api/data2', methods=['POST'])
def get_data2():
    transcribed_text = transcribe_speech()
    print("You said:", transcribed_text)
    return jsonify(transcribed_text)

@app.route('/api/data3', methods=['POST'])
def get_data3():
    name=transcribe_speech()
    print("You said:", name)
    data['name']=name
    return jsonify(name)

@app.route('/api/data4', methods=['POST'])
def get_data4():
    role=transcribe_speech()
    print("You said:", role)
    data['role']=role
    return jsonify(role)

@app.route('/api/data5', methods=['POST'])
def get_data5():
    rollno=transcribe_speech()
    print("You said:", rollno)
    data['rollno.']=rollno
    return jsonify(rollno)

@app.route('/api/data6', methods=['POST'])
def get_data6():
    collections.insert_one(data)
    data.pop('_id')
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
