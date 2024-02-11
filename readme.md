# Proyecto Node.js

Este es un proyecto de Node.js que utiliza Express para crear un servidor web y Axios para hacer solicitudes HTTP.

## Dependencias

- Node.js
- Express
- Axios
- Moment
- nodemon

## Funcionalidad

Cuando se hace una solicitud GET a la ruta base ('/'), el servidor:

1. Verifica si se proporcionó una clave API en los encabezados de la solicitud. Si no se proporcionó, devuelve un error 401.
2. Obtiene la fecha y hora actuales, resta 10 minutos y convierte el resultado en una cadena en formato ISO.
3. Hace una solicitud GET a la API de Rootnet con la dirección de un contrato Ethereum y la fecha y hora calculadas.
4. Mapea la respuesta de la API para obtener un objeto con las propiedades 'from', 'amount' y 'blockHeight' de cada transferencia.
5. Envía el resultado como respuesta a la solicitud original.

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm run dev 
```
	
## Pd:

- Nodemon es un monitor de archivos que se ejecuta automáticamente cuando detecta cambios en el código.

