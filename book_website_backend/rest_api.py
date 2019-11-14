#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from connect import Connect
import os

app = Flask(__name__)
api = Api(app)
CORS(app)


class Author(Resource):
    def get(self):    
        conn =Connect(
                    'ora-scsp.srv.mst.edu',
                    1521,
                    os.environ['DBEAVER_USERNAME'],
                    os.environ['DBEAVER_PASSWORD'],
                    'scsp.mst.edu'
                )
        conn.establish_connection()
        data = conn.get_query_data('SELECT * FROM CAO346.AUTHORS')
        
        authors = []
        for row in data:
            authors.append({"name":row[0]})
        conn.close_connection()

        return authors, 200

    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass

class BookEditions(Resource):
    def get(self):    
        conn =Connect(
                    'ora-scsp.srv.mst.edu',
                    1521,
                    os.environ['DBEAVER_USERNAME'],
                    os.environ['DBEAVER_PASSWORD'],
                    'scsp.mst.edu'
                )
        conn.establish_connection()
        data = conn.get_query_data('SELECT * FROM CAO346.BOOK_EDITIONS')
        
        books = []
        i = 0
        for row in data:
            books.append({
                "id": i,
                "title":row[0],
                "author": row[-2],
                "year": row[4]
                })
            i+=1
        conn.close_connection()

        return books, 200

    def post(self, name):
        pass
    def put(self, name):
        pass
    def delete(self, name):
        pass

api.add_resource(Author, "/author")
api.add_resource(BookEditions, "/book_editions")
app.run(debug=True)
