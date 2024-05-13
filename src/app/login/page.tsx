import  Link  from 'next/link';
import "../handicraftCSS/loginAndRegisterAndActive.css"
export default function Login() {
    return (
        <div className="content__container">
          <div className="login__container">
            <p className="login__details">
              Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
              TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
            </p>
            <a href="/View/profile.html" className="login__btn login__btn--fb"
              >Đăng nhập với Facebook</a
            >
            <br />
            <a href="/View/profile.html" className="login__btn login__btn--gg"
              >Đăng nhập với Google</a
            >
            <br />
            <Link href="/register" className="login__link-to-register">Bạn chưa là một thành viên? Đăng ký ngay!</Link>
          </div>
        </div>
    )
}