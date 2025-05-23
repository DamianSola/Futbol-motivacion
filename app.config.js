import 'dotenv/config';

export default {
  expo: {
    name: "futbol-motivacion",
    slug: "Futbol Motivacion",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/splash-icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#01055f"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/splash-icon.png",
        backgroundColor: "#01055f"
      },
      edgeToEdgeEnabled: true
    },
    web: {
      favicon: "./assets/splash-icon.png"
    },
    extra: {
      GEMINI_API_KEY: process.env.GEMINI_API_KEY
    }
  }
};
