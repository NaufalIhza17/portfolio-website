"use client";

export default function About() {
  const tools = [
    { name: "Java", color: "orange", alot: false },
    { name: "JS", color: "gray", alot: false },
    { name: "HTML", color: "purple", alot: false },
    { name: "CSS", color: "gray", alot: false },
    { name: "PHP", color: "orange", alot: false },
    { name: "C/C++", color: "purple", alot: false },
    { name: "NextJS", color: "purple", alot: true },
    { name: "Bootstrap", color: "purple", alot: false },
    { name: "Python", color: "gray", alot: false },
    { name: "Laravel", color: "orange", alot: false },
    { name: "TailwindCSS", color: "gray", alot: true },
    { name: "Redux", color: "orange", alot: false },
    { name: "Postman", color: "purple", alot: true },
    { name: "Django", color: "gray", alot: false },
    { name: "PosgreSQL", color: "purple", alot: true },
    { name: "MySQL", color: "purple", alot: false },
    { name: "ReactJS", color: "gray", alot: false },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-16 pt-[15%] px-5">
      <section className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold">EDUCATION</p>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-light-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Computer Science
            </div>
            <div className="col-span-8 bg-white w-full text-sm font-light italic py-3 px-2 flex items-center">
              Asia University, Taiwan - Bachelor&apos;s Degree (Double Degree)
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-light-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Informatics Engineering
            </div>
            <div className="col-span-8 bg-white w-full text-sm font-light italic py-3 px-2 flex items-center">
              Sepuluh Nopember Institute of Technology - Bachelor&apos;s Degree
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-light-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Science
            </div>
            <div className="col-span-8 bg-white w-full text-sm font-light italic py-3 px-2 flex items-center">
              SMA 8 Malang - High School Diploma
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold text-right">LINGUISTICS</p>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-light-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              English
            </div>
            <div className="col-span-6 bg-white w-full text-sm font-light italic py-3 px-2 flex items-center justify-center">
              Fluent
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-light-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Indonesian
            </div>
            <div className="col-span-6 bg-white w-full text-sm font-light italic py-3 px-2 flex items-center justify-center">
              Native
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-light-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Mandarin
            </div>
            <div className="col-span-6 bg-white w-full text-sm font-light italic py-3 px-2 flex items-center justify-center">
              Beginner
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold">TOOLS <span className="text-xs font-light text-gray-main">(some of them...)</span></p>
        <div className="grid grid-cols-3 gap-2 font-light">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`bg-${tool.color}-main/50 ${tool.alot && "row-span-2"} flex items-center justify-center p-3`}
            >
              {tool.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
