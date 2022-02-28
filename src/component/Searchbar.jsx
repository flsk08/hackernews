import React, { useState } from "react";
import data from "./mockdata.json";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="search"
        id="search"
        placeholder="search"
        value={""}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {data
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return;
          }
        })
        .map((val, key) => {
          return (
            <div>
              <p>{val.title}</p>
            </div>
          );
        })}
    </div>
  );
}

// export default function Searchbar () {
//   const [search,setSearch]=useState('');
//   return (
//   <div>
//   <input type="search" id="search" placeholder="search" value={""} onChange={((event)=>{setSearch(event.target.value)
//   })} />
//   {data.filter((val)=>{
// if(search==""){
//     return val;

// }
// else if(val.title.tolowercase().includes(search.tolowercase())){

// }
// })}.map((val,key)=>{
// return (
//     <div>
//         <p>{val.title}</p>
//         </div>
// )
//   )}
//   </div>
//   );

// }
