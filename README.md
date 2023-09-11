# TC3006c.101_EQ6
Repositorio del equipo 6 para el Reto del Titanic de la materia de Inteligencia Artificial avanzada para la ciencia de datos I y II
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
# Estructura del Repositorio 
La carpeta princial  de este repositorio contiene los siguientes archivos y carpetas:

- Files
   - README.md: Este archivo actual que contiene introduccion, informacion del dataset y Estrucutra del Repositorio.
- Folders
   - Limpieza_de_datos: Folder con la inicial limpieza de datos del dataset del Titanic con los cambios requeridos para el modelo(la modificacion y nueva limpieza de datos se encuentra en el folder de desarrollo de modelo junto a los modelos)
   - Desarrollo_de_modelo: Folder con la implementacion de modelos de machine learning con limpieza de datos tras feedback que incluye los cambios solicitados anteriormente en la evaluacion y tambien contiene la tercera parte del reto conocida como evaluacion y refinamiento del modelo.

