"use client";

import { DataTable } from "@/components/functional/dataTable";
import SearchBar from "@/components/functional/searchBar";
import { transformCruxData } from "@/lib/utils";
import fetchCruxData from "@/services/apiService";
import { useEffect, useState } from "react";
import { columns } from "./constant";
import CruxInfo from "@/components/functional/cruxInfo";
import { toast } from "react-toastify";

export default function Home() {
  const [origins, setOrigins] = useState<string[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [aggrData, setAggrData] = useState<any[]>([]);

  useEffect(() => {
    if (data.length > 1) {
      let sumRtt = 0;
      let sumTtfb = 0;
      data.forEach((origin) => {
        sumRtt += origin.rtt;
        sumTtfb += origin.ttfb.value;
      });

      setAggrData([
        {
          title: "Avg. round trip time",
          value: (sumRtt / data.length).toFixed(2),
        },
        { title: "Total round trip time", value: sumRtt },
        {
          title: "Avg. time to first byte",
          value: (sumTtfb / data.length).toFixed(2),
        },
        { title: "Total time to first byte", value: sumTtfb },
      ]);
    } else {
      setAggrData([]);
    }
  }, [data]);

  const fetchData = async (origins: string[]) => {
    setLoading(true);

    const requests = origins.map((origin) => fetchCruxData(origin));
    try {
      const results = await Promise.all(requests);
      setData((prevData) => [
        ...prevData,
        ...results.map(({ record }) => transformCruxData(record)),
      ]);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message || "Some error occured"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSetOrigin = (inputText: string) => {
    const newOrigins = inputText
      .split(",")
      .map((origin) => origin.trim())
      .filter((origin) => origin && !origins.includes(origin));

    if (newOrigins.length > 0) {
      setOrigins((prev) => [...prev, ...newOrigins]);
      fetchData(newOrigins);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <div className="text-6xl font-bold">CRUX data</div>
      <SearchBar setOrigin={handleSetOrigin} />
      <div className="flex gap-4">
        {aggrData.map((data, index) => (
          <CruxInfo key={index} data={data} />
        ))}
      </div>

      {loading ? (
        <span>Loading...</span>
      ) : data.length === 0 ? (
        <span>No data</span>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </main>
  );
}
