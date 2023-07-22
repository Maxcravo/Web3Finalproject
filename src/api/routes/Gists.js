const { Octokit } = require("octokit");
const { useState } = require("react");
// Aqui estamos recebendo nossa função que chama a api do ChatGPT
const {callAPI} = require("./ChatGpt");

const octokit = new Octokit({
  auth: "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"
})



let DataGists = ""

// faço uma chamada assincrona para a API do GISTS na qual pegamos 
async function getGists() {
  console.log(`estou auqi`);
  try {
    octokit.request('GET /gists/public',{
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then((res)=>{
      console.log(res.status); 
      let description  = res.data.find(description=> description.description)
      console.log(`resultado do gist =${JSON.stringify(description.description)}`);
      DataGists = description.description;
      return description;
    }).finally( async () =>{
        // chamamos e api do GPT esperamos ela retornar nossa resposta, passamos para ela DataGists que recebe o retorno da API
        console.log(`res.DataGists = ${DataGists}`); 
        const storyObject = await callAPI(DataGists);
        console.log( `finally storyobject =${storyObject}`);
        return storyObject.result; 
    })

  } catch (error) {
    console.log(`error octokit = ${error}`);
  }
}