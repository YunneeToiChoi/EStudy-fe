export const loadGoogleSdk = () => {
    console.log("Loading Google SDK...");
    
    const scriptId = 'google-jssdk';
    
    // Kiểm tra nếu script đã được thêm vào trước đó để tránh thêm lại
    if (document.getElementById(scriptId)) {
        console.log("Google SDK đã được thêm vào DOM.");
        return;
    }
    
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;

    // Bắt sự kiện khi script đã được tải xong
    script.onload = () => {
        console.log("Google SDK đã được tải thành công.");
    };

    script.onerror = () => {
        console.error("Không thể tải Google SDK.");
    };

    document.body.appendChild(script);
};