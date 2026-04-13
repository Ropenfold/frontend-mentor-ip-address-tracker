import { IPData } from "@/types/ip";


export default function ResultsTable({ data }: { data: IPData | null }) {

    return (

<main className="grid grid-cols-1 gap-6 
                 text-center md:text-left
                 md:grid-cols-2 md:gap-x-10 md:gap-y-8
                 lg:flex lg:items-center lg:justify-between
                 top-34 md:top-42 lg:top-50
                 h-fit w-[80%] p-10 bg-white fixed left-1/2 -translate-x-1/2 rounded-lg z-50">

  {data ? (
    <>
      <div className="flex-1">
        <div className="text-sm text-gray-500">IP Address</div>
        <div className="text-xl lg:text-2xl font-bold text-gray-800">
          {data.ip}
        </div>
      </div>
      <div className="hidden lg:block w-px h-16 bg-[#979797]"></div>

      <div className="flex-1">
        <div className="text-sm text-gray-500">Location</div>
        <div className="text-xl lg:text-2xl font-bold text-gray-800">
          {data.location.city}, {data.location.country}
        </div>
      </div>
      <div className="hidden lg:block w-px h-16 bg-[#979797]"></div>

      <div className="flex-1">
        <div className="text-sm text-gray-500">Timezone</div>
        <div className="text-xl lg:text-2xl font-bold text-gray-800">
          {data.location.timezone}
        </div>
      </div>
      <div className="hidden lg:block w-px h-16 bg-[#979797]"></div>

      <div className="flex-1">
        <div className="text-sm text-gray-500">ISP</div>
        <div className="text-xl lg:text-2xl font-bold text-gray-800">
          {data.isp}
        </div>
      </div>
    </>
  ) : (
    <div className="text-2xl font-bold text-gray-800">Loading</div>
  )}
</main>
    );
}