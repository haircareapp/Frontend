import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
    background: #568EA3;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const ContainerA = styled.div`
    padding: 20px 10px;
    width: 50%;
`;
const NewsLetter = styled.div`
    padding: 20px 10px;
    width: 40%;
`;



export default function Footer() {
    return (
        <FooterDiv>
            <ContainerA>
                <h3>About Periwinkle Hair Care</h3>
                <p>Cupcake ipsum dolor sit. Amet gummi bears wafer apple pie caramels sweet. I love pastry jujubes gingerbread chocolate cake lemon drops sesame snaps topping. Toffee candy canes halvah pudding sweet roll apple pie. Dragée fruitcake gingerbread brownie lemon drops toffee danish. Danish gummies biscuit I love. Chupa chups caramels pudding liquorice I love. Toffee I love fruitcake gingerbread.</p>
                <div>
                    <ul>
                        <li><a href="https://haircareapp.netlify.com/">Contact Us</a></li>
                        <li><a href="https://haircareapp.netlify.com/">FAQs</a></li>
                        <li><a href="https://haircareapp.netlify.com/">Read more about us</a></li>
                    </ul>
                </div>   
            </ContainerA>

            <NewsLetter >
                <p>Subscribe to our Newsletter</p>
                <form>
                    <label>
                        <input
                            type="text" 
                            placeholder="Enter email here" 
                        />
                    </label>
                    <button type="submit">Subscribe</button>
                </form>
            </NewsLetter>
        </FooterDiv>
    )
}