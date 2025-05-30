'use client';

import { useState } from 'react';
import {
  Cpu,
  Lightbulb,
  Activity,
  Monitor,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import HardwareModal from '@/components/HardwareModal';

export default function SimulacaoPage() {
  const [selectedComponent, setSelectedComponent] = useState<
    (typeof components)[0] | null
  >(null);

  const components = [
    {
      name: 'Arduino Uno R3',
      description: 'Controla os semáforos, display e sensores.',
      icon: Cpu,
      specs: [
        'Microcontrolador ATmega328P',
        '14 pinos digitais (6 PWM)',
        '6 pinos analógicos',
      ],
      connections: [
        {
          from: 'D2',
          to: 'Sensor PIR',
          description: 'Detecção de movimento',
        },
        {
          from: 'D3',
          to: 'Botão',
          description: 'Solicitação de travessia',
        },
        {
          from: 'D4',
          to: 'Buzzer',
          description: 'Alertas sonoros',
        },
        {
          from: 'D8-D12',
          to: 'Semáforos',
          description: 'Controle dos LEDs',
        },
        {
          from: 'A0-A5',
          to: 'LCD',
          description: 'Display 16x2',
        },
      ],
      imageUrl: '/arduino.png',
    },
    {
      name: 'Display LCD 16x2',
      description: 'Mostra mensagens do semáforo.',
      icon: Monitor,
      specs: ['16x2 caracteres', 'Interface: 6 pinos', 'Backlight incluído'],
      connections: [
        {
          from: 'RS, E, D4-D7',
          to: 'Arduino A0-A5',
          description: 'Comunicação com Arduino',
        },
      ],
      imageUrl: '/display.jpg',
    },
    {
      name: 'Sensor PIR',
      description: 'Detecta pedestres na faixa.',
      icon: Activity,
      specs: ['Alcance: 7 metros', 'Ângulo: 110°', '5V DC'],
      connections: [
        {
          from: 'OUT',
          to: 'Arduino D2',
          description: 'Sinal de detecção',
        },
      ],
      imageUrl: '/sensor.png',
    },
    {
      name: 'Semáforos LED',
      description: 'Sinais para veículos e pedestres.',
      icon: Lightbulb,
      specs: ['5 LEDs (3 veicular, 2 pedestre)', '5V DC', 'Resistores 220Ω'],
      connections: [
        {
          from: 'LEDs',
          to: 'Arduino D8-D12',
          description: 'Controle dos semáforos',
        },
      ],
      imageUrl: '/semaforo.png',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo size="small" />
            <div className="flex items-center gap-4">
              <Link
                href="/simulacao"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Simulação
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Simulação no Tinkercad
            </h2>
            <a
              href="https://www.tinkercad.com/things/iv2uOL63QHX-semaforo-inteligente-p2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Abrir no Tinkercad
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.tinkercad.com/embed/iv2uOL63QHX-semaforo-inteligente-p2"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          <div className="mt-5 bg-white rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Como Testar a Simulação
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Observe o funcionamento automático do semáforo</li>
              <li>Clique no botão para simular uma solicitação de travessia</li>
              <li>Clique no sensor PIR para simular detecção de movimento</li>
              <li>Observe as mensagens no display LCD</li>
              <li>Escute os alertas sonoros do buzzer</li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Componentes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((component, index) => (
              <button
                key={index}
                onClick={() => setSelectedComponent(component)}
                className="text-left bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <component.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {component.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {component.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Ver detalhes
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedComponent && (
        <HardwareModal
          isOpen={!!selectedComponent}
          onClose={() => setSelectedComponent(null)}
          component={selectedComponent}
        />
      )}
    </main>
  );
}
