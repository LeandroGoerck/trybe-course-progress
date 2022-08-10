  // src/index.ts

  import App from './app';

  const app = new App().express;

  const PORT = process.env.PORT || 3005;

  app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
  });