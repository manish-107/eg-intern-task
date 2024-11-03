import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import { FilterData } from "./components/FilterData";
import Footer from "./components/Footer";
import { ReloadProvider } from "./context/ContextState";
import StickyGuide from "./components/StickyGuide";

export default function Home() {
  return (
    <ReloadProvider>
      <div className="max-w-5xl mx-auto mt-0 md:mt-24 bg-white p-6 rounded-[2rem]  custom-shadow">
        <StickyGuide />
        <main className="max-w-xl mx-auto">
          <Header />
          <TodoInput />
          <FilterData />
          <Footer />
        </main>
      </div>
    </ReloadProvider>
  );
}
