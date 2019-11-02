const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.post("/check-hook", (req, res) => {
  console.log("running web hook");
  req.log.info({ req });
  res.send("OKAY! done");
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(6000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
