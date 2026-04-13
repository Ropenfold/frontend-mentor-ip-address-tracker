"use client";

import Image from "next/image"
import MapWrapper from "@/components/map/MapWrapper";
import Search from "@/components/search/Search";
import { useEffect, useState } from "react";
import ResultsTable from "@/components/results-table/ResultsTable";
import { IPData } from "@/types/ip";

export default function ClientApp() {
    const [data, setData] = useState<IPData | null>(null);

    useEffect(() => {
        fetch("/api/ip")
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                setData(data);
            })
            .catch((err) => {
                console.error("Error fetching initial IP data:", err);
            });
    }, []);

    return (   
        <>       
<nav className="flex flex-col bg-zinc-50 font-sans">
        <div className="relative w-full h-70 overflow-hidden z-10">
        <Image
          src="/images/pattern-bg-desktop.png"
          alt="Background pattern"
          fill
          className="object-cover block"
          loading="eager"
        />
        </div>
<h1 className="text-xl fixed left-1/2 -translate-x-1/2 top-8 md:text-2xl font-bold text-white z-20">
  IP Address Tracker
</h1>
        <Search setData={setData} />
        <ResultsTable data={data}/>
    </nav>
    <div className="relative z-0 h-max w-full">
      <MapWrapper data={data}/>
    </div> 
    </>
    )
}
