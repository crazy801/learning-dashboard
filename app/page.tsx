import { supabase } from "@/lib/supabase";
import Sidebar from "./components/Sidebar";
import HeroCard from "./components/HeroCard";
import ActivityCard from "./components/ActivityCard";
import CourseCard from "./components/CourseCard";

export default async function Home() {
  const { data: courses, error } =
    await supabase
      .from("courses")
      .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 p-10">
        {error.message}
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <HeroCard />

          <ActivityCard />

          {courses?.map((course) => (
            <CourseCard
  key={course.id}
  title={course.title}
  progress={course.progress}
  icon_name={course.icon_name}
/>
          ))}
        </div>
      </main>
    </div>
  );
}