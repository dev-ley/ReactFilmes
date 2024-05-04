import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const SpeechRecognitionText = () => {
  const { 
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognation
  } = useSpeechRecognition()

  if(!browserSupportsSpeechRecognation) return (<span>Seu navegador não é compativel com a Pesquisa por voz</span>)

  return (
    <div>
          
    <button onClick={SpeechRecognition.startListening}>Fale</button>
    <button onClick={SpeechRecognition.stopListening}>Pare</button>
    <button onClick={resetTranscript}>Resetar campo de Texto</button>

    <h1>{transcript}</h1>
    </div>
  )
}

export default SpeechRecognitionText
