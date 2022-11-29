import React from "react";

const AddEditJob = () => {
  return (
    <div className="border-2 p-4 m-4 ">
      <form>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {/* Position */}
          <label className="grid gap-1" htmlFor="position">
            <span className="text-slate-600 text-sm"> Position </span>
            <input
              type={"text"}
              name="position"
              id="position"
              className="outline-none border-2 text-[15px]"
            />
          </label>

          {/* Position */}
          <label className="grid gap-1" htmlFor="position">
            <span className="text-slate-600 text-sm"> Position </span>
            <input
              type={"text"}
              name="position"
              id="position"
              className="outline-none border-2 text-[15px]"
            />
          </label>

          {/* Position */}
          <label className="grid gap-1" htmlFor="position">
            <span className="text-slate-600 text-sm"> Position </span>
            <input
              type={"text"}
              name="position"
              id="position"
              className="outline-none border-2 text-[15px]"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddEditJob;
