from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()
client = TestClient(app)


@app.get("/")
def read_root():
    return {"Hello World"}


@app.get("/scenarios")
def read_root():
    return {"You want scenarios?": "You can have them!"}

