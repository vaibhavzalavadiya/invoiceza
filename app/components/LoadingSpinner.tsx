'use client';

import React from 'react';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="inline-flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        </div>
    );
};

export const LoadingOverlay: React.FC<{ message?: string }> = ({ message = 'Processing...' }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-xl flex flex-col items-center space-y-4 animate-fade-in">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-primary-600"></div>
                <p className="text-gray-700 font-medium">{message}</p>
            </div>
        </div>
    );
};
