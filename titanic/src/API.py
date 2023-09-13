from flask import Flask, request, jsonify
from flask_cors import CORS
import xgboost as xgb
import os

app = Flask(__name__)
CORS(app)

# Load the model
model = xgb.Booster()
dir_path = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(dir_path, "xgb_model.bin")
model.load_model(model_path)


@app.route("/predict", methods=["POST"])
def predict():
    # Conseguir informacion del POST
    json = request.get_json(force=True)
    data = json["features"]
    # Transformacion de los datos del JSON
    data["Sex"] = 1 if data["Sex"] == "male" else 0
    # Transformacion del nombre
    Title_Dictionary = {
        "Capt": "Officer",
        "Col": "Officer",
        "Major": "Major",
        "Jonkheer": "Royalty",
        "Don": "Royalty",
        "Sir": "Royalty",
        "Dr": "Officer",
        "Rev": "Officer",
        "the Countess": "Royalty",
        "Mme": "Mrs",
        "Mlle": "Miss",
        "Ms": "Mrs",
        "Mr": "Mr",
        "Mrs": "Mrs",
        "Miss": "Miss",
        "Master": "Master",
        "Lady": "Royalty",
    }
    title = data["Name"].split(",")[1].split(".")[0].strip()
    data["Title"] = Title_Dictionary.get(title, "Default")
    # Crear variables dummies para Title
    for title_key in ["Miss", "Mr", "Mrs"]:
        data[f"Title_{title_key}"] = True if data["Title"] == title_key else False
    # Si Cabin no está presente o es una cadena vacía, establecerlo en 'D' (desconocido)
    data["Cabin"] = data.get("Cabin", "U") or "D"
    data["Cabin_U"] = True if data["Cabin"] == "U" else False
    
    data["FamSize"] = int(data["SibSp"]) + int(data["Parch"]) + 1
    data["Single"] = 1 if data["FamSize"] == 1 else 0
    data["SmallF"] = 1 if 2 <= data["FamSize"] <= 4 else 0
    data["LarF"] = 1 if data["FamSize"] >= 5 else 0
    features = [
        int(data["PClass"]),
        data["Sex"],
        float(data["Age"]),
        int(data["SibSp"]),
        float(data["Fare"]),
        data["FamSize"],
        data["SmallF"],
        data["LarF"],
        data["Cabin_U"],
        data["Title_Miss"],
        data["Title_Mr"],
        data["Title_Mrs"],
    ]
    # Hacer la predicción
    prediction = model.predict(xgb.DMatrix([features]))
    print(prediction)
    return jsonify({"prediction": prediction.tolist()})


if __name__ == "__main__":
    app.run(port=5000, debug=True)
