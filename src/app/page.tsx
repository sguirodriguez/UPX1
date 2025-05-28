'use client'

import Link from "next/link";
import { ArrowRight, TrafficCone, Car, Ambulance, Brain, LineChart, AlertTriangle } from "lucide-react";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Logo size="large" />
            </div>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transformando o trânsito urbano através de semáforos inteligentes que se adaptam
              em tempo real ao fluxo de veículos, priorizando emergências e otimizando a mobilidade.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/simulacao"
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Iniciar Simulação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/hardware"
                className="group inline-flex items-center gap-2 bg-[#06B6D4] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#06B6D4] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Componentes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#solucao"
                className="inline-flex items-center gap-2 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300"
              >
                Saiba mais
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Problema
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os semáforos tradicionais não se adaptam à demanda real do tráfego,
              causando congestionamentos, desperdício de tempo e riscos à segurança.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <TrafficCone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Congestionamentos</h3>
              <p className="text-gray-600 leading-relaxed">
                Semáforos fixos causam filas desnecessárias e aumentam o tempo de deslocamento,
                impactando a qualidade de vida dos cidadãos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100">
              <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Riscos à Segurança</h3>
              <p className="text-gray-600 leading-relaxed">
                Falta de priorização para veículos de emergência e tempos inadequados
                aumentam os riscos de acidentes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Car className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Ineficiência</h3>
              <p className="text-gray-600 leading-relaxed">
                Tempos fixos não consideram variações no fluxo de veículos,
                causando desperdício de tempo e combustível.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solucao" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Solução
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Semáforos inteligentes que se adaptam em tempo real ao fluxo de veículos,
              priorizando emergências e otimizando a mobilidade urbana.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IA Adaptativa</h3>
              <p className="text-gray-600 leading-relaxed">
                Sistema neural que aprende e se adapta aos padrões de tráfego,
                otimizando os tempos dos semáforos em tempo real.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Ambulance className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Prioridade Emergencial</h3>
              <p className="text-gray-600 leading-relaxed">
                Detecção automática de veículos de emergência, garantindo
                passagem prioritária quando necessário.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Análise de Dados</h3>
              <p className="text-gray-600 leading-relaxed">
                Geração de relatórios e insights para melhorias contínuas
                no sistema de tráfego da cidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para revolucionar o trânsito da sua cidade?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Experimente nossa simulação e veja como o NeuroSinal pode transformar
            a mobilidade urbana da sua região.
          </p>
          <Link
            href="/simulacao"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Iniciar Simulação
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
