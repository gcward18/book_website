#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse, fields
from flask_cors import CORS
from connect import Connect
import os, pandas

app = Flask(__name__)
api = Api(app)
CORS(app)

binding_types_fields = {
    'binding_type': fields.String
}

class BindingTypes(Resource):
    def __init__(self, **kwargs):
        print(kwargs)
        if 'binding_type' in kwargs:
            self.binding_type = kwargs['binding_type']
        else:
            self.binding_type = ''
        self.connection = Connect(
                            'ora-scsp.srv.mst.edu',
                            1521,
                            os.environ['DBEAVER_USERNAME'],
                            os.environ['DBEAVER_PASSWORD'],
                            'scsp.mst.edu'
                        )
        self.connection.establish_connection() 

    def get(self):    
        if self.binding_type != '':
            command = 'SELECT * FROM GCWZF4.BINDING_TYPES WHERE BINDING_TYPE=\'{}\''.format(self.binding_type)
        else:
            command = 'SELECT * FROM GCWZF4.BINDING_TYPES'
        data = self.connection.get_query_data(
            command
        )

        binding_types = []

        if data != []:
            for row in data:
                binding_types.append({"binding_type":row[0]})

            self.connection.close_connection()
            return binding_types, 200
        else:
            return 'ERROR', 500


    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass
