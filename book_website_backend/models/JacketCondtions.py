#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse, fields
from flask_cors import CORS
from connect import Connect
import os, pandas

app = Flask(__name__)
api = Api(app)
CORS(app)

jacket_conditions_fields = {
    'jacket_conditions': fields.String
}

class JacketCondtions(Resource):
    def __init__(self, **kwargs):

        if 'jacket_conditions' in kwargs:
            self.jacket_conditions = kwargs['jacket_conditions']
        else:
            self.jacket_conditions = ''
        self.connection = Connect(
                            'ora-scsp.srv.mst.edu',
                            1521,
                            os.environ['DBEAVER_USERNAME'],
                            os.environ['DBEAVER_PASSWORD'],
                            'scsp.mst.edu'
                        )
        self.connection.establish_connection() 

    def get(self):    
        if self.jacket_conditions != '':
            command = 'SELECT * FROM GCWZF4.GRADES WHERE GRADE=\'{}\''.format(self.jacket_conditions)
        else:
            command = 'SELECT * FROM GCWZF4.GRADES'
        data = self.connection.get_query_data(
            command
        )

        jacket_conditions = []

        if data != []:
            for row in data:
                jacket_conditions.append({"jacket_conditions":row[0]})

            self.connection.close_connection()
            return jacket_conditions, 200
        else:
            return 'ERROR', 500


    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass