import React from 'react';
import { Wallet as WalletType } from '../types';
import { Wallet as WalletIcon, Plus } from 'lucide-react';

interface WalletWidgetProps {
  wallet: WalletType;
  onAddFunds: () => void;
}

export function WalletWidget({ wallet, onAddFunds }: WalletWidgetProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <WalletIcon className="w-5 h-5 text-blue-500" />
          <span className="ml-2 font-semibold text-gray-700">Wallet Balance</span>
        </div>
        <button
          onClick={onAddFunds}
          className="flex items-center text-sm text-blue-500 hover:text-blue-600"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Funds
        </button>
      </div>
      
      <div className="mt-3">
        <span className="text-2xl font-bold text-gray-900">
          {wallet.currency}{wallet.balance.toLocaleString()}
        </span>
      </div>
    </div>
  );
}