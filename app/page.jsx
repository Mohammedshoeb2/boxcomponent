// import box from "";
const Page = ({children}) => {
  return (
    <div className=" w-[1233px]">
      <div className="heading flex mb-5 mt-4 ">
      <h2 className="text-black font-segoe-ui text-2xl font-semibold leading-6">Workflow Management</h2>
      
      
      </div>
     <div className="project-tab w-[1218px] bg-white flex items-center justify-between h-14 px-6 py-3.5 mb-5">
        <h3 className="text-black font-segoe-ui text-base font-semibold leading-7">All Projects</h3>
        <select name="Project" className=" border border-gray-300 bg-white shadow-m py-1 px-4"><option value="">All Project</option></select>
      </div>
    </div>
  )
}

export default Page


