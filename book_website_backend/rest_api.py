#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from connect import Connect
import os, pandas
from models.Authors import Author
from models.BookEditions import BookEditions

app = Flask(__name__)
api = Api(app)
CORS(app)


api.add_resource(Author, "/author")
api.add_resource(BookEditions, "/book_editions")
app.run(debug=True)
