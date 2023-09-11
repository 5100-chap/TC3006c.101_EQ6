# TC3006c.101_EQ6
Repositorio del equipo 6 para la materia de Inteligencia Artificial avanzada para la ciencia de datos I y II
## Introduccion
El hundimiento del Titanic es uno de los naufragios más infames de la historia. El 15 de abril de 1912, durante su viaje inaugural, el RMS Titanic, ampliamente considerado "insumergible", se hundió después de chocar con un iceberg. Desafortunadamente, no había suficientes botes salvavidas para todos a bordo, lo que provocó la muerte de 1.502 de los 2.224 pasajeros y tripulantes.

Si bien hubo algún elemento de suerte involucrado en la supervivencia, parece que algunos grupos de personas tenían más probabilidades de sobrevivir que otros. En este reto, se construira un o varios modelos predictivos que respondan a la pregunta: "¿qué tipo de personas tenían más probabilidades de sobrevivir?" utilizando datos de los pasajeros (es decir, nombre, edad, sexo, clase socioeconómica, etc.).

Este proyecto busca arrojar luz sobre los factores que influyeron en la supervivencia de los pasajeros del Titanic, explorando patrones y relaciones en los datos. A través de la construcción de un modelo predictivo utilizando técnicas de machine learning, buscamos comprender mejor las variables que desempeñaron un papel crucial en las posibilidades de supervivencia. Esta aplicación de modelos de machine learning permite obtener información valiosa que puede ayudar a honrar la memoria de aquellos que viajaron en el trágico viaje inaugural del Titanic y aportar conocimientos útiles en el campo de la ciencia de datos y la estadística.
## Entendimiento del set de datos del Titanic
El conjunto de datos del Titanic es una colección de información recopilada sobre los pasajeros que abordaron el famoso transatlántico RMS Titanic en su viaje inaugural en abril de 1912. Este conjunto de datos se ha convertido en un referente en el mundo de la ciencia de datos y el aprendizaje automático, y se utiliza comúnmente para ejercicios de análisis y modelado predictivo. A continuación, se describen algunas de las principales características incluidas en el conjunto de datos:

- PassengerId: Este campo representa un número único asignado a cada pasajero. Se utiliza para identificar de manera exclusiva a cada persona en el conjunto de datos.

- Survived: Esta variable es binaria y refleja si un pasajero sobrevivió o no al desastre. Un valor de "1" indica que el pasajero sobrevivió, mientras que un valor de "0" indica que no lo hizo.

- Pclass (Clase): La variable de clase representa la clase socioeconómica del pasajero. Puede tomar uno de tres valores: "1" para Primera Clase, "2" para Segunda Clase y "3" para Tercera Clase.

- Name (Nombre): Esta columna contiene el nombre completo de cada pasajero.

- Sex (Sexo): La variable de sexo indica el género del pasajero y puede ser "male" para masculino o "female" para femenino.

- Age (Edad): Representa la edad del pasajero en años.

- SibSp (Hermanos/Cónyuges a bordo): Indica la cantidad de hermanos o cónyuges que el pasajero tenía a bordo del Titanic.

- Parch (Padres/Hijos a bordo): Muestra la cantidad de padres o hijos que el pasajero tenía a bordo.

- Ticket (Boleto): Esta variable contiene el número de boleto del pasajero.

- Fare (Tarifa): Indica la tarifa que el pasajero pagó por su boleto.

- Cabin (Cabina): Representa el número de cabina del pasajero, cuando se conoce.

- Embarked (Puerto de Embarque): Indica el puerto de embarque del pasajero y puede tomar uno de tres valores: "C" para Cherbourg, "Q" para Queenstown y "S" para Southampton.

Estas variables proporcionan información detallada sobre los pasajeros a bordo del Titanic, la diferencia entre el csv de datos de entrenamiento y prueba es que los de entrenamiento tienen la variable adicional survived descrita anteriormente mientras que los datos de prueba no con el fin de que el modelo que se eliga pueda trabajar con la division de datos y aprenda de estos. 
El dataset esta conformado por 10 variables mencionadas anteriormente teniendo en total 891 datos cada columna de tipo int o float excepto dos que tienen algunos valores o datos tipo object indicando que estan presentes ciertos valores nulos, combinando el total de la cantidad de columnas por filas sin tomar los valores nulos el dataset tiene 9826 datos en total, este numero podra subir o bajar dependiendo de el reemplazo o eliminacion de datos nulos que se mostrara a continuacion.
## Parte uno: Limpieza de datos

Antes de limpiar los datos, debemos observar cómo están estructurados en el data frame correspondiente. En este caso, el CSV contiene las columnas PassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin y Embarked. Estas columnas contienen diferentes tipos de datos, y se podría decir que esta información está en bruto. Para poder trabajar en el reto, es necesario someter a este data frame a un proceso de limpieza de datos.

Comenzamos importando el CSV a una libreta en Python (Jupyter Notebook) y solicitamos al programa que lo convirtiera a un data frame. Una vez hecho esto, pedimos una descripción detallada del data frame. Tras observar los datos, decidimos tratar dos columnas que, a nuestro criterio, es importante convertir a un tipo de dato que facilite su posterior análisis: las columnas Sex y Embarked.

Para la columna de Sex, al observar que solo tenía dos valores posibles (male, female), utilizamos la librería sklearn para convertir estos valores a números binarios: 1 representa "male" y 0 representa "female".

En cuanto a la columna Embarked, que tiene tres valores posibles (S, C y Q), contamos cuántas veces se repetía cada valor. Para evitar el problema de multicolinealidad perfecta, decidimos eliminar el parámetro dummy Embarked_Q, dejando solo las columnas Embarked_S y Embarked_C. En estas columnas, el valor 1 indica que pertenece al Embarked correspondiente y 0 indica lo contrario.

Posteriormente, analizamos la correlación de variables con un mapa de correlación para identificar posibles variables útiles para la segunda parte y comprender mejor la naturaleza de estos datos.

Luego, contamos la cantidad de datos no nulos en cada columna. Solo las columnas Age y Cabin tenían valores nulos. Cabin tenía 697 valores nulos de 891, por lo que solo el 22% de los datos eran reales. Decidimos que Cabin no era confiable para nuestro análisis. En cuanto a Age, el 81% de los datos eran no nulos, lo que significa que había 177 valores nulos de 891. Decidimos reemplazar estos valores vacíos.

Notamos que en la columna Name, la mayoría de los nombres tenían un título al inicio, como Master, Mr, Miss o Mrs. Basándonos en esto, determinamos los rangos de edad que podría tener cada persona según su título. Calculamos la media de edad por título y asignamos estas medias a los valores vacíos correspondientes. Algunos nombres no tenían estos títulos o tenían otros como Dr., por lo que aplicamos el mismo proceso para estos casos. De esta manera, ningún valor de Age quedó vacío.

Finalmente, utilizando Seaborn y Matplotlib, determinamos si había algún valor atípico en el data frame. Según nuestras gráficas y análisis, concluimos que no había valores realmente atípicos que requirieran ser reemplazados o modificados. Una vez concluimos la limpieza de datos exportamos dichos datos en la carpeta de "../Desarrollo_de_modelo".
