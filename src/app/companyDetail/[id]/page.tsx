"use client"
import Header from "@/components/ui/header"
import { MapPin, Map, Search, Link, Building2, Copy } from "lucide-react"
import CardJob from "@/components/cardJob"
import CardCompany from "@/components/cardCompany"
import { Button } from "@/components/ui/button"

import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/store/userStore'
import { useEffect, useState } from "react"
import { fetchCompanyDetail, getJobsOfCompany, followCompany, getStatusFollowCompany, unFollowCompany } from "@/services/companyService"

interface Company {
  id: number;
  name: string;
  imgUrl: string;
  companyWebsite: string;
  companySize: string;
  overview: string;
  address: {
    location: string;
    district: string;
    province: string;
  };
}

function CompanyDetail() {
  const {id} = useParams();
  const user = useAuth();
  const router = useRouter();
  console.log(id)

  const [company, setCompany] = useState<Company | null>(null);
  const [jobsOfCompany, setJobsOfCompany] = useState([])
  const [follow, setFollow] = useState(false)

  useEffect(() => {
    if (!id) {
        console.error("Khong ton tai.");
        return; 
    }
    const fetchDetail = async () => {
      try {
        const dataCompany = await fetchCompanyDetail(Number(id)).then((res) => res.data);
        const jobCompany = await getJobsOfCompany(Number(id)).then((res) => res.data);
        const status = await getStatusFollowCompany(Number(id)).then((res) => res.data);
        setFollow(status.follow)
        setCompany(dataCompany);
        setJobsOfCompany(jobCompany);
      }catch (error) {
        console.log('error: ', error);
      }
    }
    fetchDetail();
  },[id])

  const handleCopyLink = () => {
    if (company?.companyWebsite) {
      navigator.clipboard.writeText(company.companyWebsite);
      alert("Đã sao chép đường dẫn!");
    }
  };
  // xu li viec follow
  const handleFollowCompany = async (id: number) => {
    if (!user) {
      alert('Bạn cần đăng nhập để theo dõi công ty.')
      router.push('/login')
      return;
    }

    if (follow) {
      try {
        await unFollowCompany(Number(id));
        setFollow(false)
      } catch (error: any){
        console.error("Lỗi khi bỏ theo dõi công ty:", error.message);
      }
    }
    else {
      try {
        await followCompany(Number(id));
        setFollow(true);
      } catch (error: any){
        console.error("Lỗi khi theo dõi công ty:", error.message);
      }
    }
  }

  return (
    <div>
      <Header/>
      <div className="w-full bg-gray-100 px-20 py-4">
        <div className="flex flex-row gap-2 text-gray-700 mb-4 ">
          <h2>Danh sách Công ty {'>'} Thông tin công ty & tin tuyển dụng từ</h2>
          <p className="uppercase">{company?.name}</p>
        </div>
        <div className="h-[fit-content] w-full flex flex-row justify-between  bg-gradient-to-r from-green-950 to-green-600 rounded-lg mb-4">
          <div className="flex flex-row justify-start gap-8 px-4 py-4">
            <div className="w-30 h-30 bg-white flex justify-center items-center rounded-lg">
              <img src={company?.imgUrl} alt="logo company" className="object-contain"/>
            </div>
            <div className="flex flex-col gap-4 text-white mt-10 ">
              <p className="text-lg font-bold uppercase">{company?.name}</p>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row justify-center items-center gap-2 ">
                  <Link className="w-4 h-4"/>
                  <a href={company?.companyWebsite}>{company?.companyWebsite}</a>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 ">
                  <Building2 className="w-4 h-4"/>
                  <p>{company?.companySize}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pt-18">
            <Button 
              variant="secondary" 
              className="text-green-500 hover:text-green-500 hover:bg-green-200"
              onClick={() => handleFollowCompany(company?.id)}
              >
                {follow? 'Đang theo dõi': '+ Theo dõi công ty'}
            </Button>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {/* left */}
          <div className="left basis-7/10">
            <div className="bg-white rounded-lg mb-4">
              <div className="bg-gradient-to-r from-green-950 to-green-600 rounded-t-lg px-4 py-2">
                <h2 className="text-white text-lg font-bold">Giới thiệu công ty</h2>
              </div>
              <p className="px-4 py-4">{company?.overview}</p>
            </div>
            <div className="bg-white rounded-lg mb-4">
              <div className="bg-gradient-to-r from-green-950 to-green-600 rounded-t-lg px-4 py-2">
                <h2 className="text-white text-lg font-bold">Tuyển dụng</h2>
              </div>
              <div className="cardJob px-4 py-4 flex flex-col gap-2">
                {jobsOfCompany?.map((job) => (
                  <CardJob
                    key={job.id}
                    jobId={job.id}
                    jobTitle={job.name}
                    companyId={job.companyId}
                    companyName={job.companyName}
                    salary={`Từ ${job.salaryFrom} - ${job.salaryTo} VNĐ`}
                    location={job.city}
                    companyImgUrl={job.companyImg}
                    yearOfExperience={job?.yearOfExperience}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg mb-4">
              <div className="bg-gradient-to-r from-green-950 to-green-600 rounded-t-lg px-4 py-2">
                <h2 className="text-white text-lg font-bold">Thương hiệu lớn tiêu biểu cùng lĩnh vực</h2>
                <p className="text-white text-base font-semibold">Những thương hiệu tuyển dụng đã khẳng định được vị thế trên thị trường.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 px-4 py-4">
                {/* {jobsOfCompany?.map((job) => (
                  <CardCompany nameCompany={job.companyName} />
                ))}             */}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="right basis-3/10">
            <div className="bg-white rounded-lg mb-4">
              <div className="bg-gradient-to-r from-green-950 to-green-600 rounded-t-lg px-4 py-2">
                <h2 className="text-white text-lg font-bold">Thông tin liên hệ</h2>
              </div>
              <div className="px-4 py-4">
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="text-green-700"/> 
                  <p className="text-sm font-semibold">Địa chỉ công ty</p>
                </div>
                <p className="text-sm text-gray-700">{company?.address?.location}, {company?.address?.district}, {company?.address?.province}</p>
                <hr />
                <div className="flex flex-row gap-2 items-center">
                  <Map className="text-green-700"/>
                  <p className="text-sm font-semibold">Xem bản đồ</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg mb-4">
              <div className="bg-gradient-to-r from-green-950 to-green-600 rounded-t-lg px-4 py-2">
                <h2 className="text-white text-lg font-bold">Chia sẻ công ty tới bạn bè</h2>
              </div>
              <div className="px-4 py-4">
                <p className="text-sm font-medium mb-2">Sao chép đường dẫn</p>
                <div className="flex items-center gap-2 border border-gray-200 px-2 py-2 rounded-lg justify-between mb-2">
                  <span className="text-sm truncate">{company?.companyWebsite}</span>
                  <button onClick={handleCopyLink}>
                    <Copy className="w-4 h-4 text-gray-600 hover:text-green-600" />
                  </button>
                </div>
                <p className="text-sm font-medium mb-2">Chia sẻ qua mạng xã hội</p>
                <div className="flex flex-row gap-2">
                  <a href="#">
                    <div className="w-14 h-14 flex justify-center items-center border-1 border-gray-200 rounded-full">
                      <img src="/assets/facebook.png" alt="" className="object-contain"/>
                    </div>
                  </a>
                  <a href="#">
                    <div className="w-14 h-14 flex justify-center items-center border-1 border-gray-200 rounded-full">
                      <img src="/assets/twitter.svg" alt="" className="px-2 py-2 object-contain"/>
                    </div>
                  </a>
                  <a href="#">
                    <div className="w-14 h-14 flex justify-center items-center border-1 border-gray-200 rounded-full">
                      <img src="/assets/linkedln.png" alt="" className="object-contain"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CompanyDetail
