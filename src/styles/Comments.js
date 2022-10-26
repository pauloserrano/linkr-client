import styled from "styled-components";

const Wrapper = styled.section`
    background-color: #1E1E1E;
    width: 100%;
    padding: 1rem 1rem 1rem;
    position: relative;
    bottom: 2rem;
    border-radius: 0 0 1rem 1rem;

    .comment{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
        padding: 1rem 0;

        &:not(:last-child){
            border-bottom: 1px solid #353535;
        }

        img{
            width: 40px;
            height: 40px;
            margin: 0 10px;
            object-fit: cover;
            border-radius: 50%;
        }

        h4{
            font-weight: bold;
            color: #F3F3F3;
            margin-bottom: 0.25em;
        }

        p{
            font-size: 0.9em;
            color: #ACACAC;
        }

        form{
            display: flex;
            align-items: center;
            width: 100%;
            align-self: center;
            position: relative;

            input{
                width: inherit;
                background-color: #252525;
                border: none;
                border-radius: 10px;
                padding: 0.75rem 2.5rem 0.75rem 0.75rem;
                overflow-wrap: break-word;
                color: #838383;

                ::placeholder{
                    color: #575757
                }
            }

            button{
                height: fit-content;
                color: white;
                border: none;
                background-color: transparent;
                position: absolute;
                right: 0.75rem;
                cursor: pointer;
            }
        }
    }
`

export default Wrapper