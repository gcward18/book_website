#!/usr/bin/python3
from flask import Flask 
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from connect import Connect
import os, pandas
from models.Authors import Authors
from models.BookEditions import BookEditions
from models.Grades import Grades
from models.BindingTypes import BindingTypes
from models.JacketConditions import JacketConditions
from models.Publishers import Publishers

app = Flask(__name__)
api = Api(app)
CORS(app)

# Resource that are currently avalible for use
# you're able to add parameters to the url for specific querying
# example:
# http://localhost:5000/book_editions?author=Hamilton Donald&edition=0&title=The Intimidators
# params
#   author  -> string
#   edition -> string
#   title   -> string
api.add_resource(Authors, "/author")

api.add_resource(BookEditions, "/book_editions")

api.add_resource(Grades, "/grade")

api.add_resource(BindingTypes, "/binding_type")

api.add_resource(JacketConditions, "/jacket_condition")

api.add_resource(Publishers, "/publisher")

app.run(debug=True)
