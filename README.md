Antes que nada, ejecutar los siguientes comandos
npm install
npm install expo
y luego
npx expo install --fix

En cuanto se ejecutan ambos comandos en 2 terminales diferentes
(node server.js, que devuelve "Servidor corriendo en http://localhost:3000" y npm run dev que devuelve el link para ejecutar en web)
Se muestra un inicio de sesion, validado por JWT.
Los datos a ingresar son
- Usuario: user
- Contraseña: password
Luego, en caso de que los datos ingresados sean correctos, redirecciona automaticamente a la home de la pokédex
(en caso de que sean erroneos, aparecerá un mensaje de error)
