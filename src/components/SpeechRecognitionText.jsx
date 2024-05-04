const SpeechRecognitionText = () => {
  // Usando o hook useSpeechRecognition para acessar funcionalidades de reconhecimento de fala
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Verifica se o navegador suporta o reconhecimento de fala
  if (!browserSupportsSpeechRecognition) {
    return <span>Seu navegador não é compatível com a Pesquisa por voz</span>;
  }

  return (
    <div>
      {/* Botões para iniciar, parar e resetar o reconhecimento de fala */}
      <button onClick={SpeechRecognition.startListening}>Fale</button>
      <button onClick={SpeechRecognition.stopListening}>Pare</button>
      <button onClick={resetTranscript}>Resetar campo de Texto</button>

      {/* Exibe o texto transcritor da fala */}
      <h1>{transcript}</h1>
    </div>
  );
};

export default SpeechRecognitionText;
