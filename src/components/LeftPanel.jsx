
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const LeftPanel = ({ activeTab, data, onItemSelect, selectedItem }) => {
  const handleFilterClick = () => {
    toast({
      title: "🚧 Filter Feature",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const getItemIcon = (type) => {
    const iconMap = {
      'Power Component': '⚡',
      'Sensor': '📡',
      'ECU': '🖥️',
      'Engine': '🔧',
      'Safety': '🛡️',
      'Communication': '📶',
      'Primary': '🔋',
      'Secondary': '⚡',
      'P0': '🔴',
      'P1': '🟡',
      'P2': '🟠',
      'CAN': '📡',
      'LIN': '📶',
      'Main': '🔌',
      'Branch': '🌿',
    };
    return iconMap[type] || '🔧';
  };

  return (
    <div className="h-full bg-slate-800/50 backdrop-blur-sm">
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white capitalize">
            {activeTab.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFilterClick}
            className="text-slate-400 hover:text-white hover:bg-slate-700/50"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            onChange={(e) => {
              if (e.target.value) {
                toast({
                  title: "🚧 Search Feature",
                  description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                });
              }
            }}
          />
        </div>
      </div>
      
      <div className="overflow-y-auto h-full pb-20">
        {data.map((item, index) => (
          <motion.div
            key={item.code}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => onItemSelect(item)}
            className={`
              p-4 border-b border-slate-700/30 cursor-pointer transition-all duration-200
              ${selectedItem?.code === item.code 
                ? 'bg-blue-600/20 border-l-4 border-l-blue-500' 
                : 'hover:bg-slate-700/30'
              }
            `}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{getItemIcon(item.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                    {item.code}
                  </span>
                  {item.status && (
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.status === 'Active' 
                        ? 'text-green-400 bg-green-500/10' 
                        : 'text-red-400 bg-red-500/10'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-white truncate">{item.name}</h3>
                <p className="text-sm text-slate-400 truncate">{item.type}</p>
                {item.voltage && (
                  <p className="text-xs text-yellow-400 mt-1">{item.voltage}</p>
                )}
                {item.description && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        
        {data.length === 0 && (
          <div className="p-8 text-center text-slate-400">
            <p>No {activeTab} available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
