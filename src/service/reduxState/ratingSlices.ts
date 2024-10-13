import { createSlice } from "@reduxjs/toolkit";

// Hàm đệ quy để xử lý replies
const processRepliesRecursively = (replies:any) => {
    return replies.map((reply:any) => ({
        ...reply,
        replies: processRepliesRecursively(reply.replies || []), // Đệ quy để lấy replies của replies
    }));
};

const updateRepliesRecursively = (data:any, ratingId:any, newReplies:any) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].ratingId === ratingId) {
            // Nếu tìm thấy rating, thêm replies mới vào
            data[i].replies.push(...newReplies);
            return true; // Dừng lại khi đã cập nhật
        }
        // Nếu chưa tìm thấy, đệ quy vào replies con
        if (updateRepliesRecursively(data[i].replies, ratingId, newReplies)) {
            return true; // Dừng lại nếu đã cập nhật
        }
    }
    return false; // Trả về false nếu không tìm thấy
};

const findRatingAndUpdateReplies = (data:any, ratingId:any, newReplies:any) => {
    for (let i = 0; i < data.length; i++) {
        // Nếu tìm thấy ratingId, cập nhật replies
        if (data[i].ratingId === ratingId) {
            data[i].replies.push(...newReplies); // Thêm replies mới vào
            return true; // Dừng lại khi đã cập nhật
        }
        // Nếu chưa tìm thấy, đệ quy vào replies con
        if (findRatingAndUpdateReplies(data[i].replies, ratingId, newReplies)) {
            return true; // Dừng lại nếu đã cập nhật
        }
    }
    return false; // Trả về false nếu không tìm thấy
};

const ratingSlice = createSlice({
    name: "ratings",
    initialState: {
        rating: {
            data: [],
            isFetching: false,
            error: false,
        },
        ratingPost: {
            data: null,
            isFetching: false,
            error: false,
        },
        msg: "",
    },
    reducers: {
        getRatingStart: (state) => {
            state.rating.isFetching = true;
        },
        getRatingSuccess: (state: any, action) => {
            state.rating.isFetching = false;
        
            const ratings = action.payload;
        
            // Kiểm tra xem ratings có phải là mảng hay không
            if (!Array.isArray(ratings)) {
                console.error('Payload is not an array:', ratings);
                return;
            }
        
            // Xử lý các rating mới
            ratings.forEach((newRating) => {
                // Nếu là comment cha (isRoot = true), thêm ngay vào Redux store
                if (newRating.isRoot) {
                    const existingRating = state.rating.data.find(
                        (rating: any) => rating.ratingId === newRating.ratingId
                    );
        
                    if (!existingRating) {
                        state.rating.data.push({
                            ...newRating,
                            replies: [], // Khởi tạo replies rỗng nếu là comment cha
                        });
                    }
                } else {
                    // Nếu không phải comment cha, xử lý replies như bình thường
                    const newReplies = processRepliesRecursively(newRating.replies || []);
                    const updated = findRatingAndUpdateReplies(
                        state.rating.data,
                        newRating.ratingId,
                        newReplies
                    );
        
                    if (!updated) {
                        state.rating.data.push({
                            ...newRating,
                            replies: newReplies, // Khởi tạo replies đã xử lý nếu không tìm thấy
                        });
                    }
                }
            });
        
            state.rating.error = false;
        },
        getRatingFailed: (state, action) => {
            state.rating.isFetching = false;
            state.rating.error = true;
            state.msg = action.payload;
        },
        getRatingPostStart: (state) => {
            state.ratingPost.isFetching = true;
        },
        getRatingPostSuccess: (state, action) => {
            state.ratingPost.isFetching = false;
            state.ratingPost.data = action.payload;
            state.ratingPost.error = false;
        },
        getRatingPostFailed: (state, action) => {
            state.ratingPost.isFetching = false;
            state.ratingPost.error = true;
            state.msg = action.payload;
        },
        resetRatingState: (state) => {
            state.rating.data = [];
            state.rating.isFetching = false;
            state.rating.error = false;
            state.ratingPost.data = null;
            state.ratingPost.isFetching = false;
            state.ratingPost.error = false;
            state.msg = '';
        }
    },
});

// Xuất các actions
export const {
    getRatingStart,
    getRatingFailed,
    getRatingSuccess,
    getRatingPostStart,
    getRatingPostFailed,
    getRatingPostSuccess,
    resetRatingState
} = ratingSlice.actions;

// Xuất reducer
export default ratingSlice.reducer;
