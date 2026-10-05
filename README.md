# MotoZone 🏍️

## Descripción

MotoZone es una plataforma para consultar y adquirir repuestos y accesorios para motocicletas.

El sistema permitirá a los usuarios buscar productos de acuerdo con la marca y modelo de su motocicleta, consultar información de los productos y realizar pedidos.

## Problema

Los motociclistas muchas veces tienen dificultades para encontrar repuestos y accesorios compatibles con su motocicleta.

MotoZone busca facilitar esta búsqueda organizando los productos según categorías, marcas, modelos y compatibilidad.

## Solución

Se desarrollará una plataforma basada en microservicios que permita gestionar:

- Usuarios y autenticación.
- Productos y compatibilidad con motocicletas.
- Pedidos.
- Comunicación mediante una API Gateway.
- Autenticación mediante JWT.

## Integrantes

- Juan José Quintero
- Felipe González

## Tecnologías

- Node.js
- Express
- JavaScript
- Axios
- JWT
- Git
- GitHub

## Arquitectura

El proyecto utilizará una arquitectura de microservicios por capas:

Cliente → API Gateway → Microservicios

Cada microservicio tendrá una estructura organizada en:

- Controller
- Service
- Repository
- Model
- Routes