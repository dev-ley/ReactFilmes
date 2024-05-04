import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdMic } from 'react-icons/io';

const FormSearch = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const InputFind = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;
`;

const InputButton = styled.button`
  background-color: #00a6ff;
  border: 2px solid #f7fffd;
  border-radius: 4px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: #a3f8f6;
    border: 2px solid #00a6ff;
  }
`;

const BntRec = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecordingModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #a3f8f6;
  padding: 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SpeechInput = () => {
  const [spokenText, setSpokenText] = useState('');
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!spokenText) return;
    navigate(`/search?q=${spokenText}`, { replace: true });
    setSpokenText('');
  };

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'pt-BR';

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSpokenText(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <FormSearch onSubmit={handleSubmit}>
      <InputFind
        type="text"
        placeholder="Busque um filme"
        value={spokenText}
        onChange={(e) => setSpokenText(e.target.value)}
      />
      <InputButton type="submit">
        <BiSearchAlt2 />
      </InputButton>
      <BntRec onClick={startListening}>
        <IoMdMic size={20} />
      </BntRec>
      {listening && (
        <RecordingModal>
          <p>Gravando...</p>
        </RecordingModal>
      )}
    </FormSearch>
  );
};

export default SpeechInput;
