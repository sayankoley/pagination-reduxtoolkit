import { Link } from "react-router-dom"

export const ProductCard = ({ cur}) => {
    return (<div className=" bg-white rounded-lg shadow-lg overflow-hidden">
        <img loading="lazy"
            className="w-full h-48 object-contain"
            src={cur.thumbnail}
            alt="Product Image"
        />
        <div className="p-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Tags: {cur.tags.map((cur)=>cur).join(", ")} </span>
            <h3 className="text-lg font-semibold text-gray-800">{cur.title}</h3>
            <p className="text-gray-600 mt-2">{cur.description.substr(0,85)}...</p>
            <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{cur.shippingInformation}</p>
            </li>

            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{cur.returnPolicy}</p>
            </li>
          </ul>
            <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-gray-900">${cur.price}</span>

                <Link
                to={`/${cur.id}`}
                    className="px-4 py-2 cursor-pointer bg-[#ff3d00] text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Read More
                </Link>
            </div>
        </div>
    </div>)
}