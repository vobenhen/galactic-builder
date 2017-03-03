#This is the main python file.
#Please do not touch unless your are ABSOLUTELY SURE ABOUT WHAT YOU ARE DOING
#Thanks :)

#export FLASK_APP=mainpythonfile.py
#python -m flask run

import database as data

from flask import *
app = Flask(__name__)

networth = 300
money = 53

user1 = data.james

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/login/<string:user>')
def show_post(user):
    # show the post with the given id, the id is a string
    return "User = " + str(user)

from flask import render_template

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name, networth=networth, money=money)