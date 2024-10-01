'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetLoadingCourse from "@/app/components/course/loadingCourse";
import { getAllDocuments } from "@/service/api/apiDocumentRequest";
import DocumentCard from "@/app/components/document/DocumentCard";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
}

interface Course {
  id: number;
  name: string;
}

export default function GetDocByUser() {
  const dispatch = useDispatch();
  const checkNoDocument = useSelector((state: any) => state.ThunkReducer.document.allDocuments?.data);
  const listDocuments = useSelector((state: any) => state.ThunkReducer.document.allDocuments?.data?.document);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("");

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedCourse, filterType, sortOption]);

  useEffect(() => {
    getAllDocuments(dispatch).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const handleSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  useEffect(() => {
    if (listDocuments) {
      const uniqueCategories: { id: number; name: string }[] = [];
      const uniqueCourses: { id: number; name: string }[] = [];
      
      listDocuments.forEach((doc: any) => {
        if (!uniqueCategories.some(category => category.id === doc.categoryId)) {
          uniqueCategories.push({ id: doc.categoryId, name: doc.categoryName });
        }
        if (!uniqueCourses.some(course => course.id === doc.courseId)) {
          uniqueCourses.push({ id: doc.courseId, name: doc.courseName });
        }
      });

      setCategories(uniqueCategories);
      setCourses(uniqueCourses);
    }
  }, [listDocuments]);

  useEffect(() => {
  let filtered = listDocuments?.filter((doc: any) => 
    (selectedCategory ? doc.categoryId === Number(selectedCategory) : true) &&
    (selectedCourse ? doc.courseId === Number(selectedCourse) : true) &&
    (doc.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
     doc.description?.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (filterType === "free" ? doc.isPublic : filterType === "paid" ? !doc.isPublic : true)
  );

  // Sorting
  if (sortOption === "price-asc") {
    // Ưu tiên những tài liệu miễn phí lên đầu, sau đó sắp xếp các tài liệu có giá tăng dần
    filtered = filtered.sort((a: any, b: any) => {
      if (a.isPublic && !b.isPublic) return -1; // Đưa tài liệu miễn phí lên đầu
      if (!a.isPublic && b.isPublic) return 1;  // Đưa tài liệu trả phí xuống
      return a.price - b.price;                 // Sắp xếp giá tăng dần cho tài liệu trả phí
    });
  } else if (sortOption === "price-desc") {
    // Sắp xếp các tài liệu trả phí theo giá giảm dần, sau đó đến tài liệu miễn phí
    filtered = filtered.sort((a: any, b: any) => {
      if (a.isPublic && !b.isPublic) return 1;  // Đưa tài liệu miễn phí xuống cuối
      if (!a.isPublic && b.isPublic) return -1; // Đưa tài liệu trả phí lên đầu
      return b.price - a.price;                 // Sắp xếp giá giảm dần cho tài liệu trả phí
    });
  } else if (sortOption === "title-asc") {
    filtered = filtered.sort((a: any, b: any) => a.title.localeCompare(b.title));
  }

  setFilteredDocuments(filtered || []);
}, [selectedCategory, selectedCourse, listDocuments, searchQuery, filterType, sortOption]);

  if (isLoading && !checkNoDocument) {
    return <GetLoadingCourse />;
  }

  const indexOfLastDocument = currentPage * itemsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(indexOfFirstDocument, indexOfLastDocument);
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 flex items-center justify-between p-4">
        <Link className='flex gap-2 items-center' href="/">
          <Image
            className="nav__img"
            src="/img/.svg/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            quality={100}
          />
          <h1 className='text-2xl font-semibold tracking-wide'>
            E-<span className='text-primary-bg-color'>Study</span>
          </h1>
        </Link>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            placeholder="Tìm kiếm tài liệu..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mb-6 justify-center items-center mt-40">
        <select className="border border-gray-300 rounded-md py-2 px-4 w-full max-w-xs" value={selectedCourse || ''} onChange={(e) => setSelectedCourse(e.target.value ? String(e.target.value) : null)}>
          <option value="">Tất cả khóa học</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
        <select className="border border-gray-300 rounded-md py-2 px-4 w-full max-w-xs" value={selectedCategory || ''} onChange={(e) => setSelectedCategory(e.target.value ? String(e.target.value) : null)}>
          <option value="">Tất cả danh mục</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <select className="border border-gray-300 rounded-md py-2 px-4 w-full max-w-xs" value={filterType || ''} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">Tất cả</option>
          <option value="free">Miễn phí</option>
          <option value="paid">Trả phí</option>
        </select>
        <select className="border border-gray-300 rounded-md py-2 px-4 w-full max-w-xs" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sắp xếp</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="title-asc">A-Z</option>
        </select>
      </div>

      <div className="p-4">
        {checkNoDocument?.status === 404 || (currentDocuments.length === 0) ? (
          <div className="text-center mt-10 text-gray-500">Chưa có tài liệu nào</div>
        ) : (
          <>
            <h2 className="font-semibold text-3xl text-primary-bg-color text-center mt-10">Tài liệu tham khảo</h2>
            <AnimatePresence>
              <div className="mt-10 gap-8 grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                {currentDocuments.map((document: any, index: number) => (
                  <motion.div key={document.documentId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <DocumentCard document={document} />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button className={`px-4 py-2 mx-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-600 text-white'}`} onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                Trang trước
              </button>
              <span className="px-4 py-2">{currentPage}/{totalPages}</span>
              <button className={`px-4 py-2 mx-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-blue-600 text-white'}`} onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                Trang sau
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
