'use client';

import Link from 'next/link';
import {
  ArrowRight,
  TrafficCone,
  Car,
  Ambulance,
  Brain,
  LineChart,
  AlertTriangle,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Logo size="large" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 bg-[#06B6D4] mb-6 tracking-tight"
            >
              Revolucione o Trânsito da Sua Cidade
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Transformando o trânsito urbano através de semáforos inteligentes
              que se adaptam em tempo real ao fluxo de veículos, priorizando
              emergências e otimizando a mobilidade.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pitch"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Vídeo Pitch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/hardware"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06B6D4] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#06B6D4] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Componentes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#solucao"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300"
              >
                Saiba mais
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Problema
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os semáforos tradicionais não se adaptam à demanda real do
              tráfego, causando congestionamentos, desperdício de tempo e riscos
              à segurança.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
            >
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <TrafficCone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Congestionamentos
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Semáforos fixos causam filas desnecessárias e aumentam o tempo
                de deslocamento, impactando a qualidade de vida dos cidadãos.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
            >
              <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Riscos à Segurança
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Falta de priorização para veículos de emergência e tempos
                inadequados aumentam os riscos de acidentes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Car className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Ineficiência
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tempos fixos causam paradas desnecessárias, aumentando o consumo
                de combustível e a poluição ambiental.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="solucao"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Solução
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Semáforos inteligentes que se adaptam em tempo real ao fluxo de
              veículos, priorizando emergências e otimizando a mobilidade
              urbana.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                IA Adaptativa
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sistema neural que aprende e se adapta aos padrões de tráfego,
                otimizando os tempos dos semáforos em tempo real.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Ambulance className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Prioridade Emergencial
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Detecção automática de veículos de emergência, garantindo
                passagem prioritária quando necessário.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Análise de Dados
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Geração de relatórios e insights para melhorias contínuas no
                sistema de tráfego.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja os números que comprovam a eficácia do NeuroSinal em melhorar
              a mobilidade urbana.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <p className="text-gray-600">Redução no tempo de espera</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
              <p className="text-gray-600">
                Menor tempo de resposta para emergências
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">22%</div>
              <p className="text-gray-600">Aumento na eficiência do tráfego</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">18%</div>
              <p className="text-gray-600">Redução no consumo de combustível</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os talentos por trás do Semáforo Inteligente, uma equipe
              apaixonada por inovação e tecnologia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* João Victor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                João Victor
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                Gerente de Projetos
              </p>
              <p className="text-gray-600 leading-relaxed">
                Gerencia prazos, assegura a comunicação entre os membros da
                equipe e garante que o projeto esteja alinhado com os objetivos
                estabelecidos.
              </p>
            </motion.div>

            {/* Ana Luiza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Ana Luiza
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                Analista de Requisitos
              </p>
              <p className="text-gray-600 leading-relaxed">
                Identifica os requisitos para desenvolver o projeto, garantindo
                a eficiência e implementação correta das soluções.
              </p>
            </motion.div>

            {/* Thaís Arêas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
            >
              <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👩‍🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Thaís Arêas
              </h3>
              <p className="text-pink-600 font-medium mb-4">
                Analista de Viabilidade
              </p>
              <p className="text-gray-600 leading-relaxed">
                Atua na análise de viabilidade técnica, econômica e ambiental,
                buscando otimizar recursos e garantia do sucesso do projeto.
              </p>
            </motion.div>

            {/* Francisco Henrique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Francisco Henrique
              </h3>
              <p className="text-indigo-600 font-medium mb-4">Scrum Master</p>
              <p className="text-gray-600 leading-relaxed">
                Atua como facilitador do time assegurando que a equipe esteja
                trabalhando de forma eficiente em direção aos objetivos do
                projeto.
              </p>
            </motion.div>

            {/* José Roberto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                José Roberto
              </h3>
              <p className="text-orange-600 font-medium mb-4">
                Analista de Suporte e Manutenção
              </p>
              <p className="text-gray-600 leading-relaxed">
                Atua de suporte pós-implantação, assegurando que qualquer
                problema ou bug identificado seja resolvido de forma eficiente e
                rápida.
              </p>
            </motion.div>

            {/* Samuel Rodrigues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Samuel Rodrigues
              </h3>
              <p className="text-green-600 font-medium mb-4">
                Desenvolvedor de Algoritmos
              </p>
              <p className="text-gray-600 leading-relaxed">
                Atua na criação e soluções para sistemas utilizando lógica e
                programação, trabalha com dados, busca entender padrões e
                melhora processos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para revolucionar o trânsito da sua cidade?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Experimente nossa simulação e veja como o NeuroSinal pode
              transformar a mobilidade urbana da sua região. Comece agora mesmo!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pitch"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Vídeo Pitch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/hardware"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Componentes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
