
let isPusherSDKInitialized = false;

declare global {
  interface Window {
    Pusher: any;
  }
}

type Callback = () => void;

export function initializePusherSDK(callback?: Callback): void {
  if (isPusherSDKInitialized) {
    if (typeof callback === 'function') {
      callback();
    }
    return;
  }

  isPusherSDKInitialized = true;

  // Khởi tạo Pusher sau khi script đã tải
  window.onload = function () {
    if (window.Pusher) {
      console.log('Pusher SDK đang được khởi tạo...');
      const pusher = new window.Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_ID, {
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
        encrypted: true
      });

      if (typeof callback === 'function') {
        callback();
      }
    } else {
      console.error('Pusher SDK chưa được tải.');
    }
  };

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
    js.onload = () => console.log('Pusher SDK đã được tải.');
    js.onerror = () => console.error('Lỗi khi tải Pusher SDK.');
    fjs?.parentNode?.insertBefore(js, fjs);
  })(document, 'script', 'pusher-jssdk');
}
