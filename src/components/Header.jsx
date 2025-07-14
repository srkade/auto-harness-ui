import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card/90 backdrop-blur-sm border-b border-border px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">ASDM</h1>
            <p className="text-sm text-muted-foreground">Automobile Engineering Harness Dashboard</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;