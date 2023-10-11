import ContentContainer from "../../layout/ContentContainer.jsx";




export default function AboutPage() {

  return (
    <>
      <ContentContainer>
        <a className="btn btn-block" href={'https://github.com/adamdon/visit-verify'} target="_blank" >
          Click here for GitHub source code
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 0 16 16" width="30">
            <path fillRule="evenodd" d="M8 0a8 8 0 0 0-2.534 15.561c.4.074.546-.174.546-.386 0-.19-.007-.693-.010-1.36-2.002.364-2.426-.487-2.426-.487a1.914 1.914 0 0 0-.803-1.057c-.655-.447.05-.438.05-.438.723.05 1.106.747 1.106.747.642 1.1 1.683.784 2.094.6.065-.46.248-.784.453-.964-1.587-.18-3.25-.793-3.25-3.527 0-.78.28-1.42.747-1.918-.075-.183-.324-.912.072-1.9 0 0 .6-.194 1.974.734a6.63 6.63 0 0 1 1.773-.243 6.63 6.63 0 0 1 1.773.243c1.372-.928 1.972-.734 1.972-.734.397 1.188.147 1.717.072 1.9.468.498.747 1.138.747 1.918 0 2.739-1.666 3.345-3.255 3.523.256.222.48.658.48 1.32 0 .954-.008 1.723-.008 1.959 0 .214.145.465.55.385A8.004 8.004 0 0 0 8 0z"/>
          </svg>
        </a>
      </ContentContainer>


      <ContentContainer>
        <div className="hero bg-base-200 rounded">
          <div className="hero-content text-center">
            <div className="w-100">

              <div className="license">
                <a href={'https://en.wikipedia.org/wiki/MIT_License'} className="link link-hover text-2xl font-bold" target="_blank" >MIT License</a>

                <p>Copyright (c) 2023</p>

                <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

                <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
              </div>

            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}

