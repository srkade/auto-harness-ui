import React, { useRef, useEffect, memo } from 'react';
import { fabric } from 'fabric';

const FabricCanvas = ({ item, connections, setFabricCanvas, darkMode }) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const fabricCanvasRef = useRef(null); // Use a ref to hold the canvas instance

  const getThemeColors = () => {
    return {
      mainCompFill: 'rgba(30, 64, 175, 1)',
      mainCompStroke: '#3b82f6',
      mainCompText: 'white',
      wireStroke: 'rgba(59, 130, 246, 0.5)',
      wireHoverStroke: '#3b82f6',
      powerNodeStroke: '#f59e0b',
      groundNodeStroke: darkMode ? '#6b7280' : '#4b5563',
      ioNodeFill: '#10b981',
      nodeTextFill: darkMode ? '#cbd5e1' : '#374151',
    };
  };

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;
    const canvasEl = canvasRef.current;
    
    // Initialize canvas only once
    if (!fabricCanvasRef.current) {
        canvasEl.width = container.clientWidth;
        canvasEl.height = container.clientHeight;
        const canvas = new fabric.Canvas(canvasEl, {
            selection: false,
        });
        fabricCanvasRef.current = canvas;
        setFabricCanvas(canvas);

        // Pan functionality
        let isDragging = false;
        let lastPosX, lastPosY;
        canvas.on('mouse:down', function(opt) {
            const evt = opt.e;
            if (opt.target || isDragging) return;
            isDragging = true;
            canvas.selection = false;
            lastPosX = evt.clientX;
            lastPosY = evt.clientY;
        });
        canvas.on('mouse:move', function(opt) {
            if (isDragging) {
                const e = opt.e;
                const vpt = this.viewportTransform;
                vpt[4] += e.clientX - lastPosX;
                vpt[5] += e.clientY - lastPosY;
                this.requestRenderAll();
                lastPosX = e.clientX;
                lastPosY = e.clientY;
            }
        });
        canvas.on('mouse:up', function() {
            if (isDragging) {
                this.setViewportTransform(this.viewportTransform);
                isDragging = false;
                canvas.selection = true;
            }
        });
    }

    const canvas = fabricCanvasRef.current;
    
    // Clear and redraw when item changes OR when dark mode changes
    canvas.clear();
    const colors = getThemeColors();
    
    // --- Drawing Logic ---
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw main component
    const mainComponent = new fabric.Rect({
      width: 120,
      height: 80,
      fill: colors.mainCompFill,
      stroke: colors.mainCompStroke,
      strokeWidth: 2,
      rx: 8,
      ry: 8,
    });

    const mainComponentText = new fabric.IText(`${item.code}\n${item.name}`, {
      left: 0,
      top: 0,
      originX: 'center',
      originY: 'center',
      fill: colors.mainCompText,
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'Inter',
    });
    
    const mainGroup = new fabric.Group([mainComponent, mainComponentText], {
        left: centerX,
        top: centerY,
        originX: 'center',
        originY: 'center',
        selectable: false,
        hoverCursor: 'default',
    });
    canvas.add(mainGroup);

    // Draw connection nodes and lines
    connections.forEach((conn, index) => {
      const angle = (index / connections.length) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + Math.cos(angle) * 220;
      const y = centerY + Math.sin(angle) * 160;

      // Draw wire
      const wire = new fabric.Line([centerX, centerY, x, y], {
        stroke: colors.wireStroke,
        strokeWidth: 2,
        strokeDashArray: [5, 5],
        selectable: false,
        hoverCursor: 'default',
      });
      canvas.add(wire);
      wire.sendToBack();

      // Draw connection node (symbol based on type)
      let node;
      switch (conn.type) {
        case 'Power': // Resistor symbol
          node = new fabric.Rect({ width: 40, height: 15, fill: 'transparent', stroke: colors.powerNodeStroke, strokeWidth: 2 });
          break;
        case 'Ground': // Ground symbol
          node = new fabric.Path('M -10 0 H 10 M -6 5 H 6 M -2 10 H 2', { fill: '', stroke: colors.groundNodeStroke, strokeWidth: 2 });
          break;
        case 'Input': // Arrow pointing in
          node = new fabric.Triangle({ width: 20, height: 20, fill: colors.ioNodeFill, angle: 90 });
          break;
        case 'Output': // Arrow pointing out
          node = new fabric.Triangle({ width: 20, height: 20, fill: colors.ioNodeFill, angle: -90 });
          break;
        default:
          node = new fabric.Circle({ radius: 10, fill: colors.ioNodeFill, stroke: '#1e293b', strokeWidth: 2 });
      }
      
      const connText = new fabric.IText(`${conn.name}\n${conn.voltage}`, {
        top: conn.type === 'Ground' ? 25 : 30,
        originX: 'center',
        originY: 'center',
        fill: colors.nodeTextFill,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Inter',
      });

      const connGroup = new fabric.Group([node, connText], {
        left: x,
        top: y,
        originX: 'center',
        originY: 'center',
        selectable: false,
        hoverCursor: 'pointer',
      });
      
      canvas.add(connGroup);
      
      // Add hover effect
      connGroup.on('mouseover', () => {
          node.set({ shadow: `0 0 15px ${colors.mainCompStroke}` });
          wire.set({ stroke: colors.wireHoverStroke, strokeWidth: 3 });
          canvas.requestRenderAll();
      });
      connGroup.on('mouseout', () => {
          node.set({ shadow: null });
          wire.set({ stroke: colors.wireStroke, strokeWidth: 2 });
          canvas.requestRenderAll();
      });

    });

    canvas.requestRenderAll();
    
    // Cleanup function
    return () => {
        // We only dispose of the canvas when the component unmounts for good.
        // The key prop on SchematicView handles re-mounts, so this is safe.
    };
  }, [item, connections, setFabricCanvas, darkMode]); 
  
  // This useEffect handles the final cleanup when the component is unmounted.
  useEffect(() => {
      return () => {
          if (fabricCanvasRef.current) {
              fabricCanvasRef.current.dispose();
              fabricCanvasRef.current = null;
          }
      }
  }, []);

  return (
    <div ref={canvasContainerRef} className="w-full h-full">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default memo(FabricCanvas);