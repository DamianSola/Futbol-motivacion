# ⚽ Fútbol Motivación

**Fútbol Motivación** es una mini aplicación desarrollada con **React Native** y **Gemini AI**, pensada para inspirar a jugadores de fútbol con frases motivacionales personalizadas según su edad, nombre y posición en la cancha.

---

## ✨ Tecnologías Utilizadas

- **React Native** (con soporte para Expo y Web)
- **TypeScript**
- **Gemini 1.5 Flash** (Google Generative AI)
- **AsyncStorage** (para guardar frases localmente)
- **React Navigation**

---

## 🤖 Integración con Gemini

La app utiliza el modelo de lenguaje **Gemini 1.5 Flash** mediante la dependencia `@google/generative-ai`.

- Se solicita al usuario:
  - Nombre
  - Edad
  - Posición
- Se genera una frase motivacional personalizada usando un *prompt* simple con estos datos.
- La API key de Gemini se configura de forma segura usando `app.config.js` y el campo `extra` en el proyecto Expo.

---

## 🚀 Capturas de pantalla

| Pantalla de bienvenida | Pantalla de formulario | Resultado generado |
|------------------------|------------------------|--------------------|
| ![Imagen de WhatsApp 2025-05-23 a las 18 51 59_a31bd5c3](https://github.com/user-attachments/assets/41fd9e7b-6fb9-4a01-944c-9ac796474c9b) | ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_29f0f664](https://github.com/user-attachments/assets/8b891fbe-e486-47c0-90c7-039532df36d8) | ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_a52c636e](https://github.com/user-attachments/assets/062fb1d7-e033-4136-b984-1228e4544cb0) |
| Frases guardadas | 
| ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_a0e74b5b](https://github.com/user-attachments/assets/9a6d3bd0-50b9-4536-81a8-823d7b3d4390) | 

---
![Imagen de WhatsApp 2025-05-23 a las 18 51 59_a31bd5c3](https://github.com/user-attachments/assets/41fd9e7b-6fb9-4a01-944c-9ac796474c9b)
![Imagen de WhatsApp 2025-05-23 a las 18 51 58_29f0f664](https://github.com/user-attachments/assets/8b891fbe-e486-47c0-90c7-039532df36d8)
![Imagen de WhatsApp 2025-05-23 a las 18 51 58_a52c636e](https://github.com/user-attachments/assets/062fb1d7-e033-4136-b984-1228e4544cb0)
![Imagen de WhatsApp 2025-05-23 a las 18 51 58_a0e74b5b](https://github.com/user-attachments/assets/9a6d3bd0-50b9-4536-81a8-823d7b3d4390)

## 📦 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/futbol-motivacion.git
   cd futbol-motivacion
