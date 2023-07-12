/**
 * 이슈 번호 number
 * 타이틀 title
 * 작성자 user.login
 * 작성일 created_at
 * 코멘트 comments
 */

import styled from "styled-components";

function Issue() {
  return (
    <Container>
      <div>
        <Title>
          <strong>#issue number</strong>
          <strong>title</strong>
        </Title>
        <Info>
          <span>작성자: name</span>
          <span>작성일: 23.2.2</span>
        </Info>
      </div>
      <div>코멘트: 67</div>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
`;

const Title = styled.div`
  margin-bottom: 5px;
  font-size: 20px;

  strong:first-child {
    margin-right: 10px;
    color: #6e6e6e;
  }
`;

const Info = styled.div`
  font-size: 14px;

  span:first-child {
    margin-right: 10px;
  }
`;

export default Issue;
