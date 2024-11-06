import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import { getCommentPost } from '@/service/api/apiCommentRequest';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
interface CommentInputProps {
  ratingId: string;  
  isReply: boolean;      
  parentReplyId?: string; 
  ratingEntityType: string;
  dataId: number;
  onSubmit: (formData: FormData) => void; 
}

const CommentInput: React.FC<CommentInputProps> = ({ ratingId, isReply, parentReplyId, onSubmit, ratingEntityType, dataId }) => {
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [charCount, setCharCount] = useState<number>(0);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      if (selectedImage.length + newImages.length > 5) {
        toast.info('Bạn chỉ được đăng tối đa 5 ảnh!', {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      setSelectedImage((prevImages) => [...prevImages, ...newImages]);

      const newPreviewUrls = newImages.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    }
  };

  const handleImageRemove = (index: number) => {
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    setSelectedImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Kiểm tra dữ liệu trước khi gửi
    if (commentText.trim().length === 0 && selectedImage.length === 0) {
      toast.warn('Vui lòng viết bình luận hoặc thêm hình ảnh!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const formData = new FormData();
    const value = 0; // Giá trị đánh giá mẫu

    // Thêm dữ liệu chung vào formData
    formData.append('userId', user.userId);
    formData.append('ratingEntityType', ratingEntityType);
    formData.append('ratingValue', String(value));
    formData.append('ratingReview', commentText);

    // Thêm hình ảnh vào formData
    selectedImage.forEach(file => {
      formData.append('ratingImages', file);
    });

    formData.append('isRating', 'false');
    formData.append('rootId', ratingId); // ID của bình luận gốc

    // Điều kiện thêm courseId hoặc documentId
    if (ratingEntityType === 'Course') {
      formData.append('courseId', String(dataId));
    } else if (ratingEntityType === 'Document') {
      formData.append('documentId', String(dataId));
    }

    if (isReply && parentReplyId && !(ratingId==parentReplyId)) {
      formData.append('parentReply', parentReplyId); // ID của bình luận đang được trả lời
    }

    // Gọi onSubmit với FormData
    try {
      await getCommentPost(formData, dispatch);
      setCommentText(''); 
      setSelectedImage([]);
      setPreviewUrls([]); 
      setCharCount(0);
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error('Đã có lỗi xảy ra khi gửi bình luận!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className='flex gap-4'>     
      <Image
        className="mr-2 w-11 h-11 rounded-full"
        src={user.userImage}
        alt={user.userId}
        quality={100}
        width={100}
        height={100}
      />
      <div className='flex-1'>
        <div className="py-2 px-4 relative bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <input
            id="comment"
            maxLength={1000}
            className="relative px-0 min-h-10 w-full text-base text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)} // Cập nhật giá trị khi nhập
          />
          <div className='absolute top-1/2 -translate-y-1/2  bottom-0 transform right-2'>
            <label htmlFor="image-upload1" className="w-fit flex gap-2">
              <div className='cursor-pointer rounded-sm border-[1px] border-slate-300 bg-white group hover:border-black duration-300 ease-in-out'>
                <i className="group-hover:text-black duration-300 ease-in-out fa-solid fa-image px-1 text-base text-slate-300"></i>
              </div>
              <input
                id="image-upload1"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </label> 
          </div>
        </div>
        <div className='flex flex-col'>
          <button onClick={handleSubmit} className="bg-blue-500 w-fit text-center min-w-20 mt-2 text-white rounded p-2 cursor-pointer" disabled={commentText.trim().length === 0 && selectedImage.length === 0}>
            Gửi
          </button>
          <PhotoProvider loop={true}>
        <div className=" flex items-center my-5 gap-4">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative w-24 shadow-xl cursor-pointer h-24">
              <PhotoView src={url}>
                <Image
                  quality={100}
                  height={100}
                  width={100}
                  src={url}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </PhotoView>
              <button
                type="button"
                className='absolute top-0 right-0 pr-2 pt-2 group'
                onClick={() => handleImageRemove(index)}
              >
                <i className="fa-solid fa-trash text-slate-300 cursor-pointer group-hover:text-red-600"></i>
              </button>
            </div>
          ))}
        </div>
      </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
