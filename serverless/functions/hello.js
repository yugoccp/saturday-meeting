exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Hello World", token: process.env.SOME_ENV_VAR})
  };
}
