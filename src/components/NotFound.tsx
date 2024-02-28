import { Link } from "react-router-dom"


const NotFound = ():JSX.Element => {
  return (
    
    <div className="flex flex-col h-3/4 justify-center items-center ">
        <div className="flex flex-col items-center max-w-md text-center">
            <h2 className="font-extrabold text-xxl text-primary-light dark:text-primary-dark">
               404
            </h2>
            <p className="text-xl mb-3 text-primary-light dark:text-primary-dark">Sorry, we couldn't find this page.</p>
            <Link to="/" className="px-4 py-2 text-lg shadow-sm shadow-primary-light font-semibold rounded bg-element-light dark:bg-element-dark text-primary-light dark:text-primary-dark">Back to home</Link>
        </div>
    </div>

  )
}

export default NotFound