import styled from "styled-components";

function DetailHeader() {
  return (
    <Container>
      <UserImage>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="user profile image"
        />
      </UserImage>
      <div>
        <Title>
          <span>#issue number</span>
          <span>title</span>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
`;

const UserImage = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 25px;

  span:first-child {
    margin-right: 15px;
  }
`;

const Info = styled.div`
  font-size: 15px;

  span:first-child {
    margin-right: 13px;
  }
`;

export default DetailHeader;
