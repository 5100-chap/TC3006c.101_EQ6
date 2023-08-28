# TC3006c.101_EQ6
Repositorio del equipo 6 para la materia de Inteligencia Artificial avanzada para la ciencia de datos I y II

## Parte dos: Selección, configuración y entrenamiento del modelo

### Árbol de Decisiones

Los árboles de decisiones son modelos predictivos que mapean características que pueden ser relevantes para predecir un resultado. En el contexto del reto "Titanic - Machine Learning from Disaster", se busca identificar las variables que nos puedan ayudar a predecir quiénes sobrevivieron y quiénes no.

Decidimos usar los datos previamente limpios para diseñar el modelo. Transformamos las columnas “Embarked_C” y “Embarked_D” a variables dummies, representadas como números binarios, para simplificar su valor. En este modelo, decidimos no aplicar una técnica de resampling a pesar del desequilibrio observado entre los sobrevivientes y no sobrevivientes, ya que no consideramos que fuera tan extremo como para afectar al modelo.

Con un set de entrenamiento y un set de validación, experimentamos con varias configuraciones del árbol de decisiones. Probamos múltiples valores de profundidad y analizamos cómo estos afectaban al modelo. Finalmente, seleccionamos una profundidad óptima de 4. El modelo basado en el árbol de decisiones alcanzó una precisión aproximada del 80% para predecir quiénes sobrevivieron al naufragio.

### Random Forest

Random Forest es un algoritmo de aprendizaje automático utilizado para resolver problemas de clasificación y regresión. En el contexto del desafío "Titanic - Machine Learning from Disaster", se busca predecir si los pasajeros del Titanic sobrevivieron al naufragio.

Antes de entrenar el modelo, observamos un desbalance entre sobrevivientes y no sobrevivientes. Aplicamos SMOTE para equilibrar las clases. Utilizamos el RandomForestClassifier de scikit-learn para entrenar el modelo, ya que puede manejar ruido, características irrelevantes, relaciones no lineales y sobreajustes.

Optimizamos los hiperparámetros del RandomForest usando Optuna, tomando el f1_score como métrica principal. Tras entrenar, evaluamos las predicciones y las comparamos con otros modelos. Así, pudimos determinar el desempeño del RandomForest en comparación con alternativas.

### XGBClassifier

XGBoost (Extreme Gradient Boosting) Classifier es un algoritmo de aprendizaje automático de la familia de métodos de boosting. Se utiliza para problemas de clasificación y regresión. XGBoost combina múltiples modelos de aprendizaje débiles, generalmente árboles de decisión simples, en un predictor más robusto y preciso.

Implementamos una ampliación en la ingeniería de características, detallada en XGB.ipynb. A pesar del desequilibrio en las clases, optamos por no aplicar resampling, basándonos en una observación previa de posible sobreajuste en el modelo Random Forest.

Durante el entrenamiento, probamos distintos tamaños de división de datos y usamos Optuna para optimizar hiperparámetros, maximizando el f1_score. Analizamos las características más relevantes y eliminamos aquellas con importancia menor a 0.01, reduciendo el ruido en el modelo. Tras repetir el proceso, logramos una mejora del 0.05 en la precisión del modelo.

Para validar nuestro enfoque, evaluamos y realizamos predicciones en el conjunto de pruebas proporcionado por Kaggle, comparando con otros modelos implementados.

### Justificación del Uso de Múltiples Modelos

Decidimos utilizar varios modelos que, según nuestro criterio, pueden resolver de manera óptima el reto del Titanic. El objetivo es analizar el comportamiento de cada uno y determinar cuál es el más adecuado para satisfacer las necesidades del desafío.

