export const FilterData = () => {
  return (
    <div className="flex justify-around flex-col md:flex-row">
      <h1>Sort By :</h1>
      <label htmlFor="NotCompleted">
        <input type="radio" name="sort" id="NotCompleted" /> Not Completed
      </label>
      <label htmlFor="Completed">
        <input type="radio" name="sort" id="Completed" /> Completed
      </label>
      <label htmlFor="createdDate">
        <input type="radio" name="sort" id="createdDate" /> Created Date
      </label>
    </div>
  );
};
