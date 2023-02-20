
# Code Challenge Digital House

El proyecto de este repositorio es un code challenge que esta desarrollado en React Native con pruebas unitarias en los componentes de mas bajo nivel.

El desarrollo del proyecto se ejecuto de la siguiente manera:
* Setup
* Estructura de carpetas
* Enrutamiento
* Manejador de estado
* Peticiones al servidor
* Pruebas unitarias

## Setup

Para la instalación de paquetes se utiliza Yarn y para la ejecución de la aplicación Expo.

## Estructura de carpetas

La estructura del proyecto esta distribuido con carpetas por entidades, entre ellas: Contexts, hooks, navigator, core y features.

Se utilizo el sistema de diseño basado en atomic design, por lo que los componentes de tipo Atomos, Moleculas y Organismos, se encuentran en la ruta "~src/core/components".

Para este proyecto se utilizaron Organismos compuestos, reemplazando las plantillas, se encuentran en "~src/features/components". Y para los elementos de Páginas, se utilizarón screens que se encuentran en la siguiente ruta "~src/features/screens".

## Enrutamiento

Para el enrutamiento de la aplicación se utilizó React Navigation.

## Manejador de estado

Para el estado de la aplicación se utilizo Context Api, nativo de React, al considerar que es un proyecto pequeño se decidio por esta solución y no en alternativas como Redux.

## Peticiones al servidor

Las peticiones al servidor se manejan con fetch, nativo de javascript y asi no instalar libreria de terceros como axios o swr. Sin embargo se creo un adaptador para encapsular las peticiones y en el caso de querer cambiar a otro se pueda hacer sin afectar otros componentes que utilicen llamados al servidor. 

Sin embargo para proyectos medianos o grandes, se podria utilizar alternivas con Redux Saga, Redux Thunks o RTK Query con Axios o SWR para el manejo de los Side Effects.

## Pruebas unitarias

Para las pruebas unitarias se utilizo Testing Library y Jest.

Se incluye en el proyecto pruebas unitarias a componentes primarios.




## Instalación

Para la Instalación del proyecto se debe contar con las herramientas Expo CLI, Node js y Yarn.

Luego de confirmar la Instalación de las herramientas necesarias, puede proceder a clonar el proyecto y la instalación de dependencias.

```bash
  git clone URL_REPOSITORIO
  cd folder_my_project_cloned
```
    
## Deployment

Pasos para ejecutar el proyecto


### Instalar los paquetes necesarios

```bash
  yarn install
```

Para probar la aplicación se debe contar con un emulador de Android o IOS, o un dispositivo conectado al computador via USB.

### Levantar el ambiente de desarrollo

```bash
  yarn start
```

Luego de levantar el ambiente de desarrollo, se debera ejecutar en el tipo de plataforma que se necesite, Android o IOS.

### Levantar ambiente por plataforma Android

```bash
  yarn android
```

### Levantar ambiente por plataforma IOS

```bash
  yarn ios
```






## Running Tests

Para ejecutar las pruebas es necesario utilizar el siguiente comando

```bash
  yarn test
```

Esto ejecutara las pruebas necesarias.
