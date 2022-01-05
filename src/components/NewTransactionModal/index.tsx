import React from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({isOpen, onRequestClose}) => {
  return (
      <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
         <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar Modal" />
         </button>
          <Container>
            <h2>Cadastrar transação</h2>
            <input type="text" placeholder='Título' />
            <input type="text" placeholder='Valor' />
            <input type="text" placeholder='Categoria' />
            <button type="submit">Cadastrar</button>
          </Container>
          

      </Modal>
  );
}

