"use client"
import Image from 'next/image'
import { useState } from 'react'
// import "./page.css"
const { Octokit } = require("octokit");
// Aqui estamos recebendo nossa função que chama a api do ChatGPT
const {callAPI} = require("../api/routes/ChatGpt");

const octokit = new Octokit({
  auth: "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"
})

let DataGists = ""

// faço uma chamada assincrona para a API do GISTS na qual pegamos 




export default function Home() {
  
  const [historyResult, sethistory] = useState("");
  const [gistDescription, setGists] = useState("");

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
        setGists(description.description);
        return description;
      }).finally( async () =>{
          // chamamos e api do GPT esperamos ela retornar nossa resposta, passamos para ela DataGists que recebe o retorno da API
          console.log(`res.DataGists = ${DataGists}`); 
          const storyObject = await callAPI(DataGists);
          console.log( `finally storyobject =${JSON.stringify(storyObject)}`);
          sethistory(storyObject.result);
          console.log(`sethistory = ${historyResult}`);
      })
  
    } catch (error) {
      console.log(`error octokit = ${error}`);
    }
  }


  return (
      <>
      <div>
        <h1> Crie uma história gerada pela comunicação com duas APIs diferentes.</h1>

        <button onClick={ async () =>{await getGists()}}> clique em mim </button>

        <p> A descrição do gists é: { JSON.stringify(gistDescription)}  </p>

          <p> A história gerada é: { JSON.stringify(historyResult).replace("\n\n", "texto: ")}  </p>

        <span className="spantext" > Esse trabalho foi realizado com o intuito de entender os conceitos e principios REST na prática e principalmente entender como
          Consumir APIs diferentes e integra-las gerando assim um Mashup, ou seja gerar um resultado novo misturando as funcionalidades disponiveis 
          por 2 APIs difentes, foram escolhidas a API do Gists juntamente com a API do ChatGpt, onde o Gists trás posts advindos do seu servidor e esses posts são processados
          pela API da openAI, mais específicamente o modelo "text-davinci-003" que se aproxima muito do modelo GPT3
           </span>

           </div>

            <div>
              <p className="description" >Descrição da arquitetura de comunicação</p>
              <img src="./web3Mashup.drawio.png" />

            </div>

      </>
  )
}
