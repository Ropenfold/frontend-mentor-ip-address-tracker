"use client";

import Image from "next/image";
import { IPData } from "@/types/ip";

type SearchProps = {
    setData: (data: IPData) => void;
}

export default function Search({ setData }: SearchProps) {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ip = formData.get("ip") as string;

        fetch(`/api/ip?ip=${ip}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                setData(data);
            })
            .catch((err) => {
                console.error("Error fetching IP data:", err);
            });
    }

    return (
<form onSubmit={handleSubmit} className="w-[80%] fixed left-1/2 -translate-x-1/2 
top-10 md:top-16 lg:max-w-md mt-8 flex z-20 cursor-pointer">
  <input
    type="text"
    name="ip"
    placeholder="Search for any IP address or domain"
    className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 bg-white focus:outline-none"
  />
  <button
    type="submit"
    className="px-4 py-3 bg-black text-white rounded-r-lg cursor-pointer"
  >
  <Image
          src="/images/icon-arrow.svg"
          alt="Arrow"
          width={12}
          height={12}
          style={{ width: "auto", height: "auto" }}
        />
  </button>
</form>
    );
}