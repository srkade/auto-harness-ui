import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import NavigationTabs from '@/components/NavigationTabs';
import LeftPanel from '@/components/LeftPanel';
import MainPanel from '@/components/MainPanel';
import { mockData } from '@/data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('components');
  const [selectedItem, setSelectedItem] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? '' : 'dark'}`}>
      <Helmet>
        <title>ASDM - Automobile Engineering Harness Dashboard</title>
        <meta name="description" content="Professional automotive harness management system for vehicle component visualization and engineering analysis" />
      </Helmet>
      
      <div className="flex flex-col h-screen bg-background">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <NavigationTabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
        
        <div className="flex flex-1 overflow-hidden">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-80 border-r border-border"
          >
            <LeftPanel 
              activeTab={activeTab}
              data={mockData[activeTab] || []}
              onItemSelect={handleItemSelect}
              selectedItem={selectedItem}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <MainPanel 
              selectedItem={selectedItem}
              activeTab={activeTab}
              darkMode={darkMode}
            />
          </motion.div>
        </div>
      </div>
      
      <Toaster />
    </div>
  );
}

export default App;
