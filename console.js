document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");
  
    // Mapeamento de pesquisa para URLs
    const searchMapping = {
        "ginástica": "TesteProtótipo2.html",
        "Ginástica": "TesteProtótipo2.html",
        "GINÁSTICA": "TesteProtótipo2.html",
        "treinamento": "TesteProtótipo2.html",
        "Treinamento": "TesteProtótipo2.html",
        "TREINAMENTO": "TesteProtótipo2.html",
        "exercício": "TesteProtótipo2.html",
        "Exercício": "TesteProtótipo2.html",
        "EXERCÍCIO": "TesteProtótipo2.html",
        "saúde": "TesteProtótipo2.html",
        "Saúde": "TesteProtótipo2.html",
        "SAÚDE": "TesteProtótipo2.html",
        "condicionamento físico": "TesteProtótipo2.html",
        "Condicionamento físico": "TesteProtótipo2.html",
        "CONDICIONAMENTO FÍSICO": "TesteProtótipo2.html",
        "bem-estar": "TesteProtótipo2.html",
        "Bem-estar": "TesteProtótipo2.html",
        "BEM-ESTAR": "TesteProtótipo2.html",
        "estresse": "TesteProtótipo2.html",
        "Estresse": "TesteProtótipo2.html",
        "ESTRESSE": "TesteProtótipo2.html",
        "endorfinas": "TesteProtótipo2.html",
        "Endorfinas": "TesteProtótipo2.html",
        "ENDORFINAS": "TesteProtótipo2.html",
        "atividade social": "TesteProtótipo2.html",
        "Atividade social": "TesteProtótipo2.html",
        "ATIVIDADE SOCIAL": "TesteProtótipo2.html",
        "parques": "TesteProtótipo2.html",
        "Parques": "TesteProtótipo2.html",
        "praia": "TesteProtótipo2.html",
        "Praia": "TesteProtótipo2.html",
        "ritmo": "TesteProtótipo2.html",
        "Ritmo": "TesteProtótipo2.html",
        "duração": "TesteProtótipo2.html",
        "Duração": "TesteProtótipo2.html",
        "terreno": "TesteProtótipo2.html",
        "Terreno": "TesteProtótipo2.html",
        "baixo impacto": "TesteProtótipo2.html",
        "Baixo impacto": "TesteProtótipo2.html",
        "Técnica": "TesteProtótipo2.html",
        "Técnica de natação": "TesteProtótipo2.html",
        "Reabilitação": "TesteProtótipo2.html",
        "Lesões": "TesteProtótipo2.html",
        "Leveza": "TesteProtótipo2.html",
        "Suporte": "TesteProtótipo2.html",
        "Tensão nas articulações": "TesteProtótipo2.html",
        "Relaxar": "TesteProtótipo2.html",
        "Aprimorar o estresse": "TesteProtótipo2.html",
        "Imersão na água": "TesteProtótipo2.html",
        "Tranquilo": "TesteProtótipo2.html",
        "Desconectar": "TesteProtótipo2.html",
        "Respiração": "TesteProtótipo2.html",
        "Forte": "TesteProtótipo2.html",
        "Socialização": "TesteProtótipo2.html",
        "Bem-estar emocional": "TesteProtótipo2.html",
        "Participação ativa": "TesteProtótipo2.html",
        "Inclusão dos idosos nos esportes": "TesteProtótipo2.html",
        "Idosos": "TesteProtótipo2.html",
        "Roupas leves": "TesteProtótipo2.html",
        "Calçados confortáveis": "TesteProtótipo2.html",
        "Sapatilhas de sola fina": "TesteProtótipo2.html",
        "Espaço tranquilo": "TesteProtótipo2.html",
        "Movimentos suaves": "TesteProtótipo2.html",
        "Atividade acessível": "TesteProtótipo2.html",
        "Baixo custo": "TesteProtótipo2.html",
        "Paz interior": "TesteProtótipo2.html",
"Autoconhecimento": "TesteProtótipo2.html",
"Florescer": "TesteProtótipo2.html",
"Treinamento funcional": "TesteProtótipo2.html",
"Surfe de remo": "TesteProtótipo2.html",
"Treino de força": "TesteProtótipo2.html",
"Treino em grupo": "TesteProtótipo2.html",
"Ginástica aeróbica": "TesteProtótipo2.html",
"Esqui": "TesteProtótipo2.html",
"Nadar sincronizado": "TesteProtótipo2.html",
"Jogging": "TesteProtótipo2.html",
"Treino de circuito": "TesteProtótipo2.html",
"Corrida de rua": "TesteProtótipo2.html",
"Maratona": "TesteProtótipo2.html",
"Treinador pessoal": "TesteProtótipo2.html",
"Rotina de exercícios": "TesteProtótipo2.html",
"Condicionamento cardiovascular": "TesteProtótipo2.html",
"Exercício ao ar livre": "TesteProtótipo2.html",
"Exercício em casa": "TesteProtótipo2.html",
"Exercício para perda de peso": "TesteProtótipo2.html",
"Exercício para ganho de massa muscular": "TesteProtótipo2.html",
"Suplementos alimentares": "TesteProtótipo2.html",
"Dieta equilibrada": "TesteProtótipo2.html",
"Reabilitação física": "TesteProtótipo2.html",
"Exercícios de aquecimento": "TesteProtótipo2.html",
"Exercícios de alongamento": "TesteProtótipo2.html",
"Monitoramento de progresso": "TesteProtótipo2.html",
"Vida saudável": "TesteProtótipo2.html",
"Programa de treinamento": "TesteProtótipo2.html",
"Exercício de respiração": "TesteProtótipo2.html",
"Equilíbrio emocional": "TesteProtótipo2.html",
"Prática regular": "TesteProtótipo2.html",
"Saúde mental": "TesteProtótipo2.html",
"Condicionamento físico geral": "TesteProtótipo2.html",
"Exercício de alta intensidade": "TesteProtótipo2.html",
"Exercício de baixa intensidade": "TesteProtótipo2.html",
"Treinamento de resistência": "TesteProtótipo2.html",
"Treinamento de flexibilidade": "TesteProtótipo2.html",
"Exercícios aeróbicos": "TesteProtótipo2.html",
"Exercícios anaeróbicos": "TesteProtótipo2.html",
"Exercício de Pilates": "TesteProtótipo2.html",
"Exercício de Crossfit": "TesteProtótipo2.html",
"Exercício de Yoga": "TesteProtótipo2.html",
"Exercício de meditação": "TesteProtótipo2.html",
"Exercício de Pilates": "TesteProtótipo2.html",
"Exercício de Crossfit": "TesteProtótipo2.html",
"Exercício de Yoga": "TesteProtótipo2.html",
"Exercício de meditação": "TesteProtótipo2.html",
"corrida": "TesteProtótipo2.html",
"Corrida": "TesteProtótipo2.html",
"CORRIDA": "TesteProtótipo2.html",
"musculação": "TesteProtótipo2.html",
"Musculação": "TesteProtótipo2.html",
"MUSCULAÇÃO": "TesteProtótipo2.html",
"yoga": "TesteProtótipo2.html",
"Yoga": "TesteProtótipo2.html",
"YOGA": "TesteProtótipo2.html",
"pilates": "TesteProtótipo2.html",
"Pilates": "TesteProtótipo2.html",
"PILATES": "TesteProtótipo2.html",
"ciclismo": "TesteProtótipo2.html",
"Ciclismo": "TesteProtótipo2.html",
"CICLISMO": "TesteProtótipo2.html",
"hidroginástica": "TesteProtótipo2.html",
"Hidroginástica": "TesteProtótipo2.html",
"HIDROGINÁSTICA": "TesteProtótipo2.html",
"dança": "TesteProtótipo2.html",
"Dança": "TesteProtótipo2.html",
"DANÇA": "TesteProtótipo2.html",
"alongamento": "TesteProtótipo2.html",
"Alongamento": "TesteProtótipo2.html",
"ALONGAMENTO": "TesteProtótipo2.html",
"pular corda": "TesteProtótipo2.html",
"Pular corda": "TesteProtótipo2.html",
"PULAR CORDA": "TesteProtótipo2.html",
"escalada": "TesteProtótipo2.html",
"Escalada": "TesteProtótipo2.html",
"ESCALADA": "TesteProtótipo2.html",
"treinamento funcional": "TesteProtótipo2.html",
"Treinamento funcional": "TesteProtótipo2.html",
"TREINAMENTO FUNCIONAL": "TesteProtótipo2.html",
"surf": "TesteProtótipo2.html",
"Surf": "TesteProtótipo2.html",
"SURF": "TesteProtótipo2.html",
"nadar": "TesteProtótipo2.html",
"Nadar": "TesteProtótipo2.html",
"NADAR": "TesteProtótipo2.html",
"remo": "TesteProtótipo2.html",
"Remo": "TesteProtótipo2.html",
"REMO": "TesteProtótipo2.html",
"boxe": "TesteProtótipo2.html",
"Boxe": "TesteProtótipo2.html",
"BOXE": "TesteProtótipo2.html",
"musculação": "TesteProtótipo2.html",
"Musculação": "TesteProtótipo2.html",
"MUSCULAÇÃO": "TesteProtótipo2.html",
"kickboxing": "TesteProtótipo2.html",
"Kickboxing": "TesteProtótipo2.html",
"KICKBOXING": "TesteProtótipo2.html",
"ginástica aeróbica": "TesteProtótipo2.html",
"Ginástica aeróbica": "TesteProtótipo2.html",
"GINÁSTICA AERÓBICA": "TesteProtótipo2.html",
"esqui": "TesteProtótipo2.html",
"Esqui": "TesteProtótipo2.html",
"ESQUI": "TesteProtótipo2.html",
"nadar sincronizado": "TesteProtótipo2.html",
"Nadar sincronizado": "TesteProtótipo2.html",
"NADAR SINCRONIZADO": "TesteProtótipo2.html",
"jogging": "TesteProtótipo2.html",
"Jogging": "TesteProtótipo2.html",
"JOGGING": "TesteProtótipo2.html",
"treino de circuito": "TesteProtótipo2.html",
"Treino de circuito": "TesteProtótipo2.html",
"TREINO DE CIRCUITO": "TesteProtótipo2.html",
"surfe de remo": "TesteProtótipo2.html",
"Surfe de remo": "TesteProtótipo2.html",
"SURFE DE REMO": "TesteProtótipo2.html",
"treino de força": "TesteProtótipo2.html",
"Treino de força": "TesteProtótipo2.html",
"TREINO DE FORÇA": "TesteProtótipo2.html",
"treino em grupo": "TesteProtótipo2.html",
"Treino em grupo": "TesteProtótipo2.html",
"corrida": "TesteProtótipo2.html",
"Corrida": "TesteProtótipo2.html",
"CORRIDA": "TesteProtótipo2.html",
"musculação": "TesteProtótipo2.html",
"Musculação": "TesteProtótipo2.html",
"MUSCULAÇÃO": "TesteProtótipo2.html",
"yoga": "TesteProtótipo2.html",
"Yoga": "TesteProtótipo2.html",
"YOGA": "TesteProtótipo2.html",
"pilates": "TesteProtótipo2.html",
"Pilates": "TesteProtótipo2.html",
"PILATES": "TesteProtótipo2.html",
"ciclismo": "TesteProtótipo2.html",
"Ciclismo": "TesteProtótipo2.html",
"CICLISMO": "TesteProtótipo2.html",
"hidroginástica": "TesteProtótipo2.html",
"Hidroginástica": "TesteProtótipo2.html",
"HIDROGINÁSTICA": "TesteProtótipo2.html",
"dança": "TesteProtótipo2.html",
"Dança": "TesteProtótipo2.html",
"DANÇA": "TesteProtótipo2.html",
"alongamento": "TesteProtótipo2.html",
"Alongamento": "TesteProtótipo2.html",
"ALONGAMENTO": "TesteProtótipo2.html",
"pular corda": "TesteProtótipo2.html",
"Pular corda": "TesteProtótipo2.html",
"PULAR CORDA": "TesteProtótipo2.html",
"escalada": "TesteProtótipo2.html",
"Escalada": "TesteProtótipo2.html",
"ESCALADA": "TesteProtótipo2.html",
"treinamento funcional": "TesteProtótipo2.html",
"Treinamento funcional": "TesteProtótipo2.html",
"TREINAMENTO FUNCIONAL": "TesteProtótipo2.html",
"surf": "TesteProtótipo2.html",
"Surf": "TesteProtótipo2.html",
"SURF": "TesteProtótipo2.html",
"nadar": "TesteProtótipo2.html",
"Nadar": "TesteProtótipo2.html",
"NADAR": "TesteProtótipo2.html",
"remo": "TesteProtótipo2.html",
"Remo": "TesteProtótipo2.html",
"REMO": "TesteProtótipo2.html",
"boxe": "TesteProtótipo2.html",
"Boxe": "TesteProtótipo2.html",
"BOXE": "TesteProtótipo2.html",
"musculação": "TesteProtótipo2.html",
"Musculação": "TesteProtótipo2.html",
"MUSCULAÇÃO": "TesteProtótipo2.html",
"kickboxing": "TesteProtótipo2.html",
"Kickboxing": "TesteProtótipo2.html",
"KICKBOXING": "TesteProtótipo2.html",
"ginástica aeróbica": "TesteProtótipo2.html",
"Ginástica aeróbica": "TesteProtótipo2.html",
"GINÁSTICA AERÓBICA": "TesteProtótipo2.html",
"esqui": "TesteProtótipo2.html",
"Esqui": "TesteProtótipo2.html",
"ESQUI": "TesteProtótipo2.html",
"nadar sincronizado": "TesteProtótipo2.html",
"Nadar sincronizado": "TesteProtótipo2.html",
"NADAR SINCRONIZADO": "TesteProtótipo2.html",
"jogging": "TesteProtótipo2.html",
"Jogging": "TesteProtótipo2.html",
"JOGGING": "TesteProtótipo2.html",
"treino de circuito": "TesteProtótipo2.html",
"Treino de circuito": "TesteProtótipo2.html",
"TREINO DE CIRCUITO": "TesteProtótipo2.html",
"surfe de remo": "TesteProtótipo2.html",
"Surfe de remo": "TesteProtótipo2.html",
"SURFE DE REMO": "TesteProtótipo2.html",
"treino de força": "TesteProtótipo2.html",
"Treino de força": "TesteProtótipo2.html",
"TREINO DE FORÇA": "TesteProtótipo2.html",
"treino em grupo": "TesteProtótipo2.html",
"Treino em grupo": "TesteProtótipo2.html",
"TREINO EM GRUPO": "TesteProtótipo2.html",
"natação artística": "TesteProtótipo2.html",
"Natação artística": "TesteProtótipo2.html",
"NATAÇÃO ARTÍSTICA": "TesteProtótipo2.html",
"treino ao ar livre": "TesteProtótipo2.html",
"Treino ao ar livre": "TesteProtótipo2.html",
"TREINO AO AR LIVRE": "TesteProtótipo2.html",
"boxe tailandês": "TesteProtótipo2.html",
"Boxe tailandês": "TesteProtótipo2.html",
"BOXE TAILANDÊS": "TesteProtótipo2.html",
"ginástica rítmica": "TesteProtótipo2.html",
"Ginástica rítmica": "TesteProtótipo2.html",
"GINÁSTICA RÍTMICA": "TesteProtótipo2.html",
"patinação no gelo": "TesteProtótipo2.html",
"Patinação no gelo": "TesteProtótipo2.html",
"PATINAÇÃO NO GELO": "TesteProtótipo2.html",
"salto em altura": "TesteProtótipo2.html",
"Salto em altura": "TesteProtótipo2.html",
"SALTO EM ALTURA": "TesteProtótipo2.html",
"karatê": "TesteProtótipo2.html",
"Karatê": "TesteProtótipo2.html",
"KARATÊ": "TesteProtótipo2.html",
"treino de resistência": "TesteProtótipo2.html",
"Treino de resistência": "TesteProtótipo2.html",
"TREINO DE RESISTÊNCIA": "TesteProtótipo2.html",
"basquete": "TesteProtótipo2.html",
"Basquete": "TesteProtótipo2.html",
"BASQUETE": "TesteProtótipo2.html",
"vôlei": "TesteProtótipo2.html",
"Vôlei": "TesteProtótipo2.html",
"VÔLEI": "TesteProtótipo2.html",
"tênis de mesa": "TesteProtótipo2.html",
"Tênis de mesa": "TesteProtótipo2.html",
"TÊNIS DE MESA": "TesteProtótipo2.html",
"judô": "TesteProtótipo2.html",
"Judô": "TesteProtótipo2.html",
"JUDÔ": "TesteProtótipo2.html",
"treino de velocidade": "TesteProtótipo2.html",
"Treino de velocidade": "TesteProtótipo2.html",
"TREINO DE VELOCIDADE": "TesteProtótipo2.html",
"ginástica acrobática": "TesteProtótipo2.html",
"Ginástica acrobática": "TesteProtótipo2.html",
"GINÁSTICA ACROBÁTICA": "TesteProtótipo2.html",
"ciclismo de montanha": "TesteProtótipo2.html",
"Ciclismo de montanha": "TesteProtótipo2.html",
"CICLISMO DE MONTANHA": "TesteProtótipo2.html",
"nado sincronizado": "TesteProtótipo2.html",
"Nado sincronizado": "TesteProtótipo2.html",
"NADO SINCRONIZADO": "TesteProtótipo2.html",
"tênis": "TesteProtótipo2.html",
"Tênis": "TesteProtótipo2.html",
"TÊNIS": "TesteProtótipo2.html",
"levantamento de peso": "TesteProtótipo2.html",
"Levantamento de peso": "TesteProtótipo2.html",
"LEVANTAMENTO DE PESO": "TesteProtótipo2.html",
"handebol": "TesteProtótipo2.html",
"Handebol": "TesteProtótipo2.html",
"HANDEBOL": "TesteProtótipo2.html",
"ginástica artística": "TesteProtótipo2.html",
"Ginástica artística": "TesteProtótipo2.html",
"GINÁSTICA ARTÍSTICA": "TesteProtótipo2.html",
"natação de mar aberto": "TesteProtótipo2.html",
"Natação de mar aberto": "TesteProtótipo2.html",
"NATAÇÃO DE MAR ABERTO": "TesteProtótipo2.html",
"hóquei no gelo": "TesteProtótipo2.html",
"Hóquei no gelo": "TesteProtótipo2.html",
"HÓQUEI NO GELO": "TesteProtótipo2.html",
"treino de agilidade": "TesteProtótipo2.html",
"Treino de agilidade": "TesteProtótipo2.html",
"TREINO DE AGILIDADE": "TesteProtótipo2.html",
"ginástica de trampolim": "TesteProtótipo2.html",
"Ginástica de trampolim": "TesteProtótipo2.html",
"GINÁSTICA DE TRAMPOLIM": "TesteProtótipo2.html",
"kung fu": "TesteProtótipo2.html",
"Kung fu": "TesteProtótipo2.html",
"KUNG FU": "TesteProtótipo2.html",
"treino de explosão": "TesteProtótipo2.html",
"Treino de explosão": "TesteProtótipo2.html",
"TREINO DE EXPLOSÃO": "TesteProtótipo2.html",
"ginástica calistênica": "TesteProtótipo2.html",
"Ginástica calistênica": "TesteProtótipo2.html",
"GINÁSTICA CALISTÊNICA": "TesteProtótipo2.html",
"marcha atlética": "TesteProtótipo2.html",
"Marcha atlética": "TesteProtótipo2.html",
"MARCHA ATLÉTICA": "TesteProtótipo2.html",
"esgrima": "TesteProtótipo2.html",
"Esgrima": "TesteProtótipo2.html",
"ESGRIMA": "TesteProtótipo2.html",
"treino de potência": "TesteProtótipo2.html",
"Treino de potência": "TesteProtótipo2.html",
"TREINO DE POTÊNCIA": "TesteProtótipo2.html",
"vôlei de praia": "TesteProtótipo2.html",
"Vôlei de praia": "TesteProtótipo2.html",
"VÔLEI DE PRAIA": "TesteProtótipo2.html",
"badminton": "TesteProtótipo2.html",
"Badminton": "TesteProtótipo2.html",
"BADMINTON": "TesteProtótipo2.html",
"treino de resistência": "TesteProtótipo2.html",
"Treino de resistência": "TesteProtótipo2.html",
"TREINO DE RESISTÊNCIA": "TesteProtótipo2.html",
"luta livre": "TesteProtótipo2.html",
"Luta livre": "TesteProtótipo2.html",
"LUTA LIVRE": "TesteProtótipo2.html",
"esqui alpino": "TesteProtótipo2.html",
"Esqui alpino": "TesteProtótipo2.html",
"ESQUI ALPINO": "TesteProtótipo2.html",
"treino de agilidade": "TesteProtótipo2.html",
      // Adicione mais termos e URLs conforme necessário
    };
  
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase(); // Converter a pesquisa para minúsculas
  
      // Limpe os resultados anteriores
      searchResults.innerHTML = "";
  
      if (searchMapping[searchTerm]) {
        // Redirecione para a página correspondente
        window.location.href = searchMapping[searchTerm];
      } else {
        // Crie um elemento <div> para a mensagem de erro
        const noResultMessage = document.createElement("div");
        noResultMessage.textContent = "Nenhum resultado encontrado.";
        noResultMessage.classList.add("no-result");
  
        // Aplique estilos CSS
        noResultMessage.style.backgroundColor = "black";
        noResultMessage.style.color = "#B89000";
        noResultMessage.style.position = "fixed";
        noResultMessage.style.top = "50%";
        noResultMessage.style.left = "50%";
        noResultMessage.style.transform = "translate(-50%, -50%)";
        noResultMessage.style.zIndex = "9999";
        noResultMessage.style.padding = "20px";
        noResultMessage.style.borderRadius = "10px";
        noResultMessage.style.textAlign = "center";
  
        // Adicione o elemento à div de resultados
        searchResults.appendChild(noResultMessage);
  
        // Remova a mensagem após 3 segundos
        setTimeout(function () {
          searchResults.removeChild(noResultMessage);
        }, 3000);
      }
    }
  
    searchButton.addEventListener("click", performSearch);
  
    // Adicione um ouvinte de evento de pressionar tecla Enter na caixa de pesquisa
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Impede o envio do formulário padrão
        performSearch();
      }
    });
  });
  
