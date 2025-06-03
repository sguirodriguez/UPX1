# 🚦 Semáforo Inteligente UPX1

Um sistema de semáforo inteligente que utiliza sensores e tecnologia IoT para melhorar a segurança e eficiência do trânsito, especialmente para pedestres.

## 📋 Sobre o Projeto

O Semáforo Inteligente é uma solução inovadora que combina hardware e software para criar um sistema de controle de tráfego mais seguro e eficiente. O projeto utiliza sensores PIR para detectar a presença de pedestres e um botão para solicitar a travessia, tornando o processo mais seguro e acessível.

### 🎯 Objetivos

- Melhorar a segurança dos pedestres
- Reduzir acidentes de trânsito
- Aumentar a acessibilidade para pessoas com deficiência
- Otimizar o fluxo de tráfego
- Fornecer feedback visual e sonoro para os usuários

## 🛠️ Tecnologias Utilizadas

### Hardware

- Arduino Uno R3
- Display LCD 16x2
- Sensor PIR
- LEDs (Semáforo veicular e pedestre)
- Buzzer
- Botão de solicitação
- Resistores 220Ω
- Jumpers e protoboard

### Software

- Arduino IDE
- C/C++
- Next.js 14
- React
- TypeScript
- Tailwind CSS

## 🔧 Funcionalidades

### Principais Características

- Detecção automática de pedestres via sensor PIR
- Botão de solicitação de travessia
- Display LCD para mensagens informativas
- Alertas sonoros para deficientes visuais
- Sistema modular e expansível
- Interface web para monitoramento

### Benefícios

- Maior segurança para pedestres
- Redução de acidentes
- Melhor acessibilidade
- Eficiência no fluxo de trânsito
- Baixo custo de implementação

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/sguirodriguez/UPX1.git
cd UPX1
```

2. Instale as dependências do frontend:

```bash
npm install
# ou
yarn install
```

3. Configure o Arduino:

   - Instale o [Arduino IDE](https://www.arduino.cc/en/software)
   - Abra o arquivo `arduino/semaforo.ino`
   - Instale as bibliotecas necessárias:
     - LiquidCrystal
     - Wire

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

## 🔌 Conexões do Hardware

### Arduino Uno R3

- D2 → Sensor PIR (Detecção de movimento)
- D3 → Botão (Solicitação de travessia)
- D4 → Buzzer (Alertas sonoros)
- D8-D12 → Semáforos (Controle dos LEDs)
- A0-A5 → LCD (Display 16x2)

### Display LCD 16x2

- RS, E, D4-D7 → Arduino A0-A5 (Comunicação)

### Sensor PIR

- OUT → Arduino D2 (Sinal de detecção)

### Semáforos LED

- LEDs → Arduino D8-D12 (Controle)

## 🎥 Demonstração

Assista à apresentação do projeto no YouTube:
[Link do Vídeo](https://www.youtube.com/watch?v=mHe_1HtHqzw)

## 🚀 Como Usar

1. **Simulação no Tinkercad**

   - Acesse a [simulação no Tinkercad](https://www.tinkercad.com/things/iv2uOL63QHX-semaforo-inteligente-p2)
   - Observe o funcionamento automático do semáforo
   - Teste o botão de solicitação de travessia
   - Simule a detecção de movimento com o sensor PIR
   - Verifique as mensagens no display LCD
   - Escute os alertas sonoros

2. **Implementação Física**
   - Monte o circuito conforme o diagrama
   - Carregue o código no Arduino
   - Conecte a alimentação
   - O sistema iniciará automaticamente

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

Para mais informações ou suporte, acesse o [repositório no GitHub](https://github.com/sguirodriguez/UPX1).

---

Desenvolvido com ❤️ por [Seu Nome]
