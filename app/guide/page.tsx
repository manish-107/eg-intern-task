import GFooter from "../components/guide/GFooter";
import GHeader from "../components/guide/GHeader";

export default function Guide() {
  return (
    <div className="bg-[#1a171d] text-[#e5d4ff] min-h-screen flex flex-col">
      <GHeader />
      <main className="flex-grow max-w-2xl mt-5 sm:max-w-2xl mx-auto">
        <ul className="space-y-4 ">
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white"> ➕ Add New Task:</strong>
            <p className="ml-7">
              Users can enter a new task in the input field at the top and add
              it to the list by clicking the Add button.
            </p>
          </li>
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white">✨ Sort Options:</strong>
            <ul className="ml-7 mt-2 space-y-2">
              <li>
                <strong>Sort by Not Completed:</strong> Displays only the tasks
                that are yet to be completed.
              </li>
              <li>
                <strong>Sort by Completed:</strong> Displays only the tasks that
                are marked as completed.
              </li>
              <li>
                <strong>Sort by Recent To-Do:</strong> Allows users to sort
                tasks based on their recency, showing newly added tasks at the
                top or in the desired order.
              </li>
            </ul>
          </li>
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white">
              ✅ Mark Task as Complete:
            </strong>
            <p className="ml-7">
              Each task has a checkbox to mark it as completed. Completed tasks
              are visually differentiated (e.g., with a checkmark and possibly
              strikethrough styling).
            </p>
          </li>
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white">✏️ Edit Task:</strong>
            <p className="ml-7">
              Each task has an Edit button, allowing users to modify the task
              description.
            </p>
          </li>
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white">❌ Delete Task:</strong>
            <p className="ml-7">
              Each task has a Delete button to remove it from the list.
            </p>
          </li>
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white">📌 Clear All Tasks:</strong>
            <p className="ml-7">
              A Clear all option is available at the bottom to delete all tasks
              in the list at once.
            </p>
          </li>
          <li className="mb-3 border-b-2 p-3 border-[#f3f3f334] hover:bg-[#be9fe31f] rounded-s-none md:rounded-lg transition duration-500 ease-in-out">
            <strong className="text-lg text-white">🔢 Task Counter:</strong>
            <p className="ml-7">
              A counter at the bottom displays the total number of items
              currently in the list, helping users keep track of their tasks.
            </p>
          </li>
        </ul>
      </main>
      <GFooter />
    </div>
  );
}
