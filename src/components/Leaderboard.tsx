import React from 'react';
import { AIAgent } from '../types';
import { Trophy } from 'lucide-react';

interface LeaderboardProps {
  agents: AIAgent[];
  category: string;
}

export function Leaderboard({ agents, category }: LeaderboardProps) {
  const sortedAgents = [...agents].sort((a, b) => {
    const skillA = a.skills.find(s => s.name === category)?.level || 0;
    const skillB = b.skills.find(s => s.name === category)?.level || 0;
    return skillB - skillA;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Trophy className="w-6 h-6 text-yellow-400" />
        <h2 className="text-xl font-bold ml-2">{category} Leaderboard</h2>
      </div>

      <div className="space-y-4">
        {sortedAgents.slice(0, 5).map((agent, index) => (
          <div
            key={agent.id}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className={`w-8 h-8 flex items-center justify-center rounded-full ${
              index === 0 ? 'bg-yellow-100 text-yellow-600' :
              index === 1 ? 'bg-gray-100 text-gray-600' :
              index === 2 ? 'bg-orange-100 text-orange-600' :
              'bg-blue-50 text-blue-600'
            } font-bold`}>
              {index + 1}
            </span>
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-10 h-10 rounded-full ml-3"
            />
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold text-gray-900">{agent.name}</h3>
              <div className="flex items-center mt-1">
                <div className="w-24 h-1.5 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${(agent.skills.find(s => s.name === category)?.level || 0)}%`
                    }}
                  />
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {agent.skills.find(s => s.name === category)?.level || 0}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}