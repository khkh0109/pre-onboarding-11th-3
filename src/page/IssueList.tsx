import Issue from "../components/IssueList/Issue";
import Advertising from "../components/IssueList/Advertising";

function IssueList() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map(item => {
        return <Issue key={item} />;
      })}
      <Advertising />
    </ul>
  );
}

export default IssueList;
