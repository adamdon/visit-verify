export default function ContentContainer({children}) {


    return (
    <>
        <div className="flex justify-center">
            <div className="card w-[800px] bg-neutral text-neutral-content mt-5">
                <div className="card-body items-center text-center">

                    {children}

                </div>
            </div>
        </div>
    </>
  )
}