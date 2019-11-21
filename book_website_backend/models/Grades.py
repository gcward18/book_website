#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse, fields
from flask_cors import CORS
from connect import Connect
import os, pandas

app = Flask(__name__)
api = Api(app)
CORS(app)

grades_fields = {
    'grades': fields.String
}

class Grades(Resource):
    def __init__(self, **kwargs):

        if 'grades' in kwargs:
            self.grades = kwargs['grades']
        else:
            self.grades = ''
        self.connection = Connect(
                            'ora-scsp.srv.mst.edu',
                            1521,
                            os.environ['DBEAVER_USERNAME'],
                            os.environ['DBEAVER_PASSWORD'],
                            'scsp.mst.edu'
                        )
        self.connection.establish_connection() 

    def get(self):    
        if self.grades != '':
            command = 'SELECT * FROM GCWZF4.GRADES WHERE GRADE=\'{}\''.format(self.grades)
        else:
            command = 'SELECT * FROM GCWZF4.GRADES'
        data = self.connection.get_query_data(
            command
        )

        grades = []

        if data != []:
            for row in data:
                grades.append({"grades":row[0]})

            self.connection.close_connection()
            return grades, 200
        else:
            return 'ERROR', 500


    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass