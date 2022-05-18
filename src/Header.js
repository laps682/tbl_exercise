import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: Plum;
  display: grid;
  grid-template-columns: 380px 1fr 100px;
`;

const Logo = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  color: black;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
`;

const SearchBar = styled.input`
  width: 80%;
  background: white;
  border: none;
  padding: 10px;
  margin: 10px;
`;

const Profile = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: black;
  line-height: 60px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo href="" className="logo">
        HBL Building Sciences
      </Logo>
      <form action="" className="search">
        <SearchBar type="text" placeholder="Search..." />
      </form>
      <Profile href="" className="profile">
        Justin
      </Profile>
    </StyledHeader>
  );
}

export default Header;
