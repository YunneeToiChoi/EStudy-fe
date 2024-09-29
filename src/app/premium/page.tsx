import { WavyBackgroundDemo } from "./WavyBackground"
import Link from "next/link"
import PlanUser from "./planUser"
export default function Premium(){
    return(
        <> 
        <WavyBackgroundDemo></WavyBackgroundDemo>
       <PlanUser></PlanUser>
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl md:text-5xl text-white font-bold text-center">
          Lợi ích khi đăng ký gói tháng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl text-primary-upload-document font-semibold mb-2">Lợi ích 1</h3>
            <p className="text-white text-lg">Truy cập không giới hạn vào tất cả khoá học và tài liệu.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl text-primary-upload-document font-semibold mb-2">Lợi ích 2</h3>
            <p className="text-white text-lg">Tiết kiệm chi phí so với mua lẻ từng khoá học.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl text-primary-upload-document font-semibold mb-2">Lợi ích 3</h3>
            <p className="text-white text-lg">Cập nhật thường xuyên với các khoá học và tài liệu mới nhất.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl text-primary-upload-document font-semibold mb-2">Lợi ích 4</h3>
            <p className="text-white text-lg">Hỗ trợ từ cộng đồng học viên và giáo viên chuyên nghiệp.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-5xl text-white font-bold">
          Gói tháng vs Mua lẻ khoá học
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl text-white font-semibold mb-4">Gói tháng</h3>
            <ul className="space-y-4 text-white">
              <li>✔ Truy cập không giới hạn.</li>
              <li>✔ Tiết kiệm hơn.</li>
              <li>✔ Phù hợp cho người học dài hạn.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl text-white font-semibold mb-4">Mua lẻ khoá học</h3>
            <ul className="space-y-4 text-white">
              <li>✔ Truy cập giới hạn.</li>
              <li>✔ Chi phí cao hơn khi học nhiều khoá.</li>
              <li>✔ Phù hợp nếu bạn chỉ học 1 khoá duy nhất.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
       
        
    )
}