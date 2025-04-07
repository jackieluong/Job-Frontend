"use client"

import SearchBar from '@/components/searchBar/searchBar';
import React, { useEffect, useRef, useState } from 'react';
import JobSection from './JobSection';
import { JobSearchInfo } from '@/lib/type';
import { Button } from '@/components/ui/button';
import { searchJobs } from '@/services/jobService';
import { Bell, Mailbox } from 'lucide-react';

type pageProps = {
    // Define your props here
};

const sortOptions = [
    { value: 'createdAt', label: 'Ngày đăng (mới nhất)' },
    { value: 'salaryFrom', label: 'Lương (cao - thấp)' },
    { value: 'updatedAt', label: 'Ngày cập nhật' },
]
export default function page(props: pageProps) {
    const keywordRef = useRef<string | null>(null); 

    const [city, setCity] = useState<string[] | null>(null);
    // const [minSalary, setMinSalary] = useState<number | null>(null);
    const [salaryRange, setSalaryRange] = useState<string | null>(null);
    // const [maxSalary, setMaxSalary] = useState<number | null>(null);
    const [jobType, setJobType] = useState<string | null>(null);
    const [level, setLevel] = useState<string | null>(null);
    // const [minExperience, setMinExperience] = useState<number | null>(null);
    // const [maxExperience, setMaxExperience] = useState<number | null>(null);
    const [industry, setIndustry] = useState<string | null>(null); 
    const [experienceRange, setExperienceRange] = useState<string | null>(null);

    const [jobs, setJobs] = useState<JobSearchInfo[] | null>(null);
    
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(16);
    const [sortBy, setSortBy] = useState<string | null>(null);

    const [minSalary, maxSalary] = salaryRange?.split('-').map((val) => Number(val)) || [];
    const [minExperience, maxExperience] = experienceRange?.split('-').map((val) => Number(val)) || [];

    const [isLoading, setIsLoading] = useState(false);
    const total = useRef<number>(0);
    const pageCount = useRef<number>(0);

    const handleClickReset = () => {
        console.log("Reset clicked")
        keywordRef.current = '';
        setCity(null);
        setSalaryRange(null);
        setJobType(null);
        setLevel(null);
        setExperienceRange(null);
        setIndustry(null);
    }

    const fetchJobs = async () => {
        try {
          setIsLoading(true);
        //   if(!user) return;
          const data = await searchJobs(currentPage+1, pageSize, sortBy, false, keywordRef.current, jobType, industry, level, minExperience, maxExperience, minSalary, maxSalary, city);
          
          total.current = data.totalElement;
          pageCount.current = data.totalPage;
          setJobs(data.data);


        } catch (error) {
          console.error("Error fetching jobs:", error);
        }finally{
            setIsLoading(false);

            
        }
      }

    const handleClickSearch = () => {
        console.log("Search clicked")
        fetchJobs();
        setCurrentPage(0); // Reset current page to 0 when searching
    }
    useEffect(() => {
          
    
        fetchJobs();
        
    },[currentPage, pageSize, sortBy, jobType, industry, level, minExperience, maxExperience, minSalary, maxSalary]);


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-800 to-green-500 w-full text-white py-6 text-center shadow-md">
                <div className="lg:w-3/4 mx-auto ">
                    {/* <h1 className="text-3xl font-bold tracking-wide">Tìm kiếm công việc phù hợp với bạn</h1>
                    <p className="mt-2 text-gray-200 text-lg">Hàng ngàn cơ hội việc làm đang chờ bạn</p>
     */}
                    {/* Search Bar */}
                    <div className="mt-5 mb-3 shadow-lg">
                        <SearchBar 
                            keywordRef={keywordRef } 
                            city={city} setCity={setCity}
                            salaryRange={salaryRange} setSalaryRange={setSalaryRange}
                            jobType={jobType} setJobType={setJobType}
                            level={level} setLevel={setLevel}
                            experienceRange={experienceRange} setExperienceRange={setExperienceRange}
                            industry={industry} setIndustry={setIndustry}
                            onSearchClick={handleClickSearch} // Optional function to handle search click

                            onClickReset={handleClickReset} // Optional function to handle reset click
                            />
                    </div>
                </div>
            </section>
    
            {/* Job Listings Section */}
            <div className="lg:w-3/4 mx-auto mt-8 space-y-4">
    {/* Section Title */}
    <div className="bg-white rounded-lg p-4">
        <p className="text-gray-600 text-lg">Khám phá những công việc phù hợp với bạn</p>
        <p className="text-lg text-black mt-1">
            Tuyển dụng <span className="font-bold text-green-600">{total.current}</span> công việc {keywordRef.current && <span className="font-semibold"> {keywordRef.current}</span>} phù hợp
        </p>
    </div>

    {/* Sorting Section */}
    <div className="flex flex-wrap gap-4 items-center mt-5 p-4 ">
        <h2 className="">Sắp xếp theo:</h2>
        <div className="flex gap-3">
            {sortOptions.map((option, index) => (
                <Button 
                    key={index} 
                    variant="outline"
                    onClick={() => setSortBy(option.value)}
                    className={`border-gray-200 transition rounded-2xl ${sortBy === option.value ? 'bg-blue-200 text-blue-600' : ''}`}
                >
                    {option.label}
                </Button>
            ))}
        </div>
    </div>

    {/* Job Listings */}
    {
        total.current <= 0 ? (
            <div className='flex justify-center items-center h-32 py-12'>Chưa tìm thấy việc làm phù hợp với yêu cầu của bạn.</div>
        ) : (
        <div className="mt-6">
            <JobSection jobs={jobs} currentPage={currentPage} isLoading={isLoading}  pageCount={pageCount.current} onPageChange={setCurrentPage} />
        </div>
        )
    }
   
   
            <div className='bg-white flex flex-col lg:flex-row lg:justify-between lg:items-center px-8 py-5'>
                <div className='flex gap-6'>
                    <div className='p-3 bg-green-400 rounded-xl'>
                    <Mailbox className='h-7 w-7  ' /></div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold text-gray-600'>Nhận thông báo việc làm qua email</p>
                        <p className='text-gray-500'>Nhận thông báo khi có việc làm mới</p>
                    </div>
                </div>

                <Button size="lg" className=''><Bell /> Nhận thông báo</Button>
            </div>

        

    
            </div>
        
        
        
        </div>
    );
    
}