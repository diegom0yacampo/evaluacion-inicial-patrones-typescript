¿Qué significa DAO?
Significa Data Access Object (Objeto de Acceso a Datos).

¿Cuál es su responsabilidad principal?
Su única tarea es guardar y conservar los datos de forma permanente.

¿Qué relación tiene DAO con una base de datos?
El DAO es el intermediario directo. Es la clase que contiene el código específico (como consultas SQL) para interactuar con las tablas de la base de datos, ejecutar las queries y devolver los resultados.

¿Qué operaciones aparecen habitualmente en un DAO?
Aparecen las operaciones clásicas (Create, Read, Update, Delete).

¿Qué diferencia existe entre DAO y Repository?
Como concepto, el DAO es de más bajo nivel y se centra en el "CÓMO" acceder a los datos (por ejemplo, cómo hacer un SELECT exacto en una tabla SQL). En cambio, el Repository es de un nivel un poco más alto y se centra en el "QUÉ" necesita la aplicación.