'use client';

import { JobPostingInfo } from '@/lib/interface';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { industryOptions } from '@/data/data';
import { provinceOptions } from '@/data/locationData';
import { fetchDistrict, fetchProvinces } from '@/services/locationService';
import TextEditor from '../TextEditor/textEditor';

import { RadioGroup } from '@radix-ui/react-radio-group';
import { jobTypeOptions } from '@/data/jobTypeOptions';
import { RadioItem } from '../ui/radio';

interface Province {
  code: string;
  name: string;
}

interface District {
  code: string;
  name: string;
}

type BasicInfoProps = {
  jobInfo: JobPostingInfo;
  setJobInfo?: React.Dispatch<React.SetStateAction<JobPostingInfo>>;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
export default function BasicInfo({ jobInfo, setJobInfo }: BasicInfoProps) {
  console.log('jobInfo', jobInfo.description);
  // const titleRef = useRef<HTMLInputElement>(null);
  // const industryRef = useRef<HTMLSelectElement>(null);
  // const provinceRef = useRef<HTMLSelectElement>(null);
  // const districtRef = useRef<HTMLSelectElement>(null);
  // const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const salaryFromRef = useRef<HTMLInputElement>(null);
  // const salaryToRef = useRef<HTMLInputElement>(null);
  // const deadlineRef = useRef<HTMLInputElement>(null);

  // const [provinceCode, setProvinceCode] = useState<number | null>(null);
  const [provinces, setProvinces] = useState<Province[]>([]);

  const [districts, setDistricts] = useState<District[]>([]);

  const [provinceCode, setProvinceCode] = useState<string | null>(null);
  // const [provinceName, setProvinceName] = useState<string | null>(null);

  const [editorState, setEditorState] = useState<string>('');
  // Generic handler for all input fields
  //  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value, type } = e.target;

  //   console.log("trigger change")
  //   setJobInfo((prev) => ({
  //     ...prev,
  //     [name]: type === 'number' ? Number.parseInt(value) :  value, // Dynamically update based on the field's 'name' attribute
  //   }));
  // };

  useEffect(() => {
    const getProvinces = async () => {
      const data = await fetchProvinces();

      const provinces = data?.map((province: Province) => {
        return { code: province.code, name: province.name };
      });
      setProvinces(provinces);
    };

    getProvinces();
  }, []);

  console.log(jobInfo);

  useEffect(() => {
    const getDistricts = async () => {
      if (provinceCode) {
        const data = await fetchDistrict(Number.parseInt(provinceCode));

        const districts = data?.map((district: District) => {
          return { code: district.code, name: district.name };
        });

        setDistricts(districts);
      }
    };
    getDistricts();
  }, [provinceCode]);

  const handleProvinceChange = (value: string) => {
    jobInfo.province = value; // value is name of province

    const code = provinces.find((p) => p.name === value)?.code;
    setProvinceCode(code?.toString() || null);
  };

  const handleEditorState = (value: string) => {
    jobInfo.description = value;
    setEditorState(value);
  };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);

  //   for (const [key, value] of formData.entries()) {
  //     console.log(`${key}: ${value}`);
  //   }

  // }

  return (
    <div>
      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">Chức danh tuyển dụng</Label>
        {/* <Input name='title' ref={titleRef} placeholder="Nhập chức danh"></Input> */}
        <Input
          name="title"
          defaultValue={jobInfo.title}
          onChange={(e) => (jobInfo.title = e.target.value)}
          placeholder="Nhập chức danh"
          required
        ></Input>
      </div>

      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">Ngành nghề</Label>
        <Select
          name="industry"
          defaultValue={jobInfo.industry}
          onValueChange={(value) => (jobInfo.industry = value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn lĩnh vực" />
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
      <div className="py-4 flex flex-col gap-4">
        {/* <Label className="font-medium">Địa điểm làm việc</Label> */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="flex flex-col gap-4 lg:flex-1">
            <Label className="font-medium">Tỉnh/Thành phố</Label>
            <Select
              name="province"
              defaultValue={jobInfo.province}
              onValueChange={(value) => handleProvinceChange(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn tỉnh/thành phố" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province, index) => (
                  <SelectItem key={index} value={province.name}>
                    {province.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4 lg:flex-1">
            <Label className="font-medium">Quận/Huyện</Label>
            <Select
              name="district"
              defaultValue={jobInfo.district}
              onValueChange={(value) => (jobInfo.district = value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn quận/huyện" />
              </SelectTrigger>
              <SelectContent>
                {districts?.map((district, index) => (
                  <SelectItem key={index} value={district.name}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* <div className='flex flex-col gap-4'>
            <Label className="font-medium">Địa chỉ</Label>
            <Input placeholder="Nhập địa điểm"></Input>
          </div> */}
        </div>
      </div>
      <div className="py-4 flex flex-col gap-4 flex-1">
        <Label className="font-medium">Số lượng tuyển</Label>
        <Input
          name="quantity"
          defaultValue={jobInfo.quantity}
          onChange={(e) => (jobInfo.quantity = Number(e.target.value))}
          type="number"
          min={0}
          placeholder="Nhập số lượng cần tuyển"
        />
      </div>
      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">
          Mô tả công việc (nên bao gồm Mô tả Công việc, Yêu cầu công việc)
        </Label>
        <TextEditor
          onChange={handleEditorState}
          initialContent={jobInfo.description}
        />
        <input type="hidden" name="description" value={editorState} />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="py-4 flex flex-col gap-4 flex-1">
          <Label className="font-medium">Lương tối thiểu</Label>
          <Input
            name="salaryFrom"
            defaultValue={jobInfo.salaryFrom}
            onChange={(e) => (jobInfo.salaryFrom = Number(e.target.value))}
            type="number"
            min={0}
            placeholder="Nhập lương tối thiểu"
          />
        </div>
        <div className="py-4 flex flex-col gap-4 flex-1">
          <Label className="font-medium">Lương tối đa</Label>
          <Input
            name="salaryTo"
            defaultValue={jobInfo.salaryTo}
            onChange={(e) => (jobInfo.salaryTo = Number(e.target.value))}
            type="number"
            min={0}
            placeholder="Nhập lương tối đa"
          />
        </div>
      </div>
      <div className="py-4 flex flex-col gap-4 ">
        <Label className="font-medium">Hình thức làm việc</Label>
        <RadioGroup
          name="jobType"
          onValueChange={(value) => (jobInfo.jobType = value)}
          defaultValue={jobInfo.jobType}
          className="flex space-x-8"
        >
          {jobTypeOptions.map((jobType, index) => (
            <RadioItem key={index} value={jobType.value}>
              {jobType.label}
            </RadioItem>
          ))}
        </RadioGroup>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">Hạn nộp hồ sơ</Label>
        <Input
          name="deadline"
          onChange={(e) => (jobInfo.deadline = e.target.value)}
          defaultValue={jobInfo.deadline}
          type="date"
          className="w-1/2 flex justify-between"
          placeholder="Nhập hạn nộp hồ sơ"
        ></Input>
      </div>
    </div>
  );
}
