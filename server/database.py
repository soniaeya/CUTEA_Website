#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021

import motor.motor_asyncio
from model import User

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.UserList
collection = database.user


async def fetch_one_user(name):
    document = await collection.find_one({"name": name})
    return document


async def fetch_all_users():
    users = []
    cursor = collection.find({})
    async for document in cursor:
        users.append(User(**document))
    return users


async def create_user(user):
    document = user
    result = await collection.insert_one(document)
    return document


async def update_user(name, desc):
    await collection.update_one({"name": name}, {"$set": {"description": desc}})
    document = await collection.find_one({"name": name})
    return document


async def remove_user(name):
    await collection.delete_one({"name": name})
    return True
