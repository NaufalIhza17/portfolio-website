export default function About() {
  const tools = [
    { name: "Java", alot: false },
    { name: "JS", alot: false },
    { name: "HTML", alot: false },
    { name: "CSS", alot: false },
    { name: "PHP", alot: false },
    { name: "C/C++", alot: false },
    { name: "NextJS", alot: true },
    { name: "Bootstrap", alot: false },
    { name: "Python", alot: false },
    { name: "Laravel", alot: false },
    { name: "TailwindCSS", alot: true },
    { name: "Redux", alot: false },
    { name: "Postman", alot: true },
    { name: "Django", alot: false },
    { name: "PosgreSQL", alot: true },
    { name: "MySQL", alot: false },
    { name: "ReactJS", alot: false },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-16 pt-[15%] px-5">
      <section className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold">EDUCATION</p>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-light-gray-main dark:bg-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Computer Science
            </div>
            <div className="col-span-8 bg-white dark:bg-neutral-800 w-full text-sm font-light italic py-3 px-2 flex items-center">
              Asia University, Taiwan - Bachelor&apos;s Degree (Double Degree)
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-light-gray-main dark:bg-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Informatics Engineering
            </div>
            <div className="col-span-8 bg-white dark:bg-neutral-800 w-full text-sm font-light italic py-3 px-2 flex items-center">
              Sepuluh Nopember Institute of Technology - Bachelor&apos;s Degree
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4 bg-light-gray-main dark:bg-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Science
            </div>
            <div className="col-span-8 bg-white dark:bg-neutral-800 w-full text-sm font-light italic py-3 px-2 flex items-center">
              SMA 8 Malang - High School Diploma
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold text-right">LINGUISTICS</p>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-light-gray-main dark:bg-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              English
            </div>
            <div className="col-span-6 bg-white dark:bg-neutral-800 w-full text-sm font-light italic py-3 px-2 flex items-center justify-center">
              Fluent
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-light-gray-main dark:bg-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Indonesian
            </div>
            <div className="col-span-6 bg-white dark:bg-neutral-800 w-full text-sm font-light italic py-3 px-2 flex items-center justify-center">
              Native
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-light-gray-main dark:bg-gray-main w-full font-light py-3 px-2 flex items-center text-center justify-center">
              Mandarin
            </div>
            <div className="col-span-6 bg-white dark:bg-neutral-800 w-full text-sm font-light italic py-3 px-2 flex items-center justify-center">
              Beginner
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full">
        <p className="text-2xl font-bold">
          TOOLS{" "}
          <span className="text-xs font-light text-gray-main dark:text-white">
            (some of them...)
          </span>
        </p>
        <div className="grid grid-cols-3 gap-2 font-light">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`${
                tool.alot
                  ? "row-span-2 bg-white dark:bg-neutral-800"
                  : "bg-light-gray-main dark:bg-gray-main"
              } flex items-center justify-center p-3`}
            >
              {tool.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
