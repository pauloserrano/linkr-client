import { FeedWrapper, PostWrapper } from "../styles";
import { HashtagBoldStyle } from "../styles/HashtagBold"
import LikeContainer from "./LikeContainer";
import styled from "styled-components";

const Feed = ({ children, ...otherProps }) => {
  return (
      <FeedWrapper {...otherProps}>
        {children}
      </FeedWrapper>
  )
}

Feed.Title = ({ children, ...otherProps }) => {
    return (<h2 {...otherProps}>{children}</h2>)
}

Feed.Post = ({ post, ...otherProps}) => {
  const { pictureUrl, name, link, body, metaTitle, metaDescription, metaImage, id } = post

  const tokenSeparador = "/a7199fb05606b0d193d79a2dd6c2b537/"
  const bodyFormated = bodyFormatFunction(body, tokenSeparador)

  return (
    <PostWrapper {...otherProps}>
        <div> 
          <UserImage src={pictureUrl} alt={name} />
          <LikeContainer postId={id}/>
        </div>
        <div className="content">
            <h3>{name}</h3>

            {bodyFormated && <p>{
            bodyFormated.map(e => {
              if (e.includes(tokenSeparador)){
                return <HashtagBoldStyle onClick={() =>console.log("/hashtag/"+e.replace(`${tokenSeparador}#`, ""))}>{e.replace(tokenSeparador, "") + " "}</HashtagBoldStyle>
              } else return <span>{e + " "}</span>
            })
            }</p>}

            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="title">{metaTitle}</p>
              {metaDescription && <p className="description">{metaDescription}</p>}
              <p className="link">{link}</p>
              <img src={metaImage} alt={metaTitle} />
            </a>
        </div>
    </PostWrapper>
  )
}

Feed.Status = ({ loading, error }) => {
  return (
    <>
      {!loading && !error && 'Loading'}
      {loading?.length === 0 && 'No posts yet'}
      {error && 'An error occured while trying to fetch the posts, please refresh the page'}
    </>
  )
}
function bodyFormatFunction (texto, tokenSeparador){

  const textoArray = texto.split(" ")
  const indicesHashtag = []
  let textoReferenciado = ""

  for (let i = 0; i < textoArray.length; i++) {
    if(textoArray[i][0] === "#") indicesHashtag.push(i)   
  }
  console.log(indicesHashtag)
  for (let z = 0; z < textoArray.length; z++) {
    if (indicesHashtag.includes(z)){
      textoReferenciado += tokenSeparador + textoArray[z] + " "
    } else{
      textoReferenciado += textoArray[z] + " "
    }
  }
  textoReferenciado = textoReferenciado.split(" ")

  return textoReferenciado
}

const UserImage = styled.img`
  width: 50px;
  border-radius: 50%;
`

export default Feed