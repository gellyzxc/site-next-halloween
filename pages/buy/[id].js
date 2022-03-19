import { useRouter } from "next/router";

export default function List() {
    const {query} = useRouter;
    return(
      <>
        <div>{query.id}</div>
        {/* <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul> */}
      </>
    )
  }