# TC3006c.101_EQ6
Repositorio del equipo 6 para la materia de Inteligencia Artificial avanzada para la ciencia de datos I y II

## Parte uno: Limpieza de datos
### Los archivos se pueden encontrar en ./Limpieza_de_datos junto a su respectivo Jupyter notebook

Antes de limpiar los datos, debemos observar cómo están estructurados en el data frame correspondiente. En este caso, el CSV contiene las columnas PassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin y Embarked. Estas columnas contienen diferentes tipos de datos, y se podría decir que esta información está en bruto. Para poder trabajar en el reto, es necesario someter a este data frame a un proceso de limpieza de datos.

Comenzamos importando el CSV a una libreta en Python (Jupyter Notebook) y solicitamos al programa que lo convirtiera a un data frame. Una vez hecho esto, pedimos una descripción detallada del data frame. Tras observar los datos, decidimos tratar dos columnas que, a nuestro criterio, es importante convertir a un tipo de dato que facilite su posterior análisis: las columnas Sex y Embarked.

Para la columna de Sex, al observar que solo tenía dos valores posibles (male, female), utilizamos la librería sklearn para convertir estos valores a números binarios: 1 representa "male" y 0 representa "female".

En cuanto a la columna Embarked, que tiene tres valores posibles (S, C y Q), contamos cuántas veces se repetía cada valor. Para evitar el problema de multicolinealidad perfecta, decidimos eliminar el parámetro dummy Embarked_Q, dejando solo las columnas Embarked_S y Embarked_C. En estas columnas, el valor 1 indica que pertenece al Embarked correspondiente y 0 indica lo contrario.

Posteriormente, analizamos la correlación de variables con un mapa de correlación para identificar posibles variables útiles para la segunda parte y comprender mejor la naturaleza de estos datos.

Luego, contamos la cantidad de datos no nulos en cada columna. Solo las columnas Age y Cabin tenían valores nulos. Cabin tenía 697 valores nulos de 891, por lo que solo el 22% de los datos eran reales. Decidimos que Cabin no era confiable para nuestro análisis. En cuanto a Age, el 81% de los datos eran no nulos, lo que significa que había 177 valores nulos de 891. Decidimos reemplazar estos valores vacíos.

Notamos que en la columna Name, la mayoría de los nombres tenían un título al inicio, como Master, Mr, Miss o Mrs. Basándonos en esto, determinamos los rangos de edad que podría tener cada persona según su título. Calculamos la media de edad por título y asignamos estas medias a los valores vacíos correspondientes. Algunos nombres no tenían estos títulos o tenían otros como Dr., por lo que aplicamos el mismo proceso para estos casos. De esta manera, ningún valor de Age quedó vacío.

Finalmente, utilizando Seaborn y Matplotlib, determinamos si había algún valor atípico en el data frame. Según nuestras gráficas y análisis, concluimos que no había valores realmente atípicos que requirieran ser reemplazados o modificados. Así, concluimos la limpieza de datos.

## Parte dos: Selección, configuración y entrenamiento del modelo
