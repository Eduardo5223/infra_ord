# Usa una imagen base de Node.js
FROM node:14

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias 
RUN npm install

# Copia el resto de los archivos de la aplicacion 
COPY . .

# Expone el puerto 8080
EXPOSE 8080 

# Comando para ejecutar la aplicacion 
CMD [ "node", "app.js" ]