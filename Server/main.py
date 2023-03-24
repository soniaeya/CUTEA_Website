from fastapi import FastAPI
from fastapi.testclient import TestClient
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
client = TestClient(app)
origins = ["http://localhost:3000", "http://localhost:5000", ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return "Hi"


@app.get("/scenarios")
def read_root():
    return {"You want scenarios?": "You can have them!"}


@app.get("/api/hello")
async def hello():
    return {"message": "Hello from FastAPI!"}
