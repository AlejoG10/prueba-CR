
# La Cartelera de Hype Tecnológico

## Prueba Técnica - Posicion CR

### Estructura del Repositorio

- backend/ – API NestJS (puerto 3001)
- frontend/ – App React (puerto 3000)

### Instrucciones

1. Clonar el repositorio de manera local `git clone https://github.com/AlejoG10/prueba-CR.git`
2. Viajar al repositorio `cd prueba-CR`
3. **Dentro** de cada carpeta (`cd backend / cd frontend`):
	- Instalar sus dependencias con `npm install`o `npm i`
	- Correr el backend utilizando `npm run start:dev`
	- Correr el frontend utilizando `npm run dev`
4. Ir a http://localhost:3000/ para ver el resultado
  

### Observaciones

- Se cambió la propiedad `thumbnails.high.url` de [via.placeholder.com](https://via.placeholder.com) a [placehold.co](https://placehold.co) puesto que la url inicial estaba deprecada y no servía para renderizar las imágenes placeholders
- Se agregó una **demora aleatoria** al momento de realizar el `GET` a `/api/videos` para simular una función asincrona haciendo llamados a un proveedor externo y darle el manejo adecuado de `loading` en el front
- Se agregó la posibilidad de obtener un **error aleatorio** al momento de realizar el `GET` a `/api/videos` para simular la posibilidad de error y manejo en el frontend
- A pesar de que el enunciado decía que la ruta debía ser `GET /api/videos`, se agregó un `query param` `?page` para simular paginado en el frontend
