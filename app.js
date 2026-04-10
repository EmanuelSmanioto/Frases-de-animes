 var frases = [
      {
        texto: "Não importa o quanto tente, você sozinho não pode mudar o mundo. Mas este é o lado bonito do mundo.",
        autor: "L",
        anime: "Death Note"
      },
      {
        texto: "Se você não lutar pelo que quer, para que você veio até aqui?",
        autor: "Natsu Dragneel",
        anime: "Fairy Tail"
      },
      { 
        texto: "As pessoas que continuam tentando são as que vencem no final.",
        autor: "Izuku Midoriya",
        anime: "My Hero Academia"
      },
      {
        texto: "Não chore para desistir, chore para continuar.",
        autor: "Monkey D. Luffy",
        anime: "One Piece"
      },
      {
        texto: "As pessoas que não conseguem sacrificar nada, não conseguem mudar nada",
        autor: "Armin",
        anime: "Shingeki No Kyojin"
      },
      {
        texto: "Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem para transformá-lo naquilo que você quer que ele seja",
        autor: "Naruto Uzumaki",
        anime: "Naruto"
      },
      {
        texto: "Nenhum sonho é pequeno demais para ser realizado.",
        autor: "All Might",
        anime: "My Hero Academia"
      }
    ];

    var indice = 0;

    function mostrarFrase() {
      document.getElementById("frase").textContent = '"' + frases[indice].texto + '"';
      document.getElementById("autor").textContent = "— " + frases[indice].autor;
      document.getElementById("anime").textContent = frases[indice].anime;
    }

    function proximaFrase() {
      indice = indice + 1;

      if (indice >= frases.length) {
        indice = 0;
      }

      mostrarFrase();
    }

    
