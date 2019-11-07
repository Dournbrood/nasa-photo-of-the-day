import React from "react";
import "../App.css";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-items: flex-start;
    margin: 10px;
    background: #f0f0f0;

    h1 {
        padding: 20px 15px;
    }

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        width: 100%;
        background: #e0e0e0;
        margin: 0px -10px;
        padding: 20px 0;
    }

    p {
        padding: 15px;
    }
`;

const APODCard = (propsObj) => {
    return (
        <CardContainer>
            {/* Data received is props.data.config, props.data.data, so on and so forth. Data snippet at bottom of code. */}
            <h1>{propsObj.response.title}</h1>
            <img src={propsObj.response.url} alt="spaaaace" />
            <a href={propsObj.response.hdurl}>View original size</a>
            <p>{propsObj.response.explanation}</p>
            <h3>{propsObj.response.date}</h3>
        </CardContainer>
    );
}

export default APODCard;