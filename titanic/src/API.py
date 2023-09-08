from flask import Flask, request, jsonify
import xgboost as xgb

app = Flask(__name__)

# Load the model
model = xgb.Booster()
model.load_model('xgb_model.bin')

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from POST request
    data = request.get_json(force=True)

    # Make prediction using the loaded model
    prediction = model.predict(xgb.DMatrix(data['features']))

    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(port=5000, debug=True)