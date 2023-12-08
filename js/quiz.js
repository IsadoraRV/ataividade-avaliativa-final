$(document).ready(function() {
    const perguntas = [
        { pergunta: "Como você descreveria seu dia a dia?", opcoes: ["Agitado e cheio de compromissos.", "Relaxado, gosto de ir com calma.", "Equilibrado entre trabalho e lazer."] },
        { pergunta: "Qual é sua paleta de cores favorita?", opcoes: ["Tons neutros e minimalistas.", "Cores vibrantes e ousadas.", "Tons suaves e clássicos."] },
        { pergunta: "O que você prefere vestir nos pés?", opcoes: ["Tênis modernos.", "Tênis despojados.", "Sapatos elegantes."] },
        { pergunta: "Qual acessório não pode faltar no seu look?", opcoes: ["Boné.", "Pulseiras.", "Relógio."] },
        { pergunta: "Como você escolhe suas roupas para sair?", opcoes: ["Sigo as últimas tendências da moda.", "Escolho peças únicas e diferentes.", "Opto por peças clássicas e versáteis."] }
    ];

    function exibirPerguntas() {
        const quizForm = $("#quiz-form");

        for (let i = 0; i < perguntas.length; i++) {
            const perguntaAtual = perguntas[i];

            const perguntaContainer = $("<div>").addClass("pergunta-container");
            const perguntaElement = $("<p>").text(`${i + 1}. ${perguntaAtual.pergunta}`);
            perguntaContainer.append(perguntaElement);

            for (let j = 0; j < perguntaAtual.opcoes.length; j++) {
                const input = $("<input>")
                    .attr({
                        type: "radio",
                        name: `pergunta${i + 1}`,
                        value: String.fromCharCode(97 + j), // a, b, c, ...
                        id: `opcao${String.fromCharCode(65 + j)}${i + 1}` // A, B, C, ...
                    });

                const label = $("<label>")
                    .attr("for", input.attr("id"))
                    .text(perguntaAtual.opcoes[j]);

                perguntaContainer.append(input, label, $("<br>"));
            }

            quizForm.append(perguntaContainer);
        }
    }

    function verResultado() {
        const resultado = calcularPerfil();
        alert(`Você terminou o quiz! Seu perfil: ${resultado}`);
    }

    function calcularPerfil() {
        const respostasUsuario = [];

        for (let i = 1; i <= perguntas.length; i++) {
            const opcaoSelecionada = $(`input[name=pergunta${i}]:checked`).val();
            respostasUsuario.push(opcaoSelecionada);
        }

        const pontuacao = respostasUsuario.join("");

        if (pontuacao === "aabcc" || pontuacao === "bccaa") {
            return "Perfil 1: Moderno e Ousado";
        } else if (pontuacao === "abcab" || pontuacao === "bbaca") {
            return "Perfil 2: Despojado e Criativo";
        } else if (pontuacao === "cbaac" || pontuacao === "acbbc") {
            return "Perfil 3: Elegante e Clássico";
        } else {
            return "Perfil Indefinido";
        }
    }

    exibirPerguntas();

    $("#verResultadoBtn").on("click", function() {
        verResultado();
    });
});
