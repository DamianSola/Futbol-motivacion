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
| ![Jugador de fútbol bajo la lluvia](https://github.com/user-attachments/assets/b7c8cdf9-bea4-4ce3-a0bc-34cf052ddc48) | ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_0a4f78b3](https://github.com/user-attachments/assets/03cb4ed1-0fd2-4d9e-97ce-e2e7c5778e56) | ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_a0e74b5b](https://github.com/user-attachments/assets/e32632a6-4530-42c6-b68c-e776989bb1e1) |
| Resultado (continuación) | Frases guardadas |
| ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_29f0f664](https://github.com/user-attachments/assets/d00c2ac0-106b-412c-8c44-a125ade46e53) | ![Imagen de WhatsApp 2025-05-23 a las 18 51 58_a52c636e](https://github.com/user-attachments/assets/d0d2726c-fbda-49cb-a773-3ca895acb85f) |

---

## 📦 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/futbol-motivacion.git
   cd futbol-motivacion
