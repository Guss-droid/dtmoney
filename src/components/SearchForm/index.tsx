import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { SearchContainer } from "./styles";

export function SearchForm() {
  const [search, setSearch] = useState("")

  return (
    <SearchContainer>
      <input
        placeholder="Busque por transações"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchContainer>
  );
}