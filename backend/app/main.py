
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from models.base import Item
from app.apis import predictions


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

## Handle api endpoints ftom other files
app.include_router(predictions.router, prefix="/apis", tags=["predict"])