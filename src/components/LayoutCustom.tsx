import { Helper, Navigation } from "@/components";

export default function LayoutCustom({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen relative">
      <div className="py-10">
        <Navigation />
      </div>
      <div className="lg:h-[calc(100vh-226px)] overflow-y-scroll">{children}</div>
      <div className="w-full py-5 h-fit">
        <p className="text-center text-xs font-light text-black dark:text-white/70">
          Copyright 2024 Mochammad Naufal Ihza Syahzada
        </p>
      </div>
      <Helper />
    </main>
  );
}
