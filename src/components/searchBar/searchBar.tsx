import React from 'react';
import { Input } from '../ui/input';
import { MapPin, Search } from 'lucide-react';
import { MultiSelect } from '../multiSelect/multi-select';
import {
  experienceRangeOptions,
  industryOptions,
  jobTypeOptions,
  levelOptions,
  provinceOptions,
  salaryOptions,
} from '@/data/options';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';

type SearchBarProps = {
  keywordRef: React.RefObject<string> | null; // Accept ref instead of state
  city: string[] | null;
  setCity: (value: string[] | null) => void;

  jobType: string | null;
  setJobType: (value: string | null) => void;
  level: string | null;
  setLevel: (value: string | null) => void;

  salaryRange: string | null;
  setSalaryRange: (value: string | null) => void;

  experienceRange: string | null;
  setExperienceRange: (value: string | null) => void;
  industry: string | null;
  setIndustry: (value: string | null) => void;

  onSearchClick?: () => void; // Optional function to handle search click

  onClickReset?: () => void; // Optional function to handle reset click
};

export default function SearchBar({
  keywordRef,
  city,
  setCity,
  salaryRange,
  setSalaryRange,
  jobType,
  setJobType,
  level,
  setLevel,
  experienceRange,
  setExperienceRange,
  industry,
  setIndustry,
  onSearchClick,
  onClickReset,
}: SearchBarProps) {
  console.log('Cities ', city);
  console.log('JobType ', jobType);
  console.log('Salary ', salaryRange);
  return (
    <div className="min-h-[100px] flex flex-col gap-4 shadow-2xl">
      {/* Search Input */}
      <div className="relative bg-white shadow-lg h-[54px] rounded-md flex items-center">
        <div className="absolute inset-y-0 left-1 flex items-center pl-1 pointer-events-none">
          <Search className="w-6 h-6 text-gray-500" />{' '}
        </div>

        <Input
          className="pl-10 w-1/2 lg:w-4/7  text-black text-base rounded-r-none  h-full"
          placeholder="Vị trí tuyển dụng"
          defaultValue={keywordRef?.current}
          onChange={(e) => (keywordRef.current = e.target.value)}
          // value={keywordRef?.current || ''} // Controlled input
        />

        <div className="w-2/7 h-full relative">
          <div className="absolute inset-y-0 left-1 flex items-center pl-0 lg:pl-1 pointer-events-none">
            {' '}
            <MapPin className="w-6 h-6 text-gray-500" />{' '}
          </div>
          <MultiSelect
            onValueChange={(value) => setCity(value)}
            maxCount={1}
            className="pl-7 h-full rounded-none"
            placeholder="Địa điểm"
            options={provinceOptions}
          />
        </div>
        {/* <div className="w-1/6 h-full relative" >
            <div className="absolute inset-y-0 left-1 flex items-center pl-0 lg:pl-1 pointer-events-none"> < BriefcaseBusiness className='w-6 h-6 text-gray-500'/> </div>
            <Select
            
              name="industry"
            //   defaultValue={defaultOption}
            //   onValueChange={(value) => handleCVStatusChange(value)}
            onValueChange={(value) => setIndustry(value)}
            >
              <SelectTrigger className='pl-11 h-full rounded-none'>
                <SelectValue placeholder="Ngành nghề" />
              </SelectTrigger>
              <SelectContent>
                {industryOptions.map((industry, index) => (
                  <SelectItem key={index} value={industry.value}>
                    {industry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
        </div> */}
        <div className="w-1/7 h-full flex items-center px-2">
          <Button
            onClick={onSearchClick}
            className="w-full rounded-xl text-base"
          >
            Tìm kiếm
          </Button>
        </div>
      </div>

      {/* Filtering Section */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-green-100 shadow-md text-white rounded-2xl">
          <Select
            name="industry"
            //   defaultValue={defaultOption}
            //   onValueChange={(value) => handleCVStatusChange(value)}
            onValueChange={(value) => setIndustry(value)}
            value={industry || ''}
          >
            <SelectTrigger className="pl-11 h-full ">
              <SelectValue placeholder="Ngành nghề" />
            </SelectTrigger>
            <SelectContent>
              {industryOptions.map((industry, index) => (
                <SelectItem key={index} value={industry.value}>
                  {industry.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-green-100 shadow-md rounded-2xl text-white">
          <Select
            name="jobType"
            //   defaultValue={defaultOption}
            //   onValueChange={(value) => handleCVStatusChange(value)}
            onValueChange={(value) => setJobType(value)}
            value={jobType || ''}
          >
            <SelectTrigger className="pl-11 h-full">
              <SelectValue placeholder="Loại hình" />
            </SelectTrigger>
            <SelectContent>
              {jobTypeOptions.map((jobType, index) => (
                <SelectItem key={index} value={jobType.value}>
                  {jobType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-green-100 shadow-md rounded-2xl text-white">
          <Select
            value={salaryRange || ''}
            name="salary"
            //   defaultValue={defaultOption}
            onValueChange={(value) => {
              // const [minSal, maxSal] = value.split('-').map((val) => Number(val));
              // console.log(minSal, maxSal);
              // setMinSalary(minSal);
              // setMaxSalary(maxSal);
              setSalaryRange(value === '-1' ? null : value);
            }}
          >
            <SelectTrigger className="pl-11 h-full">
              <SelectValue placeholder="Mức lương" />
            </SelectTrigger>
            <SelectContent>
              {salaryOptions.map((salary, index) => (
                <SelectItem key={index} value={salary.value}>
                  {salary.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-green-100 shadow-md rounded-2xl text-white">
          <Select
            onValueChange={(value) => setLevel(value)}
            name="level"
            //   defaultValue={defaultOption}
            //   onValueChange={(value) => handleCVStatusChange(value)}
            value={level || ''}
          >
            <SelectTrigger className="pl-11 h-full">
              <SelectValue placeholder="Cấp bậc" />
            </SelectTrigger>
            <SelectContent>
              {levelOptions.map((level, index) => (
                <SelectItem key={index} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="bg-green-100 shadow-md rounded-2xl text-white">
          <Select
            value={experienceRange || ''}
            name="experienceRange"
            //   defaultValue={defaultOption}
            onValueChange={(value) =>
              setExperienceRange(value === '-1' ? null : value)
            }
          >
            <SelectTrigger className="pl-11 h-full">
              <SelectValue placeholder="Kinh nghiệm" />
            </SelectTrigger>
            <SelectContent>
              {experienceRangeOptions.map((experience, index) => (
                <SelectItem key={index} value={experience.value}>
                  {experience.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="ghost"
          onClick={onClickReset}
          className="bg-green-500  text-white hover:bg-white border-white border-1 hover:text-black transition rounded-xl"
        >
          Xóa lọc
        </Button>
      </div>
    </div>
  );
}
