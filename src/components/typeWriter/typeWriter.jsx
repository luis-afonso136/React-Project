import PropTypes from "prop-types"; // Importa PropTypes para validação de propriedades
import Typewriter from "typewriter-effect";

function TypewriterText({ text, ...divProps }) {
  return (
    <div {...divProps}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text) // Use a string diretamente
            .pauseFor(10000)  // Pausa antes de apagar
            .deleteAll()      // Apaga o texto
            .start();         // Inicia o efeito de digitação
        }}
        options={{
          autoStart: true,
          loop: true,        // Continua a repetir
        }}
      />
    </div>
  );
}

// Adiciona a validação das propriedades
TypewriterText.propTypes = {
  text: PropTypes.string.isRequired, // 'text' deve ser uma string e é obrigatório
};

export default TypewriterText;
