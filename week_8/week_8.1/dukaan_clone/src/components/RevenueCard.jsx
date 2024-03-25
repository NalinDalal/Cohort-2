export const RevenueCard = ({
    title, 
    orderCount, 
    amount
})=>{
    return <div className="bg-white rounded shadow-md p-4">
    <div className="text-gray-700 flex justify-center flex-col">
        <div className="flex">
            <div>
                {title}
            </div>
        </div>
        <div className="bg-red-500 flex justify-center flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
        </div>

    </div>
    <div className="flex justify-between pt-2">
        <div className="font-semibold text-4xl">
            ${amount}
        </div>
        {orderCount ? <div className="cursor-pointer underline font-medium flex flex-col justify-center">
            <div className="flex">
                <div className="text-blue-700">
                    {orderCount} order(s)
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div> : null}
        </div>
    </div>
}