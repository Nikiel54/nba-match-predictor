from fastapi import APIRouter

router = APIRouter()

@router.get("/predict")
def predict_team_success():
    return { "Prediction": "hello world"}