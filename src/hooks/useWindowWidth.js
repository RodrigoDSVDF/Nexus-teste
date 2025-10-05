import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Função que atualiza o state com a largura da tela
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Adiciona um listener para o evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Função de limpeza: remove o listener quando o componente for desmontado
    // Isso é importante para evitar vazamentos de memória
    return () => window.removeEventListener('resize', handleResize);
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez (na montagem)

  return windowWidth;
}

export default useWindowWidth;
