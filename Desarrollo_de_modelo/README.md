# TC3006c.101_EQ6
Repositorio del equipo 6 para la materia de Inteligencia Artificial avanzada para la ciencia de datos I y II

## Parte 2: Selección, configuración y entrenamiento del modelo

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

## Parte 3: Reto Evaluación y Refinamiento de modelo

Evaluación y Refinamiento del modelo

Hemos dividido nuestros datos en conjuntos de entrenamiento y prueba para evaluar y mejorar nuestro modelo, utilizando una proporción de 0.1 para el conjunto de prueba y el resto para el entrenamiento. Luego de experimentar con diversas proporciones de esta división, hemos determinado que esta configuración nos proporciona los mejores resultados.

Para evaluar nuestros modelos, hemos optado por utilizar la métrica F1-score. Esta elección se debe a la presencia de cierto desequilibrio entre las clases, lo que hace que el F1-score sea la métrica más adecuada para la evaluación de nuestro modelo.

Después de llevar a cabo una serie de análisis utilizando múltiples modelos de aprendizaje automático en nuestro conjunto de datos, hemos obtenido resultados prometedores en términos de precisión, con valores superiores al 80%. Sin embargo, es importante destacar que algunos modelos han demostrado un rendimiento superior a otros.

En este contexto, hemos decidido seleccionar el modelo XGBoost (XGB) de entre todos los modelos evaluados. Este modelo en particular ha destacado al lograr una precisión del 85.55%, superando a otros modelos como el árbol de decisiones (decision tree) y el bosque aleatorio (random forest). Cabe mencionar que este alto nivel de precisión nos brinda confianza en su capacidad para realizar predicciones precisas en datos del mundo real.

Además, tenemos la intención de optimizar aún más el rendimiento del modelo XGBoost con el objetivo de mejorar su eficiencia y su capacidad predictiva, sin incurrir en problemas de sobreajuste (overfitting) ni subajuste (underfitting). Esta optimización nos permitirá aprovechar al máximo el potencial de este modelo en futuras aplicaciones y escenarios.

Para optimizar los hiper parámetros, hemos empleado un algoritmo de optimización bayesiana llamado Optuna. Le proporcionamos un rango de valores para los hiper parámetros y realizamos 100 iteraciones, ajustando además las proporciones en la división de datos y eliminando variables que no contribuyeron significativamente al modelo, basándonos en la importancia de características (feature importance).

Es evidente que hemos logrado una mejora en el F1-score, que era nuestro objetivo principal. Esto indica que este es el mejor modelo que hemos obtenido hasta la fecha. Es posible que valga la pena aplicar un enfoque similar a los demás modelos para explorar la posibilidad de mejorarlos aún más.

