const emojis = require('../../discord/src/util/emojis');

module.exports = {
    get: function(content, options) {
        switch(content) {
            case 'helpTitle': return 'Meus Comandos'
            case 'helpDescription': return `Precisando de ajuda? Entre no meu servidor Discord para sanar suas dúvidas! ${process.env.SUPPORT_SERVER}`
            case 'helpButtonLabel': return 'Meu servidor Discord'
            case 'usertag': return 'Tag do Usuário'
            case 'userid': return 'ID do Usuário'
            case 'userCreatedAt': return 'Conta Criada Em'
            case 'roles': return 'Cargos'
            case 'guildId': return 'ID do Servidor'
            case 'guildOwner': return 'Dono'
            case 'guildCreatedAt': return 'Servidor Criado Em'
            case 'channels': return `Canais (${options.size})`
            case 'typeChannelsSize': return `Texto: ${options.text}\nVoz: ${options.voice}\nEstágio: ${options.stage}`
            case 'guildMembers': return 'Membros'
            case 'type': return 'Tipo'
            case 'eps': return 'Episódios'
            case 'exibition': return 'Exibido'
            case 'score': return 'Avaliação'
            case 'scoreStats': return 'Avaliado por'
            case 'genres': return 'Gêneros'
            case 'popularity': return 'Popularidade'
            case 'inviteMe': return 'Me Convide Para o Seu Servidor'
            case 'inviteDescription': return `Você pode me convidar para o seu servidor ou para o servidor que você administra [clicando aqui](${process.env.BOT_INVITE})\n\nPrecisando de ajuda? Entre no meu servidor Discord para sanar suas dúvidas! [Clique aqui](${process.env.SUPPORT_SERVER})`
            case 'oddEvenButtonLabel': return 'Encarar'
            case 'jobless': return 'Desempregado(a)'
            case 'marriedWith': return `Casado com ${options.user.username}#${options.user.discriminator}`
            case 'alone': return 'Solteirão'
            case 'accept': return 'Aceitar'
            case 'channelsList': return 'Lista de Canais Permitidos Comandos'
            case 'jobEmbedTitle': return 'Empregos Disponíveis'
            case 'trashman': return 'Lixeiro'
            case 'newsagent': return 'Jornaleiro'
            case 'tanker': return 'Petroleiro'
            case 'trucker': return 'Caminhoneiro'
            case 'postoffice': return 'Correios'
            case 'fireman': return 'Bombeiro'
            case 'police': return 'Policial'
            case 'mafiaboss': return 'Chefe da Máfia'
            case 'lawyer': return 'Advogado'
            case 'farmer': return 'Fazendeiro'
            case 'trashmanDescription': return 'Renda: 575 granex e 120 EXP'
            case 'newsagentDescription': return 'Requisitos: Nível 5\nRenda: 600 granex e 170 EXP'
            case 'ubereatsDescription': return 'Requisitos: Nível 10, 1 moto\n Renda: 650 granex e 310 EXP'
            case 'uberDescription': return 'Requisitos: Nível 15, 1 carro\nRenda: 800 granex e 420 EXP'
            case 'tankerDescription': return 'Requisitos: Nível 20\nRenda: 1200 granex e 530 EXP'
            case 'truckerDescription': return 'Requisitos: Nível 25\nRenda: 1400 granex e 640 EXP'
            case 'postofficeDescription': return 'Requisitos: Nível 30\nRenda: 1500 granex e 750 EXP'
            case 'firemanDescription': return 'Requisitos: Nível 35\nRenda: 2100 granex e 860 EXP'
            case 'policeDescription': return 'Requisitos: Nível 40\nRenda: 2200 granex e 970 EXP'
            case 'mafiabossDescription': return 'Requisitos: Nível 45\nRenda: 4600 granex e 1080 EXP'
            case 'lawyerDescription': return 'Requisitos: Nível 50\nRenda: 4900 granex e 1120 EXP'
            case 'farmerDescription': return 'Requisitos: Nível 55, 1 fazenda\nRenda: 5000 granex e 1230 EXP'
            case 'levelUp': return `${emojis['confetti']} Parabéns! Você upou para o nível ${options.level}`
            case 'botinfoTitle': return 'Howdy! Me chamo Maneki Neko!'
            case 'botinfoDescription': return `Olá! Eu sou a Maneki Neko, e sou um poderoso bot para Discord com múltiplas funcionalidades, tais como configuração, economia, social, miscelânea, roleplay, e utilidade, além de poder interagir em português brasileiro e inglês americano.\n\nAtualmente estou em ${options.guilds} servidores, conheço ${options.users} pessoas diferentes e possuo ${options.commands} comandos.\n\nFui desenvolvida em [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) utilizando a livraria [Eris](https://abal.moe/Eris/).\n[\`${options.dev}\`](https://github.com/Levi0100) é o meu developer.`
            case 'botinfoButtonLabel': return 'Comunidade e Suporte'
            case 'firemanAnnouncement': return `Alô, bombeiros de plantão!\nTemos um chamado do usuário ${options.user} em ${options.channel}. Ele está sem vida e precisa ser curado!\n${options.jumpLink}\n\n${options.users}`
            case 'policemanAnnouncement': return `Alô, policiais de plantão!\nTemos um chamado do usuário ${options.user} em ${options.channel}.\n\n**Motivo:** \`${options.reason}\`\n${options.jumpLink}\n\n${options.users}`
            case 'weaponsEmbedTitle': return 'Loja de Armas'
            case 'weaponsEmbedDescription': return `Para comprar qualquer arma, basta usar \`${options.usage}\`.\n\n**9mm:** Dano: 20 | ${emojis['granex']} 5.000 \`(10% de chance de sucesso em assaltos)\`\n**PT 100:** Dano: 40 | ${emojis['granex']} 10.000 \`(15% de chance de sucesso em assaltos)\`\n**Glock:** Dano: 60 | ${emojis['granex']} 12.000 \`(20% de chance de sucesso em assaltos)\`\n**MT-40:** Dano: 120 | ${emojis['granex']} 24.000 \`(25% de chance de sucesso em assaltos)\`\n**Uzi:** Dano: 130 | ${emojis['granex']} 28.000 \`(30% de chance de sucesso em assaltos)\`\n**MP5:** Dano: 150 | ${emojis['granex']} 32.000 \`(35% de chance de sucesso em assaltos)\`\n**UMP:** Dano: 150 | ${emojis['granex']} 33.000 \`(40% de chance de sucesso em assaltos)\`\n**Carabina CT-40:** Dano: 200 | ${emojis['granex']} 45.000 \`(45% de chance de sucesso em assaltos)\`\n**Carabina 556:** Dano: 220 | ${emojis['granex']} 48.000 \`(50% de chance em assaltos)\`\n**ParaFal:** Dano: 250 | ${emojis['granex']} 56.000 \`(55% de chance de sucesso em assaltos)\`\n**M4A1:** Dano: 300 | ${emojis['granex']} 62.000 \`(60% de chance de sucesso em assaltos)\`\n**AK-9:** Dano: 400 | ${emojis['granex']} 78.000 \`(65% de chance de sucesos em assaltos)\`\n**AK-47:** Dano: 420 | ${emojis['granex']} 81.000 | \`(70% de chance de sucesso em assaltos)\`\n**AKM:** Dano: 430 | ${emojis['granex']} 84.000 \`(75% de chance de sucesso em assaltos)\`\n**SCAR:** Dano: 500 | ${emojis['granex']} 97.000 \`(80% de chance de sucesso em assaltos)\``
            case 'foodsEmbedTitle': return 'Loja de Alimentos'
            case 'foodsEmbedDescription': return `Para comprar qualquer alimento, basta usar \`${options.usage}\`.\n\n**Água:** ${emojis['granex']} 100 \`(restaura 10% de energia)\`\n**Hamburguer:** ${emojis['granex']} 225 \`(restaura 35% de energia)\`\n**Pizza:** ${emojis['granex']} 275 \`(restaura 40% de energia)\``
            case 'vehiclesEmbedTitle': return `Loja de Automóveis`
            case 'vehiclesEmbedDescription': return `Para comprar qualquer automóvel, basta usar \`${options.usage}\`\n\n**Moto:** ${emojis['granex']} 15.000 \`(pode ser usada para trabalhar de uber eats)\`\n**Carro:** ${emojis['granex']} 25.000 \`(pode ser usado para trabalhar de uber)\`\n**Caminhão:** ${emojis['granex']} 105.000 \`(pode ser usado para trabalhar de caminhoneiro)\``
            case 'farmEmbedTitle': return 'Loja da Fazenda e Outros'
            case 'farmEmbedDescription': return `Para comprar qualquer item relacionado a fazenda, ou até mesmo a fazenda, use \`${options.usage}\`.\n**Fazenda:** ${emojis['granex']} 400.000 \`(libera o emprego de fazendeiro)\`\n**Galinha:** ${emojis['granex']} 100 \`(aumenta o lucro da fazenda em 5%)\`\n**Vaca:** ${emojis['granex']} 550 \`(aumenta o lucro da fazenda em 15%)\`\n**Alface:** ${emojis['granex']} 25 \`(aumenta o lucro da fazenda em 5%)\`\n**Tomate:** ${emojis['granex']} 30 \`(aumenta o lucro da fazenda em 5%)\`\n**Cenoura:** ${emojis['granex']} 30 \`(aumenta o lucro da fazenda em 5%)\``
            case 'weapons': return 'Armas'
            case 'foods': return 'Alimentos'
            case 'vehicles': return 'Veículos'
            case 'yourInventory': return 'Seu Inventário'
            case 'inUse': return 'Em Uso'
            case 'guildLevelUp': return `Este servidor acaba de upar para o **nível ${options.level}**!\nComo resultado, foram abertas +10 vagas para bombeiros e +10 vagas para policiais! Tá esperando o quê? Aliste-se já!`
            case 'guildLevelUp2': return `Este servidor acaba de upar para o **nível ${options.level}**!`
            case 'dblTitle': return 'Vote em Mim!'
            case 'dblDescription': return 'Vote em mim para me ajudar a ser divulgada para mais e mais pessoas aqui na plataforma!\n\nSabia que votando em mim você pode ganhar até 800 granex? E sabia que, ao votar em mim tanto na **Top.gg** como na **discordbotlist.com** você ganha 1600 granex?\n\nTá esperando o quê? Vote já!'
            case 'commandName': return 'Nome'
            case 'commandSyntax': return 'Sintaxe'
            case 'commandExample': return 'Exemplos'
            case 'commandAliases': return 'Apelidos'
            case 'commandPermissions': return 'Permissões'
            case 'commandBotPermissions': return 'Minhas Permissões'
            case 'helpCommandFooter': return '[] = obrigatório; <> = opicional'
            default: return content;
        }
    }
}