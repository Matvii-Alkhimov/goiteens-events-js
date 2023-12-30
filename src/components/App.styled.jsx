import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    border: 3px rgba(37, 67, 218, 0.9) solid;
    background-color: lightblue;
    font-family: Sans-Serif;
    font-weight: 400;
    width: 90%;
    padding: 5px 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 6px;
`;

export const ListContainerStyled = styled.div`
    width: 90%;    
    border: 3px gray solid;
    background-color: rgba(131, 123, 123, 0.3);
    margin-right: auto;
    margin-left: auto;
    border-radius: 6px;
    padding: 40px 0;
`;

export const EventListStyled = styled.ul`
    font-family: Sans-Serif;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    gap: 40px 60px;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
`;

export const EventItemStyled = styled.li`
    border: 3px orange solid;
    background-color: rgb(240, 197, 128);
    padding: 20px 0 20px 20px;
    border-radius: 6px;
`;

export const EventThirdTitleStyled = styled.p`
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 17px;
`