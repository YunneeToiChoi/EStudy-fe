// src/lib/utils/PusherProvider.tsx

import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react';

let isPusherSDKInitialized = false;

// Khai báo interface cho Pusher
declare global {
  interface Window {
    Pusher: any;
  }
}

// Tạo kiểu cho context
interface PusherContextType {
  pusher: any; // hoặc kiểu chính xác hơn nếu bạn biết
}

// Tạo context cho Pusher
const PusherContext = createContext<PusherContextType | null>(null);

// Tạo kiểu Callback
type Callback = () => void;

// Tạo PusherProvider
export const PusherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pusher, setPusher] = useState<any>(null);

  useEffect(() => {
    const initializePusherSDK = (callback?: Callback) => {
      if (isPusherSDKInitialized) {
        if (typeof callback === 'function') {
          callback();
        }
        return;
      }

      isPusherSDKInitialized = true;

      // Nhúng script Pusher từ CDN
      (function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;

        const js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = 'https://js.pusher.com/8.0.1/pusher.min.js';
        js.async = true;
        js.defer = true;
        js.crossOrigin = 'anonymous';
        js.onload = () => {
          console.log('Pusher SDK đã được tải.');
          const pusherInstance = new window.Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
            encrypted: true,
          });
          setPusher(pusherInstance);
          if (typeof callback === 'function') {
            callback();
          }
        };
        js.onerror = () => console.error('Lỗi khi tải Pusher SDK.');
        fjs?.parentNode?.insertBefore(js, fjs);
      })(document, 'script', 'pusher-jssdk');
    };

    initializePusherSDK();

    return () => {
      // Cleanup
      if (pusher) {
        pusher.disconnect();
      }
      isPusherSDKInitialized = false;
    };
  }, [pusher]);

  return (
    <PusherContext.Provider value={{ pusher }}>
      {children} {/* Trả về các component con */}
    </PusherContext.Provider>
  );
};

// Hook để sử dụng Pusher context
export const usePusher = () => {
  const context = useContext(PusherContext);
  if (!context) {
    throw new Error("usePusher must be used within a PusherProvider");
  }
  return context.pusher;
};
