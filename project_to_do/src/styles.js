import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TodoList = styled.div`
    background: #ffffff;
    padding: 20px;
    border-radius: 5px;
`;

export const List = styled.div`
    padding: 0;
    margin-top: 30px;
`;

export const Item = styled.li`
    color: #000000;
    font-size: 15px;
    font-weight: 400;
    background: #E4E4E4;
    box-shadow: 1px 4px 10px #400036;
    border-radius: 5px;
    height: 60px;
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    padding-left: 10px;
`;

export const Button = styled.button`
    background: #8052EC;
    font-size: 1em;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        opacity: 0.7;
    }

`;