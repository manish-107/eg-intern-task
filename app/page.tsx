import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import { FilterData } from "./components/FilterData";
import Footer from "./components/Footer";
import { ReloadProvider } from "./context/ContextState";

export default function Home() {
  return (
    <ReloadProvider>
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <Header />
        <TodoInput />
        <FilterData />
        <Footer />
      </div>
    </ReloadProvider>
  );
}
