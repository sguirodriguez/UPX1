'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';
import { ExternalLink } from 'lucide-react';

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Logo size="small" />
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span>Hardware</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-8">
        {/* Video Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Apresentação do Projeto
            </h1>
            <a
              href="https://www.youtube.com/watch?v=mHe_1HtHqzw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors w-full sm:w-auto"
            >
              Abrir no YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="relative w-full min-h-[300px] sm:min-h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/mHe_1HtHqzw?si=t-12NJXYbObo4dIE"
              title="Apresentação do Projeto - Semáforo Inteligente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Sobre o Projeto
          </h2>
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 space-y-4">
            <p>
              O Semáforo Inteligente é um projeto inovador que visa melhorar a
              segurança e eficiência do trânsito através da integração de
              sensores e tecnologia IoT. O sistema utiliza sensores PIR para
              detectar a presença de pedestres e um botão para solicitar a
              travessia, tornando o processo mais seguro e eficiente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Principais Características
                </h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Detecção automática de pedestres</li>
                  <li>Botão de solicitação de travessia</li>
                  <li>Display LCD para mensagens informativas</li>
                  <li>Alertas sonoros para deficientes visuais</li>
                  <li>Sistema modular e expansível</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">
                  Benefícios
                </h3>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>Maior segurança para pedestres</li>
                  <li>Redução de acidentes</li>
                  <li>Melhor acessibilidade</li>
                  <li>Eficiência no fluxo de trânsito</li>
                  <li>Baixo custo de implementação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 mb-4">
            Interessado em implementar este projeto ou tem alguma dúvida? Entre
            em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/sguirodriguez/UPX1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Ver no GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
