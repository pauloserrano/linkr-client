import styled from "styled-components";

export default function hashtagTrending(){

    const hashtagList = ["javascript", "react", "react-native", "material", "web-dev", "mobile", "css", "html", "node", "sql"]

    return(

        <Container>
            <Tittle>
                <p>trending</p>
            </Tittle>

            <HashtagContainer>
                {
                    hashtagList.map(e => { return(
                        <p># {e}</p>
                    )})
                }
            </HashtagContainer>
        </Container>
    )
}

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700&family=Playball&family=Recursive:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lexend+Deca:wght@100;200;300;400;500;600;700&family=Playball&family=Recursive:wght@300;400;500;600;700&display=swap');
    
    width:301px;
    height: 406px;
    background-color: #171717;
    border-radius: 16px;

    color:#ffffff;

`
const Tittle = styled.div`
    width:100%;
    height: 61px;
    border-bottom: 1px solid #484848;

    display:flex;
    align-items:center;
    p{
        font-weight:700;
        font-size:27px;
        font-family: 'Oswald';
        
        margin-left: 18px;
    }
`
const HashtagContainer = styled.div`
    margin-left:16px;
    margin-top:20px;

    p {
        font-family: 'Lato';
        font-weight:700;
        font-size:19px;
        line-height:23px;
        letter-spacing:0.05em;
        margin-bottom:6px;
    }
`