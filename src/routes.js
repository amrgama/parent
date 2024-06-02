import { Player } from "@lottiefiles/react-lottie-player";
import lottie from "Assets/Lottie/loading.json";
import { routePath } from "./AppConstants";
import Dashboard from "./Views/Dashboard";
import Subject from "./Views/Subject";

export function Loading() {
  return (
    <div className="loading">
      <Player src={lottie} autoplay loop style={{ height: "700px" }} />
    </div>
  );
}

const routes = [
  { path: `${routePath}:student_code`, Component: Dashboard },
  // { path: `${routePath}:student/:code`, Component: Dashboard },
  { path: `${routePath}:student_code/:subjectId/subject/:id`, Component: Subject },
];

export default routes;
