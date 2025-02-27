import CardCv from "@/components/ui/cardCv";
import Image from "next/image";

interface CVItem {
  id: number;
  title: string;
  img: string;
  category: string
}

const cvSamples = [
  { id: 1, title: "CV Mẫu 1", img: "/assets/cv1.jpg", category: "Chuyên nghiệp" },
  { id: 2, title: "CV Mẫu 2", img: "/assets/cv1.jpg", category: "Đơn giản" },
  { id: 3, title: "CV Mẫu 3", img: "/assets/logo.jpg", category: "Thanh lịch" },
];
export default function CvSamplesList() {
  return (
    <section className="container mx-auto py-10">
      <h3 className="text-xl font-semibold mb-4">Mẫu CV theo style</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cvSamples.map((cv) => (
          <CardCv key={cv.id} title={cv.title} img={cv.img} category={cv.category} />
        ))}
      </div>
    </section>
  );
}