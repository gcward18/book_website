#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse, fields
from flask_cors import CORS
from connect import Connect
import os, pandas

app = Flask(__name__)
api = Api(app)
CORS(app)

# author_fields = {
#     'author': fields.String
# }

# book_edition_fields = {
#     'title': fields.String,
#     'edition': fields.String,
#     'isbn': fields.String,
#     'pages': fields.String,
#     'publish_year': fields.String,
#     'notes': fields.String,
#     'author': fields.String
# }

# binding_types_fields = {
#     'binding_type': fields.String
# }

# grade_fields = {
#     'book_grade': fields.String
# }

# jacket_condition_fields = {
#     'jacket_condtion'
# }

class Author(Resource):
    def __init__(self, **kwargs):
        print(kwargs)
        if 'author' in kwargs:
            self.author = kwargs['author']
        else:
            self.author = ''
        self.connection = Connect(
                            'ora-scsp.srv.mst.edu',
                            1521,
                            os.environ['DBEAVER_USERNAME'],
                            os.environ['DBEAVER_PASSWORD'],
                            'scsp.mst.edu'
                        )
        self.connection.establish_connection() 

    def get(self):    
        if self.author != '':
            command = 'SELECT * FROM GCWZF4.AUTHORS WHERE AUTHOR=\'{}\''.format(self.author)
        else:
            command = 'SELECT * FROM GCWZF4.AUTHORS'
        data = self.connection.get_query_data(
            command
        )

        authors = []

        if data != []:
            for row in data:
                authors.append({"name":row[0]})

            self.connection.close_connection()
            return authors, 200
        else:
            return 'ERROR', 500


    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass
