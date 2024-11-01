import Header from "./components/Header";
import Toast from "./components/Toast";
import TodoInput from "./components/TodoInput";

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Header />
      <Toast message="Error while adding" color="red" />
      <TodoInput />
    </div>
  );
}
