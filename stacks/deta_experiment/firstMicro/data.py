import pandas as pd
from deta import Deta
import logging


logger = logging.getLogger()


STUDENTS_DATASET = (
    "https://github.com/ozlerhakan/mongodb-json-files/raw/master/datasets/students.json"
)


deta = Deta()
db = deta.Base("students")


def split_dataframe(df, chunk_size=10):
    chunks = list()
    num_chunks = len(df) // chunk_size + 1
    for i in range(num_chunks):
        chunk = df[i * chunk_size : (i + 1) * chunk_size]
        if len(chunk) == 0:
            break
        chunks.append(chunk)
    return chunks


def initialise_db(db_name: str):
    deta.Base


def populate_db():
    db = deta.Base("students")
    db.delete()

    print("Fetching the dataset")
    students = pd.read_json(STUDENTS_DATASET, lines=True, orient="records").rename(
        columns={"_id": "key"}
    )
    students.key = students.key.astype(str)

    print("Dataset fetched")
    errors = []

    print("Pushing Students dataset in chunks")
    for student_chunk in split_dataframe(students, chunk_size=20):
        students_dict = student_chunk.to_dict(orient="records")
        print(f"Pushing {len(students_dict)} rows")
        try:
            db.put_many(students_dict)
        except Exception as e:
            logger.error(e)
            print("Something went wrong during data push:")
            print(e)

            print("Data:")
            print(students_dict)
            errors.append(e)

    print("Data push complete")
    return errors
