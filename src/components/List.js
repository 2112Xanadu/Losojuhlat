import styled from "@emotion/styled";

export function List({ persons }) {
  return (
    <ListContainer>
      {persons.map((person) => (
        <ListItems key={person.name}>
          {person.name}, {person.age}, {person.email}
        </ListItems>
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.ul({
  listStyle: "none",
  textAlign: "left"
});

const ListItems = styled.li({
  margin: 10,
  backgroundColor: "lightgrey",
  borderRadius: 4,
  padding: 4
});
