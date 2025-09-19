import { getAll } from "../api/seed-api";
import Post from "./post";

export default function PostsShell() {

  const seed = getAll();

  return (<div>
    <div className="section">
      {seed.map((s) => <Post key={s.id} seed={s}/>)}
    </div>
  </div>
  );
}