import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  Info,
  Settings,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import FabricCanvas from '@/components/FabricCanvas';

const SchematicView = ({ item, darkMode }) => {
  const [zoom, setZoom] = useState(1);
  const [fabricCanvas, setFabricCanvas] = useState(null);

  const handleZoomIn = () => {
    if (fabricCanvas) {
      const newZoom = fabricCanvas.getZoom() * 1.2;
      fabricCanvas.setZoom(newZoom);
      setZoom(newZoom);
    }
  };
  
  const handleZoomOut = () => {
    if (fabricCanvas) {
      const newZoom = fabricCanvas.getZoom() / 1.2;
      fabricCanvas.setZoom(newZoom);
      setZoom(newZoom);
    }
  };
  
  const handleReset = () => {
    if (fabricCanvas) {
      fabricCanvas.setZoom(1);
      fabricCanvas.viewportTransform[4] = 0;
      fabricCanvas.viewportTransform[5] = 0;
      fabricCanvas.requestRenderAll();
      setZoom(1);
    }
  };

  const handleToolAction = (action) => {
    toast({
      title: `🚧 ${action} Feature`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const generateConnections = (item) => {
    const connections = [];
    const connectionCount = Math.floor(Math.random() * 4) + 2;
    
    for (let i = 0; i < connectionCount; i++) {
      connections.push({
        id: `conn-${i}`,
        name: `Connection ${i + 1}`,
        type: ['Input', 'Output', 'Power', 'Ground'][Math.floor(Math.random() * 4)],
        voltage: ['12V', '5V', '3.3V', 'GND'][Math.floor(Math.random() * 4)],
      });
    }
    return connections;
  };
  
  const connections = useMemo(() => generateConnections(item), [item]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-slate-800/70 backdrop-blur-sm border-b border-slate-700/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                {item.code}
              </span>
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
            </div>
            <span className="text-sm text-slate-400">({item.type})</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleToolAction('Info')}
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleToolAction('Settings')}
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleToolAction('Fullscreen')}
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-slate-800/50 border-b border-slate-700/50 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomIn}
              className="text-slate-300 hover:text-white hover:bg-slate-700/50"
            >
              <ZoomIn className="h-4 w-4 mr-1" />
              Zoom In
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomOut}
              className="text-slate-300 hover:text-white hover:bg-slate-700/50"
            >
              <ZoomOut className="h-4 w-4 mr-1" />
              Zoom Out
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-slate-300 hover:text-white hover:bg-slate-700/50"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-400">Zoom: {Math.round(zoom * 100)}%</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleToolAction('Export')}
              className="text-slate-300 hover:text-white hover:bg-slate-700/50"
            >
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Schematic Canvas */}
      <div className="flex-1 relative overflow-hidden schematic-grid">
        <FabricCanvas 
            item={item} 
            connections={connections}
            setFabricCanvas={setFabricCanvas} 
            darkMode={darkMode}
        />
      </div>

      {/* Status Bar */}
      <div className="bg-slate-800/50 border-t border-slate-700/50 px-4 py-2">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center space-x-4">
            <span>Status: Active</span>
            <span>Connections: {connections.length}</span>
            {item.voltage && <span>Voltage: {item.voltage}</span>}
          </div>
          <div>
            Last Updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchematicView;