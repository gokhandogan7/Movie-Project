import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 320px;
  height: 500px;
  color: #bdbdbd;
  box-shadow: 3px 2px 10px rgba(10, 10, 10, 0.9);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 50px 10px;
  transition: 0.3s;
  border-radius: 10px;


  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const StyledImgWrapper = styled.img`
  border-radius: 10px;
  width: auto;
  height: 77%;
  margin: 10px 0;
`;
export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

/////DERS TEKRARI
// import "./Card.style.css"
/* import styles from "./Card.module.css" */

{
  /* <div style={cardStyle}>
TEST
<div className={styles.cardWrapper}>
    TEST-1
</div>
<StyledCardWrapper>
    <p>Styled component</p>
</StyledCardWrapper>

<StyledCardWrapper2>
    <p>deneme2</p>
</StyledCardWrapper2>

</div> */
}
