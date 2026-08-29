'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-4 right-4 z-[200] min-w-[300px] max-w-md toast-enter">
      <div 
        className={`flex items-center gap-3 p-4 rounded-lg shadow-lg border ${
          isSuccess 
            ? 'bg-chemical-green/10 border-chemical-green/20 text-on-surface' 
            : 'bg-error-container border-error/20 text-on-surface'
        }`}
      >
        <span 
          className={`material-symbols-outlined ${
            isSuccess ? 'text-chemical-green' : 'text-error'
          }`}
        >
          {isSuccess ? 'check_circle' : 'error'}
        </span>
        
        <p className="text-body-sm flex-1">{message}</p>
        
        <button 
          onClick={onClose}
          className="text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none"
          aria-label="Close notification"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
    </div>
  );
}
