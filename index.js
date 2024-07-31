const { TerrariaServer } = require('terraria-server');

const server = new TerrariaServer({
  version: "1.4.4.9",
  worldId: 1,
  maxPlayers: 16,
  port: 7777,
  autoForwardPort: true,
  password: "",
  motd: ""
});

server.download()
  .then(() => {
    server.start()
      .then(() => {
        console.log('Server Started');
      })
      .catch((error) => {
        console.error('Error starting server:', error);
      });
  })
  .catch((error) => {
    console.error('Error downloading server files:', error);
  });

server.on('start', () => {
  console.log('Server Started');
});