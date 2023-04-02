#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021

from fastapi import FastAPI, HTTPException

from model import User

from database import (
    fetch_one_user,
    fetch_all_users,
    create_user,
    update_user,
    remove_user,
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

# what is a middleware?
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/api/user")
async def get_user():
    response = await fetch_all_users()
    return response


@app.get("/api/user/{name}", response_model=User)
async def get_user_by_name(name):
    response = await fetch_one_user(name)
    if response:
        return response
    raise HTTPException(404, f"There is no user with the name {name}")


@app.post("/api/user/", response_model=User)
async def post_user(user: User):
    response = await create_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.put("/api/user/{name}/", response_model=User)
async def put_user(name: str, email: str):
    response = await update_user(name, email)
    if response:
        return response
    raise HTTPException(404, f"There is no user with the name {name}")


@app.delete("/api/user/{name}")
async def delete_user(name):
    response = await remove_user(name)
    if response:
        return "Successfully deleted user"
    raise HTTPException(404, f"There is no user with the name {name}")
