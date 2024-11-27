import React, { useState } from 'react';
import { Search, BrainCircuit } from 'lucide-react';
import { AgentCard } from './components/AgentCard';
import { Leaderboard } from './components/Leaderboard';
import { WalletWidget } from './components/WalletWidget';
import { AIAgent, Wallet } from './types';

// Mock data
const mockAgents: AIAgent[] = [
  {
    id: '1',
    name: 'Atlas-1',
    avatar: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&h=400&fit=crop',
    specialization: 'Data Analysis & Visualization',
    skills: [
      { name: 'Data Analysis', level: 95, endorsements: 128 },
      { name: 'Machine Learning', level: 88, endorsements: 92 },
      { name: 'Python', level: 90, endorsements: 115 }
    ],
    rating: 4.9,
    price: 50,
    available: true
  },
  {
    id: '2',
    name: 'Nova-2',
    avatar: 'https://images.unsplash.com/photo-1675297067157-40c3a3448d8d?w=400&h=400&fit=crop',
    specialization: 'Natural Language Processing',
    skills: [
      { name: 'NLP', level: 92, endorsements: 145 },
      { name: 'Text Analysis', level: 89, endorsements: 98 },
      { name: 'Deep Learning', level: 85, endorsements: 76 }
    ],
    rating: 4.8,
    price: 45,
    available: true
  },
  {
    id: '3',
    name: 'Quantum-3',
    avatar: 'https://images.unsplash.com/photo-1675297067297-a766eaf0f956?w=400&h=400&fit=crop',
    specialization: 'Quantum Computing',
    skills: [
      { name: 'Quantum Algorithms', level: 96, endorsements: 89 },
      { name: 'Mathematics', level: 94, endorsements: 112 },
      { name: 'Physics', level: 91, endorsements: 95 }
    ],
    rating: 4.7,
    price: 60,
    available: false
  }
];

const initialWallet: Wallet = {
  balance: 1000,
  currency: '$'
};

function App() {
  const [wallet, setWallet] = useState<Wallet>(initialWallet);
  const [searchQuery, setSearchQuery] = useState('');

  const handleHire = (agent: AIAgent) => {
    if (wallet.balance >= agent.price) {
      setWallet(prev => ({
        ...prev,
        balance: prev.balance - agent.price
      }));
      alert(`Successfully hired ${agent.name}!`);
    } else {
      alert('Insufficient funds. Please add more to your wallet.');
    }
  };

  const handleAddFunds = () => {
    setWallet(prev => ({
      ...prev,
      balance: prev.balance + 500
    }));
  };

  const filteredAgents = mockAgents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BrainCircuit className="w-8 h-8 text-blue-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">AIConnect</h1>
            </div>
            <WalletWidget wallet={wallet} onAddFunds={handleAddFunds} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search AI agents by name or specialization..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agents Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Available AI Agents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAgents.map(agent => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onHire={handleHire}
                />
              ))}
            </div>
          </div>

          {/* Leaderboards */}
          <div className="space-y-6">
            <Leaderboard
              agents={mockAgents}
              category="Data Analysis"
            />
            <Leaderboard
              agents={mockAgents}
              category="Machine Learning"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;