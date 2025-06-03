'use client';

import { Play, Pause, RotateCcw, Timer } from 'lucide-react';
import Link from 'next/link';
import TrafficSimulation from '@/components/TrafficSimulation';
import { useState } from 'react';
import Logo from '@/components/Logo';

export default function SimulationPage() {
  const [isRunning, setIsRunning] = useState(false);
  const metrics = {
    averageWaitTime: 0,
    vehiclesOnRoad: 0,
    efficiency: 0,
    cycleTime: 0,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo size="small" />
            <div className="flex items-center gap-4">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Hardware
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            {/* <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrafficCone className="w-5 h-5 text-blue-600" />
                Configuração do Tráfego
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Densidade de Tráfego
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Via
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
                    <option>Principal</option>
                    <option>Secundária</option>
                    <option>Residencial</option>
                  </select>
                </div>
              </div>
            </div> */}

            {/* <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Ambulance className="w-5 h-5 text-blue-600" />
                Configurações de Emergência
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="emergency"
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="emergency"
                    className="text-sm font-medium text-gray-700"
                  >
                    Simular Veículo de Emergência
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Emergência
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                    <option>Ambulância</option>
                    <option>Veículo Policial</option>
                    <option>Bombeiros</option>
                  </select>
                </div>
              </div>
            </div> */}

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Timer className="w-5 h-5 text-blue-600" />
                Controles
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isRunning ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  {isRunning ? 'Pausar' : 'Iniciar'}
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <RotateCcw className="w-4 h-4" />
                  Resetar
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <TrafficSimulation />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Tempo Médio de Espera
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {metrics.averageWaitTime.toFixed(1)}s
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Veículos na Via
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {metrics.vehiclesOnRoad}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Eficiência
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {metrics.efficiency.toFixed(1)}%
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Tempo de Ciclo
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {metrics.cycleTime.toFixed(1)}s
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Logs do Sistema
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-600 h-32 overflow-y-auto">
                <p>[INFO] Inicializando simulação de tráfego...</p>
                <p>[INFO] Aguardando configurações...</p>
                <p>[INFO] Sistema de detecção de emergência ativo</p>
                {isRunning && <p>[INFO] Simulação em andamento</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
