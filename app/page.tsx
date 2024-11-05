import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import { FilterData } from "./components/FilterData";
import Footer from "./components/Footer";
import { ReloadProvider } from "./context/ContextState";
import StickyGuide from "./components/StickyGuide";

// Main function that renders the Home component
export default function Home() {
  return (
    // Wrapping the entire component tree in ReloadProvider for state management across components
    <ReloadProvider>
      <div className="custom-shadow mx-auto mt-0 max-w-5xl rounded-[2rem] bg-white p-6 md:mt-24">
        <StickyGuide />
        <main className="mx-auto max-w-xl">
          <Header />
          <TodoInput />
          <FilterData />
          <Footer />
        </main>
      </div>
    </ReloadProvider>
  );
}
