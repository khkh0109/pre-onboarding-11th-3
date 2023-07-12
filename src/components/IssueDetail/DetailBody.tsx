import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const markdown = `
# Title
## Sub title
**strong**
`;

function DetailBody() {
  return (
    <Container>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  font-size: 20px;
  line-height: 1.6;
`;

export default DetailBody;
