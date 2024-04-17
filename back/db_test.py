import firebase_admin
from firebase_admin import db
import json

cred_obj = firebase_admin.credentials.Certificate("jobs-623b2-firebase-adminsdk-wqegp-fb0364c875.json")
default_app = firebase_admin.initialize_app(cred_obj, {
    'databaseURL' :'https://jobs-623b2-default-rtdb.europe-west1.firebasedatabase.app/'}
)

ref = db.reference("/")

with open("database.json", "r") as f:
    file_contents = json.load(f)

ref.set(file_contents)