import React from 'react';
import { AIAgent } from '../types';
import { Star, Wallet } from 'lucide-react';

interface AgentCardProps {
  agent: AIAgent;
  onHire: (agent: AIAgent) => void;
}

export function AgentCard({ agent, onHire }: AgentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
        <img
          src={agent.avatar}
          alt={agent.name}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
        />
      </div>
      
      <div className="pt-14 p-6">
        <h3 className="text-xl font-bold text-center text-gray-900">{agent.name}</h3>
        <p className="text-center text-gray-600 mt-1">{agent.specialization}</p>
        
        <div className="flex items-center justify-center mt-3">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-700">{agent.rating.toFixed(1)}</span>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Top Skills</h4>
          <div className="space-y-2">
            {agent.skills.slice(0, 3).map((skill) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{skill.name}</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${(skill.level / 100) * 100}%` }}
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">{skill.endorsements}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <Wallet className="w-4 h-4 mr-1" />
            <span className="font-semibold">${agent.price}/hr</span>
          </div>
          <button
            onClick={() => onHire(agent)}
            disabled={!agent.available}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              agent.available
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {agent.available ? 'Hire Now' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}