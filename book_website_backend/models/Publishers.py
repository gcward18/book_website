#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse, fields
from flask_cors import CORS
from connect import Connect
import os, pandas

app = Flask(__name__)
api = Api(app)
CORS(app)

publishers_fields = {
    'publishers': fields.String
}

class Publishers(Resource):
    def __init__(self, **kwargs):

        if 'publishers' in kwargs:
            self.publishers = kwargs['publishers']
        else:
            self.publishers = ''
        self.connection = Connect(
                            'ora-scsp.srv.mst.edu',
                            1521,
                            os.environ['DBEAVER_USERNAME'],
                            os.environ['DBEAVER_PASSWORD'],
                            'scsp.mst.edu'
                        )
        self.connection.establish_connection() 

    def get(self):    
        if self.publishers != '':
            command = 'SELECT * FROM GCWZF4.GRADES WHERE GRADE=\'{}\''.format(self.publishers)
        else:
            command = 'SELECT * FROM GCWZF4.GRADES'
        data = self.connection.get_query_data(
            command
        )

        publishers = []

        if data != []:
            for row in data:
                publishers.append({"publishers":row[0]})

            self.connection.close_connection()
            return publishers, 200
        else:
            return 'ERROR', 500


    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass