exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Hello World 2021 Nov 06", token: process.env.SOME_ENV_VAR})
  };
}
