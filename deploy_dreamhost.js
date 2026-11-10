const Client = require('ssh2-sftp-client');
const path = require('path');

async function deployToDreamHost() {
  const sftp = new Client();
  const localDir = path.resolve(__dirname, 'frontend/out');
  const remoteDir = 'htlvnetwork.org';

  console.log(`Conectando a DreamHost SFTP...`);
  await sftp.connect({
    host: '208.113.158.10',
    port: 22,
    username: 'josueflorian',
    password: 'florian-htlv@'
  });
  console.log(`Conexión exitosa.`);

  console.log(`Subiendo archivos desde ${localDir} hacia ${remoteDir}...`);
  sftp.on('upload', (info) => {
    console.log(`Subido: ${info.source}`);
  });

  try {
    const result = await sftp.uploadDir(localDir, remoteDir);
    console.log(`¡Despliegue finalizado con éxito!`, result);
  } catch (err) {
    console.error(`Error durante la subida:`, err);
  } finally {
    await sftp.end();
    console.log(`Sesión SFTP cerrada.`);
  }
}

deployToDreamHost();
