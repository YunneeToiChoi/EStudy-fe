// src/lib/utils/facebookSDK.ts

let isFacebookSDKInitialized = false;

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

type Callback = () => void;

export function initializeFacebookSDK(callback?: Callback): void {
  if (isFacebookSDKInitialized) {
    if (typeof callback === 'function') {
      callback();
    }
    return;
  }

  isFacebookSDKInitialized = true;

  window.fbAsyncInit = function () {
    console.log('Facebook SDK đang được khởi tạo...');
    window.FB.init({
      appId: '982086357265897', // Đảm bảo appId là chính xác
      cookie: true,
      xfbml: true,
      version: 'v13.0' // Cập nhật phiên bản SDK nếu cần
    });

    if (typeof callback === 'function') {
      callback();
    }

    window.FB.AppEvents.logPageView();
  };

  (function (d, s, id) {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;

    const js = d.createElement(s) as HTMLScriptElement;
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    js.async = true;
    js.defer = true;
    js.crossOrigin = 'anonymous';
    js.onload = () => console.log('Facebook SDK đã được tải.');
    js.onerror = () => console.error('Lỗi khi tải Facebook SDK.');
    fjs?.parentNode?.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}
