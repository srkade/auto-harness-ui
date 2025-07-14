
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Settings, 
  Network, 
  Zap, 
  AlertTriangle, 
  Radio, 
  Cable 
} from 'lucide-react';

const NavigationTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'components', label: 'Components', icon: Cpu },
    { id: 'controllers', label: 'Controllers', icon: Settings },
    { id: 'systems', label: 'Systems', icon: Network },
    { id: 'voltage', label: 'Voltage Supply', icon: Zap },
    { id: 'dtc', label: 'DTC', icon: AlertTriangle },
    { id: 'signals', label: 'Signals', icon: Radio },
    { id: 'harnesses', label: 'Harnesses', icon: Cable },
  ];

  return (
    <nav className="bg-slate-800/70 backdrop-blur-sm border-b border-slate-700/50 px-6">
      <div className="flex space-x-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative flex items-center space-x-2 px-4 py-3 text-sm font-medium
                transition-all duration-200 rounded-t-lg
                ${isActive 
                  ? 'text-blue-400 bg-slate-700/50' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                }
              `}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
              
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationTabs;
