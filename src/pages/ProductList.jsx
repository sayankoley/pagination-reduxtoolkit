import { useDispatch, useSelector } from 'react-redux'


import { useEffect, useState } from 'react'
import { fetchProduct } from '../store/productSlice'
import { ProductCard } from '../components/ProducCard'
import { Loader } from '../components/Loader'

export const ProductList = () => {
    useEffect(() => {
        dispatch(fetchProduct())

    }, [])

    const value = useSelector((state) => state.product)
    const dispatch = useDispatch()

    const { loading, error, data } = value

    const [pages, perPage] = useState(9)
    const [page, setPage] = useState(1)

    const lastIndex = pages * page
    const firstIndex = lastIndex - pages
    let slices = null
    let pagination = 0
    let pagin = []
    if (data?.products?.length > 1) {
        slices = data.products?.slice(firstIndex, lastIndex)
        pagination = Math.ceil(data?.products?.length / pages)
        pagin = [...Array(pagination).keys()]
    }


    //console.log(page===2)
    if (loading) {
        return (<Loader/>)
    }
    if (error) {
        return (<div>Something Went Wrong!</div>)
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {slices?.map((cur) => {
                    return <ProductCard key={cur.id} cur={cur} />
                })}

            </div>

            <div className="flex items-center justify-between  border-t border-gray-200 bg-white px-4 py-3 mt-15 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 flex-col mt-5  gap-8 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{page}</span> to <span className="font-medium">{lastIndex}</span> of{' '}
                            <span className="font-medium">{data?.products?.length}</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="py-5 flex-wrap  isolate inline-flex -space-x-px rounded-md shadow-xs">
                            <div disabled={page === 2}
                                onClick={() => setPage((prev) => prev === 1 ? 1 : prev - 1)}
                                className="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-[#fff] inset-ring bg-[#ff3d00] inset-ring-gray-300 hover:text-[#000] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="">Prev</span>

                            </div>
                            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                            {pagin.map((cur,i) => {
                                return (
                                    <div key={i}
                                        onClick={() => setPage(cur + 1)}
                                        aria-current="page"
                                        className={page === (cur + 1) ? "relative z-10 inline-flex items-center bg-[#ff3d00] hover:bg-[#ff3d00] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2  cursor-pointer hover:text-[#fff] hover:bg-[#ff3d00]"}
                                    >
                                        {cur + 1}
                                    </div>
                                )
                            })}

                            <div
                                onClick={() => setPage((prev) => prev === pagination ? prev : prev + 1)}
                                className="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-[#fff] inset-ring bg-[#ff3d00] inset-ring-gray-300 hover:text-[#000] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="">Next</span>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    )
}
