from flask import Flask
import pymongo
app = Flask(__name__)


@app.route('/')
def index():
    # connect to mongoDB
    connection = pymongo.MongoClient('localhost', 27017)
    # attach to test database
    db = connection.test
    # get handle for names collection
    name = db.names
    # find a single document
    item = name.find_one()

    return 'Hello %s!' % item['name']
