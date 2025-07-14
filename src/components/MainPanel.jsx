import React from 'react';
import { motion } from 'framer-motion';
import SchematicView from '@/components/SchematicView';
import WelcomeView from '@/components/WelcomeView';

const MainPanel = ({ selectedItem, activeTab, darkMode }) => {
  if (!selectedItem) {
    return <WelcomeView activeTab={activeTab} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-slate-900/50"
    >
      <SchematicView 
        item={selectedItem} 
        activeTab={activeTab} 
        darkMode={darkMode}
        key={selectedItem.code} 
      />
    </motion.div>
  );
};

export default MainPanel;