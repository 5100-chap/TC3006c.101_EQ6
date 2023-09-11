# TC3006c.101_EQ6
Repositorio del equipo 6 para la materia de Inteligencia Artificial avanzada para la ciencia de datos I y II
## Introduccion
El hundimiento del Titanic es uno de los naufragios más infames de la historia. El 15 de abril de 1912, durante su viaje inaugural, el RMS Titanic, ampliamente considerado "insumergible", se hundió después de chocar con un iceberg. Desafortunadamente, no había suficientes botes salvavidas para todos a bordo, lo que provocó la muerte de 1.502 de los 2.224 pasajeros y tripulantes.

Si bien hubo algún elemento de suerte involucrado en la supervivencia, parece que algunos grupos de personas tenían más probabilidades de sobrevivir que otros. En este reto, se construira un o varios modelos predictivos que respondan a la pregunta: "¿qué tipo de personas tenían más probabilidades de sobrevivir?" utilizando datos de los pasajeros (es decir, nombre, edad, sexo, clase socioeconómica, etc.).

Este proyecto busca arrojar luz sobre los factores que influyeron en la supervivencia de los pasajeros del Titanic, explorando patrones y relaciones en los datos. A través de la construcción de un modelo predictivo utilizando técnicas de machine learning, buscamos comprender mejor las variables que desempeñaron un papel crucial en las posibilidades de supervivencia. Esta aplicación de modelos de machine learning permite obtener información valiosa que puede ayudar a honrar la memoria de aquellos que viajaron en el trágico viaje inaugural del Titanic y aportar conocimientos útiles en el campo de la ciencia de datos y la estadística.
## Entendimiento del set de datos del Titanic

Link del dataset: https://www.kaggle.com/competitions/titanic 

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
## Parte 1: Limpieza de datos

Primeramente antes de limpiar los datos, tenemos que observar cómo están conformados estos últimos en el data frame correspondiente, en este caso tenemos en el csv las columnas PassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin y Embarked, las cuales contienen diferentes tipos de datos y estos datos se podría decir que dicha información están en crudo, haciendo que para poder trabajar en el reto, tenemos que someter a este data frame a una limpieza de datos. Así que empezamos exportando el csv que contiene los datos a una libreta en python (Jupiter Notebook), en el cual pedimos al programa que lo convirtiera a un dataframe, una vez realizado ello se pidió una mayor descripción del data frame, una vez observado los datos exportados se decidió tratar dos columnas que a nuestro criterio es importante convertirlo a un tipo de dato el cual se pueda trabajar más fácilmente para su posterior análisis, las cuales son la columna de sex y de embarked. Para la columna de Sex al ver que solo tenía dos valores posibles (male, female) usando la librería de sklearn se convirtieron dichos valores a números binarios en donde 1 representa male y el 0 representa female. Por el otro lado para la columna Embarked se tienen 3 valores los cuales son S, C y Q los cuales se contaron cuántas veces se repetían en Embarked y en base a ello y para evitar el problema de multicolinealidad perfecta se decidió eliminar en los parámetros dummies Embarked_Q, creando y dejando las columnas Embarked_S y Embarked_C, en el cual 1 representa que pertenece al embarked de esa letra y 0 que no pertenece a este último. 

Una vez realizado dichas acciones se decidió analizar la correlación de variables con un mapa de correlación, esto nos ayuda a identificar posibles variables que puedan resultar útiles para la parte dos y así poder observar de mejor forma la naturaleza de estos mismos. Una vez realizado lo anterior se contaron la cantidad de datos no nulos que tenía cada columna, ninguna de las columnas tenía valores nulos a excepción de dos, Age y Cabin, Cabin contaba con 697 valores nulos de 891 valores, por lo que solo el 22% de los datos contaban con un valor real, por esta razón decidimos que Cabin no tiene la fiabilidad necesaria que nos ayude al posterior análisis para este reto, mientras que para Age el 81% de los valores no eran nulos, esto se traduce a que solo se contaba con 177 valores nulos de 891. Por lo que decidimos reemplazar los valores vacíos.

Para reemplazarlos nos dimos cuenta que en la columna de Name la mayoría de los nombres contenían un título al inicio; Master, Mr, Miss. ó Mrs, por lo que basándonos en esto podríamos saber los rangos de edades que cada persona podría tener de acuerdo con cómo iniciaba su nombre, por lo que se obtuvo la media de edad por cada título, obteniendo una media para los niños, una para hombres y otra para mujeres, la media obtenida para mujeres incluye los valores de niñas y mujeres, esto debido a que no se pudo observar una distinción de edades entre Miss o Mrs, por lo que para las mujeres se obtuvo la media sin importar cual de estos dos títulos tenia, y esta se le asignó a los valores vacíos dependiendo del título que tuviera el nombre, de igual forma encontramos que no todos los nombres tenían estos títulos, habían algunos que o no tenían o que aparecían como Dr., por lo que se realizó el mismo proceso para este conjunto de datos. De esta manera ningún valor de Age se mantuvo vacío. Por último en esta parte usando seaborn y matplotlib decidimos si había algún valor atípico dentro del data frame, y acorde a las gráficas y a nuestro análisis llegamos a la conclusión de que no hay algún valor que sea realmente atípico y que por lo tanto amerita que sea reemplazado o modificado, haciendo que nuestro data frame se mantenga intacto y hayamos dado por concluido la limpieza de datos.
