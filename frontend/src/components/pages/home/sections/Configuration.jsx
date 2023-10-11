import ContentContainer from "../../../layout/ContentContainer.jsx";




export default function Configuration(props) {




    return (
    <>
        <ContentContainer>
            <div className="hero bg-base-200 rounded">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">visit-verify</h1>
                        <p className="py-6">text here</p>

                        <div className="flex justify-center">
                            <div className="form-control w-1/2">
                                <label className="cursor-pointer label content-center">
                                    {/*<span className="label-text">Pre-populate inputs</span>*/}
                                    {/*<input type="checkbox" className="toggle toggle-primary" onChange={event => props.setEnableDefault(event.target.checked)} checked={props.enableDefault} />*/}
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ContentContainer>
    </>
  )
}