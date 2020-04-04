
from waitress import serve
from mongo.models.patient_model import Patient
from connect import connect_to_db
from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from mongoengine import *
import json
app = Flask(__name__)
CORS(app, origins='http://localhost:8000')
api = Api(app)


@api.resource('/')
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


@api.resource('/patients/<string:id>')
class PatientsResource(Resource):
    def get(self, id):
        # Patient.objects.get(id=id) #"5e876d0087cd4aaefd6fc1bd")
        # return {
        #     "general_patient_details": {
        #         "first_name": Patient.objects.get(id=id).general_patient_details.first_name,
        #         "last_name": Patient.objects.get(id=id).general_patient_details.last_name
        #     }
        #   }
        return json.loads(Patient.objects.get(id=id).to_json())

    # def put(self, todo_id):
    #     todos[todo_id] = request.form['data']
    #     return {todo_id: todos[todo_id]}

# api.add_resource(TodoSimple, '/<string:todo_id>')
# db.inventory.insert_one(
#     {"item": "canvas2",
#      "qty": 100,
#      "tags": ["cotton"],
#      "size": {"h": 28, "w": 35.5, "uom": "cm"}})


if __name__ == "__main__":
    connect_to_db()
    serve(app, host='0.0.0.0', port=8081)
    # print(Patient.objects.get(id="5e876d0087cd4aaefd6fc1bd"))
