import  Link  from 'next/link';
import "../handicraftCSS/loginAndRegisterAndActive.css"
export default function Register(){
    return(
        <div>
      <div className="content__container">
        <div className="login__container">
          <p className="login__details">
            Đăng ký ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
            TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
          </p>
          <a href="" className="login__btn login__btn--fb">Đăng ký với Facebook</a>
          <br />
          <a href="" className="login__btn login__btn--gg">Đăng ký với Google</a>
          <br />
          <p className="register__privacy">
            Bằng cách đăng ký, bạn đồng ý với
            <a className="login__link-to-register register__privacy--text" href=""
              >điều khoản sử dụng</a
            >
            và
            <a className="login__link-to-register register__privacy--text" href=""
              >điều khoản bảo mật</a
            >.
          </p>
          <Link href="/login" className="login__link-to-register"
            >Đã có tài khoản? Đăng nhập ngay!</Link>
        </div>
      </div>
    </div>
    )
}