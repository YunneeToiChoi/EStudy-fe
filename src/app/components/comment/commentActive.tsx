import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useSelector,useDispatch } from 'react-redux';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {getCommentPost} from '@/service/api/apiCommentRequest'

interface CommentComponentProps {
  params: {
    course: string; // courseId mà bạn sẽ truyền vào
  };
}

const CommentComponent: React.FC<CommentComponentProps> = ({ params }) => {
  const dispatch =useDispatch();
  const userInfo = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const [value, setValue] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>('');
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
      setPreviewUrl((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    }
  };

  const handleImageRemove = (index: number) => {
    setPreviewUrl((prevUrls) => prevUrls.filter((_, i) => i !== index));
    setSelectedImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const formData = new FormData(); // Tạo đối tượng FormData
  
    // Thêm dữ liệu vào formData
    formData.append('userId', userInfo?.userId);
    formData.append('ratingEntityType', 'Course');
    formData.append('courseId', params.course); // Đảm bảo đây là string
    formData.append('ratingValue', String(value)); // Chuyển giá trị ratingValue thành string
    formData.append('ratingReview', commentText);
    selectedImage.forEach(file => {
      formData.append('ratingImages', file); // Thêm từng file vào formData
    });
    formData.append('isRating', 'true');
  
    try {
      await getCommentPost(formData, dispatch);
      
      setValue(0);
      setSelectedImage([]);
      setPreviewUrl([]);
      setCommentText('');
      setCharCount(0); 
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 1000) { // Giới hạn ký tự
      setCommentText(text);
      setCharCount(text.length); // Cập nhật số ký tự đã nhập
    }
  };

  return (
    <div className=" mx-auto px-4">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comment</h2>
    </div>
    <form className="mb-6 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className='flex items-center gap-1'>
      <img
                  className="mr-2 w-11 h-11 rounded-full"
                  src={userInfo.userImage}
                  alt={userInfo.userId}
        />
      <h1 className='text-lg text-primary-bg-color font-semibold'>{userInfo.userName}</h1>
      </div>
      <div className="py-2 px-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">Your comment</label>
        <textarea
          id="comment"
          rows={6}
          maxLength={1000} // Giới hạn ký tự
          className="relative px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
          value={commentText}
          onChange={handleTextChange} // Cập nhật giá trị và đếm ký tự
        >
        </textarea>
        <span className="text-sm text-gray-500">{charCount}/1000</span> {/* Hiển thị số ký tự */}
      </div>
      <div className=' flex items-center'>
     <div className=' mr-auto'>
     {previewUrl.length < 5 && (
            
            <label htmlFor="image-upload" className="w-fit flex gap-2">
              <div className=' cursor-pointer rounded-sm border-[1px] border-slate-300 bg-white group hover:border-black duration-300 ease-in-out '><i className="  group-hover:text-black duration-300 ease-in-out fa-solid fa-image px-1 text-base text-slate-300"></i> </div>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
              Add image
            </label>
          )}
     </div>
        <Box sx={{ '& > legend': { mt: 2 } }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      </div>
      <PhotoProvider loop={true}>
        <div className=" flex items-center gap-4">
          {previewUrl.map((url, index) => (
            <div key={index} className="relative w-24 shadow-xl cursor-pointer h-24">
              <PhotoView src={url}>
                <img
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

      <button
        type="submit"
        disabled={commentText.length === 0} // Disable button if commentText is empty
        className={`inline-flex w-fit items-center py-2.5 px-4 text-base font-medium text-center text-white bg-primary-bg-color rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 ${commentText.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-bg-color-hover'} duration-300 ease-in-out`}
      >
        Post comment
      </button>
    </form>
  </div>
  );
}

export default CommentComponent;
