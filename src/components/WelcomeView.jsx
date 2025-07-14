
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';

const WelcomeView = ({ activeTab }) => {
  const getTabDescription = (tab) => {
    const descriptions = {
      components: 'Select a component from the left panel to view its detailed schematic diagram and connection details.',
      controllers: 'Choose a controller to explore its input/output connections and system integration.',
      systems: 'Pick a system to visualize its architecture and component relationships.',
      voltage: 'Select a voltage supply to see its distribution network and connected components.',
      dtc: 'Choose a diagnostic trouble code to view related components and troubleshooting information.',
      signals: 'Select a signal to trace its path through the vehicle harness system.',
      harnesses: 'Pick a harness to explore its routing, connections, and component integration.',
    };
    return descriptions[tab] || 'Select an item from the left panel to begin.';
  };

  return (
    <div className="h-full flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Automotive Harness Visualization
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            {getTabDescription(activeTab)}
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-blue-400"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Start by selecting an item from the left panel</span>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="text-2xl mb-2">🔧</div>
            <div className="text-sm text-slate-300">Interactive</div>
            <div className="text-sm text-slate-300">Schematics</div>
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm text-slate-300">Real-time</div>
            <div className="text-sm text-slate-300">Visualization</div>
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="text-2xl mb-2">🔌</div>
            <div className="text-sm text-slate-300">Connection</div>
            <div className="text-sm text-slate-300">Mapping</div>
          </div>
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm text-slate-300">System</div>
            <div className="text-sm text-slate-300">Analysis</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeView;
