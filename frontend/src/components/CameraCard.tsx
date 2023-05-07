import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import { Button, Box } from '@mui/material';

interface CameraCardProps {
  url: string;
}

interface Point {
  x: number;
  y: number;
}

const CameraCard: React.FC<CameraCardProps> = ({ url }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const drawLine = (ctx: CanvasRenderingContext2D, from: Point, to: Point) => {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const drawPoints = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, imageDimensions.width, imageDimensions.height);

    for (let i = 1; i < points.length; i++) {
      drawLine(ctx, points[i - 1], points[i]);
    }
  };

  useEffect(() => {
    drawPoints();
  }, [points]);

  const handleClick = (e: MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setPoints([
      ...points,
      { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
    ]);
  };



  const resetPoints = () => {
    setPoints([]);
  };

  const sendCoordinates = () => {
    console.log(points);
  };

  return (
    <Box>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <img
          ref={imgRef}
          src={url}
          alt="IP Camera Stream"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
          onLoad={() => {
            setImageDimensions({
              width: imgRef.current!.clientWidth,
              height: imgRef.current!.clientHeight,
            });
          }}
        />
      {isDrawing &&  <canvas
          ref={canvasRef}
          width={imageDimensions.width}
          height={imageDimensions.height}
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            border: '1px solid rgba(0, 0, 0, 0.54)',
          }}
          onClick={handleClick}
        ></canvas>}
      </Box>
      <Box
        sx={{
          marginTop: '1rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button onClick={()=>setIsDrawing(!isDrawing)}>Draw</Button>
        <Button onClick={resetPoints} sx={{ marginRight: '1rem' }}>
          Reset 
        </Button>
        <Button onClick={sendCoordinates}>Send Coordinates</Button>
      </Box>
    </Box>
  );
};

export default CameraCard;
