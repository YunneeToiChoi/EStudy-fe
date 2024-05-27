import  Link  from 'next/link';
import Image from 'next/image';
export default function Profile()
{
    return(
        <div className="grid wide">
        <div className="img__container">
          <div className="avatar__container">
            <Image
              src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
              width={100}
              height={120}
              alt=""
              className="backgroud__avt"/>
            <Image
              width={100}
              height={100}
              src="https://static.vecteezy.com/system/resources/previews/030/504/836/non_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg"
              alt=""
              className="avt__user"
            />
            <Link href="" className="avatar__change"
              ><i className="fa-solid fa-pencil avatar__icon"></i
            ></Link>
          </div>
        </div>
        <div className="user__name-container">
          <h1 className="name__user">thaigiabao122</h1>
          <Link href="" className="user__public">Trang công khai</Link>
        </div>
        <ul className="tag-search__transition">
          <li className="tag-search__transition-item">
            <Link
              href=""
              className="tag-search__transition-link tag-search__transition-link--chosen"
              >Khóa học</Link>
          </li>
          <li className="tag-search__transition-item">
            <Link href="" className="tag-search__transition-link">Kết quả luyện thi</Link>
          </li>
          <li className="tag-search__transition-item">
            <Link href="" className="tag-search__transition-link">Posts</Link>
          </li>
        </ul>
        <div className="course__registed-container">
          <p style={{display:'none'}} className="course__registed--dont-have-course">
            Bạn chưa đăng ký học khoá học nào!
          </p>
          <h3 className="course__registed-header">Các khóa đã kích hoạt</h3>
          <div className="course__active-container row">
            <Link href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </Link>
            <Link href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </Link>
            <Link href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </Link>
            <Link href="" className="couse__active-link col l-3 m-6 c-12">
              <div className="course__active-box">
                <h4 className="course__active-title">Complete TOEIC</h4>
                <p className="course__active-state">Đã kích hoạt</p>
                <p className="course__active-percent">17%</p>
                <div className="course__active-progress"></div>
                <p className="course__active-continue">
                  <span className="course__active-continue-title"
                    >Tiếp tục bài học: </span
                  >Từ vựng TOEIC - List 10
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
}