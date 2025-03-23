
import { JobPostingInfo } from '@/lib/interface';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioItem } from '../ui/radio';
import { genderOption } from '@/data/genderOption';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { experienceOption } from '@/data/experienceOption';
import { levelOptions } from '@/data/levelOptions';
import { educationOption } from '@/data/educationOption';

type RequirementProps = {
    // Define your props here
    jobInfo: JobPostingInfo;
};

export default function Requirement({jobInfo}: RequirementProps) {
    return (
    <div>
            
      <div className="py-4 flex flex-col gap-4">
      <Label className="font-medium">Giới tính</Label>
        <RadioGroup name='gender' onValueChange={(value) => jobInfo.gender = value}  defaultValue={jobInfo.gender} className="flex space-x-8">
        {
          genderOption.map((gender, index) => (

            <RadioItem key={index} value={gender.value}>
              {gender.label}
            </RadioItem>
          ))
        }
      </RadioGroup>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">Kinh nghiệm</Label>
        <Select name='experience' defaultValue={jobInfo.experience.toString()} onValueChange={(value) => jobInfo.experience = Number(value)} >
          <SelectTrigger>
            <SelectValue placeholder="Chọn kinh nghiệm" />
          </SelectTrigger>
          <SelectContent>
            {experienceOption.map((experience, index) => (
              <SelectItem key={index} value={experience.value}>
                {experience.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">Cấp bậc</Label>
        <Select name='level' defaultValue={jobInfo.level} onValueChange={(value) => jobInfo.level = value} >
          <SelectTrigger>
            <SelectValue placeholder="Chọn cấp bậc" />
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
      <div className="py-4 flex flex-col gap-4">
        <Label className="font-medium">Bằng cấp</Label>
        <Select name='education' defaultValue={jobInfo.education} onValueChange={(value) => jobInfo.education = value} >
          <SelectTrigger>
            <SelectValue placeholder="Chọn bằng cấp" />
          </SelectTrigger>
          <SelectContent>
            {educationOption.map((education, index) => (
              <SelectItem key={index} value={education.value}>
                {education.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>
      

        </div>
    );
}