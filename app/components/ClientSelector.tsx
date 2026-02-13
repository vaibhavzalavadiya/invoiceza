'use client';

import React, { useState, useEffect } from 'react';
import { InvoiceData } from '../types/invoice';
import { loadRecentClients } from '../utils/invoiceManager';
import { FiX, FiSearch, FiUser } from 'react-icons/fi';

interface ClientSelectorProps {
    onSelect: (client: InvoiceData['client']) => void;
    onClose: () => void;
}

export const ClientSelector: React.FC<ClientSelectorProps> = ({ onSelect, onClose }) => {
    const [clients, setClients] = useState<InvoiceData['client'][]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setClients(loadRecentClients());
    }, []);

    const filteredClients = clients.filter(client =>
        client.billTo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Select Recent Client</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 border-b border-gray-200">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[calc(80vh-200px)] p-6">
                    {filteredClients.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                            <FiUser className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                            <p>No recent clients found</p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {filteredClients.map((client, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        onSelect(client);
                                        onClose();
                                    }}
                                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors"
                                >
                                    <div className="font-medium text-gray-900">{client.billTo.split('\n')[0]}</div>
                                    <div className="text-sm text-gray-600 whitespace-pre-line">{client.billTo}</div>
                                    {client.email && (
                                        <div className="text-sm text-gray-500 mt-1">{client.email}</div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
