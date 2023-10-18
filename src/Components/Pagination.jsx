
const Pagination = ({page, setPage}) =>{

    return (
        <div className="w-full flex  items-center border bg-slate-800">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2 bottom-0 bg-slate-800">
                <div className="flex gap-xp-2">
                    {   page > 1 &&
                        <button onClick={()=>setPage(page-1)} className="rounded-md px-4 py-1 text-white">
                            Previous</button>
                    }
                    {
                        <button onClick={()=>setPage(page+1)} className="rounded-md px-4 py-1 text-white">
                            Next</button>
                    }
                        
                </div>

            </div>
        </div>
    )
}

export default Pagination;