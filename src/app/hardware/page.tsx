'use client'

import { Cpu, Lightbulb, Radio, Activity, Shield, Wifi } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function HardwarePage() {
    const components = [
        {
            name: "Arduino Uno R3",
            description: "Microcontrolador principal responsável por processar os dados dos sensores e controlar os semáforos.",
            icon: Cpu,
            specs: [
                "Microcontrolador ATmega328P",
                "Clock de 16MHz",
                "14 pinos digitais (6 PWM)",
                "6 pinos analógicos",
                "Memória Flash: 32KB",
                "SRAM: 2KB",
                "EEPROM: 1KB"
            ]
        },
        {
            name: "Sensor de Presença PIR",
            description: "Detecta a presença de veículos nas vias através de movimento e calor.",
            icon: Activity,
            specs: [
                "Alcance de detecção: até 7 metros",
                "Ângulo de detecção: 110°",
                "Tempo de resposta: <1s",
                "Tensão de operação: 5V DC"
            ]
        },
        {
            name: "Módulo RFID-RC522",
            description: "Identifica veículos de emergência através de tags RFID.",
            icon: Radio,
            specs: [
                "Frequência: 13.56MHz",
                "Interface: SPI",
                "Alcance de leitura: 3-5cm",
                "Suporte a múltiplas tags"
            ]
        },
        {
            name: "Módulo WiFi ESP8266",
            description: "Permite comunicação com o servidor central para sincronização dos semáforos.",
            icon: Wifi,
            specs: [
                "Protocolo: 802.11 b/g/n",
                "Frequência: 2.4GHz",
                "Interface: UART",
                "Potência de saída: +20dBm"
            ]
        },
        {
            name: "Shield de Relés",
            description: "Controla os semáforos LED através de relés para isolamento elétrico.",
            icon: Shield,
            specs: [
                "4 canais de relé",
                "Tensão de operação: 5V",
                "Corrente máxima: 10A por canal",
                "Isolamento óptico"
            ]
        },
        {
            name: "Semáforos LED",
            description: "Sinais de trânsito com LEDs de alta visibilidade.",
            icon: Lightbulb,
            specs: [
                "LEDs de alta potência",
                "Lentes difusoras",
                "Tensão: 12V DC",
                "Proteção contra intempéries"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Logo size="small" />
                        <div className="flex items-center gap-4">
                            <Link href="/simulacao" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                Simulação
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Componentes do Hardware
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conheça os componentes físicos utilizados no projeto NeuroSinal,
                        incluindo Arduino, sensores e módulos de comunicação.
                    </p>
                </div>

                {/* Components Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {components.map((component, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                <component.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">{component.name}</h3>
                            <p className="text-gray-600 mb-4">{component.description}</p>
                            <ul className="space-y-2">
                                {component.specs.map((spec, specIndex) => (
                                    <li key={specIndex} className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Tinkercad Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Simulação no Tinkercad</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-gray-500 mb-4">Simulação do circuito no Tinkercad</p>
                            <a
                                href="https://www.tinkercad.com/things/your-circuit-id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Abrir no Tinkercad
                            </a>
                        </div>
                    </div>
                    <div className="prose max-w-none">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Como funciona o circuito:</h3>
                        <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>O Arduino Uno recebe dados dos sensores PIR e RFID</li>
                            <li>O módulo ESP8266 envia os dados para o servidor central</li>
                            <li>O shield de relés controla os semáforos LED</li>
                            <li>Os sensores PIR detectam a presença de veículos</li>
                            <li>O módulo RFID identifica veículos de emergência</li>
                            <li>O sistema se adapta em tempo real ao fluxo de tráfego</li>
                        </ol>
                    </div>
                </div>

                {/* Connection Diagram */}
                <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagrama de Conexões</h2>
                    <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-gray-500">Diagrama de conexões dos componentes</p>
                            <p className="text-sm text-gray-400 mt-2">(Imagem do diagrama será adicionada aqui)</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conexões do Arduino:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>PIR Sensor → Pino D2</li>
                                <li>RFID-RC522 → Pinos D10-D13 (SPI)</li>
                                <li>ESP8266 → Pinos D0-D1 (UART)</li>
                                <li>Shield de Relés → Pinos D3-D6</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alimentação:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Arduino Uno → 5V DC</li>
                                <li>Semáforos LED → 12V DC</li>
                                <li>Shield de Relés → 5V DC</li>
                                <li>Módulos → 3.3V-5V DC</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 