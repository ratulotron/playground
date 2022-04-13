from data import populate_db, db
from fastapi import FastAPI

app = FastAPI()  # notice that the app instance is called `app`, this is very important.


@app.get("/")
async def read_root():
    errors = populate_db()

    if len(errors) == 0:
        return {"message": "data has been pushed"}

    return {"errors": errors}


@app.get("/students")
async def get_students():

    students = next(db.fetch())
    return students
