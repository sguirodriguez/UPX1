import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, ExternalLink, ArrowRight, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface HardwareModalProps {
    isOpen: boolean;
    onClose: () => void;
    component: {
        name: string;
        description: string;
        icon: LucideIcon;
        specs: string[];
        connections?: {
            from: string;
            to: string;
            description: string;
        }[];
        tinkercadUrl?: string;
        imageUrl?: string;
    };
}

export default function HardwareModal({ isOpen, onClose, component }: HardwareModalProps) {
    const [activeTab, setActiveTab] = useState<'specs' | 'connections' | 'tinkercad'>('specs');

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                                <div className="flex items-center justify-between mb-6">
                                    <Dialog.Title as="div" className="flex items-center gap-3">
                                        <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                                            <component.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{component.name}</h3>
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <X className="w-6 h-6 text-gray-500" />
                                    </button>
                                </div>

                                <p className="text-gray-600 mb-6">{component.description}</p>

                                <div className="border-b border-gray-200 mb-6">
                                    <nav className="flex gap-4">
                                        <button
                                            onClick={() => setActiveTab('specs')}
                                            className={`pb-4 px-2 font-medium text-sm ${activeTab === 'specs'
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            Especificações
                                        </button>
                                        {component.connections && (
                                            <button
                                                onClick={() => setActiveTab('connections')}
                                                className={`pb-4 px-2 font-medium text-sm ${activeTab === 'connections'
                                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                                    : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                            >
                                                Conexões
                                            </button>
                                        )}
                                        {component.tinkercadUrl && (
                                            <button
                                                onClick={() => setActiveTab('tinkercad')}
                                                className={`pb-4 px-2 font-medium text-sm ${activeTab === 'tinkercad'
                                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                                    : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                            >
                                                Tinkercad
                                            </button>
                                        )}
                                    </nav>
                                </div>

                                <div className="min-h-[400px]">
                                    {activeTab === 'specs' && (
                                        <div className="space-y-4">
                                            {component.imageUrl && (
                                                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={component.imageUrl}
                                                        alt={component.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}
                                            <ul className="space-y-3">
                                                {component.specs.map((spec, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
                                                        <span className="text-gray-600">{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'connections' && component.connections && (
                                        <div className="space-y-6">
                                            {component.connections.map((connection, index) => (
                                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-medium text-gray-900">{connection.from}</span>
                                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                                        <span className="font-medium text-gray-900">{connection.to}</span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm">{connection.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'tinkercad' && component.tinkercadUrl && (
                                        <div className="space-y-4">
                                            <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                                                <iframe
                                                    src={component.tinkercadUrl}
                                                    className="w-full h-full"
                                                    allowFullScreen
                                                />
                                            </div>
                                            <a
                                                href={component.tinkercadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                            >
                                                Abrir no Tinkercad
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
} 