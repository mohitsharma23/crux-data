"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ISetOrigin {
  setOrigin: (inputText: string) => void;
}

const SearchBar = ({ setOrigin }: ISetOrigin) => {
  let [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    let val = search.trim();
    if (val) {
      setOrigin(val);
      setSearch("");
    }
  };

  return (
    <div className="flex gap-4">
      <Input
        placeholder="Enter origin"
        onChange={handleChange}
        value={search}
      />
      <Button onClick={handleClick} disabled={!search.trim()}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
