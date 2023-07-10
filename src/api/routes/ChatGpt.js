const {Configuration, OpenAIApi } =  require("openai")
const configAPI = new Configuration({
  apiKey: "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"
});
const openaiAPi = new OpenAIApi(configAPI);

 let resultPrompt = ""

 // Aqui falamos que vamos receber o params description que é nosso retorno do texto da API do GISTS
async function callAPI(description) { //TODO O description que está chegando aqui está chegando vazio
  console.log( `descriçào ${description}`);
  try {
    const completion =  await openaiAPi.createCompletion ({
    model: "text-davinci-003",
    prompt: `make a story based on this text: '${description}'`, // usamos descriptions que estamos recebendo lá da API do GISTS
    temperature: 0.6,
    max_tokens: 100,
  });
  JSON.stringify({ result: completion.data.choices[0].text });
  console.log({ result: completion.data.choices[0].text });
  resultPrompt = {result: completion.data.choices[0].text }
  console.log(`resultPrompt =${JSON.stringify(resultPrompt)}`);
  return resultPrompt;
} catch (error) {
    console.log(`erros callAPi = ${error}`);
  }
}

module.exports = {callAPI}

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

//  async function call(req, res) {
//   if (!configuration.apiKey) {
//     res.status(500).json({
//       error: {
//         message: "OpenAI API key not configured, please follow instructions in README.md",
//       }
//     });
//     return;
//   }
//   try {
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: "você consegue me entender",
//       temperature: 0.6,
//     });
//     JSON.stringify({ result: completion.data.choices[0].text });
//     console.log({ result: completion.data.choices[0].text });
//   } catch(error) {
//     console.log(error);
//     if (error.response) {
      
//       // res.status(error.response.status).json(error.response.data);
//     } 
//   }
// }
// call();