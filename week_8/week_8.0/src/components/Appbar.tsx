import { SearchBar } from "./Searchbar"

export const AppBar = ()=>{
return <div className="flex justify-between">
<div>
Youtube
</div>
<div>
Searchbar
<SearchBar/>
</div>
<div>
Sign in </div>
</div>
}