import { createBrowserRouter } from "react-router-dom";
import IssueList from "./page/IssueList";
import IssueDetail from "./page/IssueDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueList />,
  },
  {
    path: "/issue/:id",
    element: <IssueDetail />,
  },
  // Add Error Page Component
]);

export default router;
