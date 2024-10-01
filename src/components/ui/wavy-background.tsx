"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const ntRef = useRef(0);
  const wRef = useRef(window.innerWidth);
  const hRef = useRef(window.innerHeight);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  // Use useMemo to memoize waveColors
  const waveColors = useMemo(
    () =>
      colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    [colors]
  );

  const drawWave = useCallback(
    (n: number) => {
      ntRef.current += getSpeed();
      const ctx = ctxRef.current;
      if (!ctx) return;

      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < wRef.current; x += 5) {
          const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
          ctx.lineTo(x, y + hRef.current * 0.5); // Adjust for height, currently at 50% of the container
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth, noise, getSpeed]
  );

  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, drawWave]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;
    wRef.current = ctx.canvas.width = window.innerWidth;
    hRef.current = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    const handleResize = () => {
      wRef.current = ctx.canvas.width = window.innerWidth;
      hRef.current = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [blur, render]);

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(requestAnimationFrame(render));
    };
  }, [init,render]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
