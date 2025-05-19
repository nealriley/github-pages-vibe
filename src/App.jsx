import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Hero = styled.div`
  margin: 20px auto;
`;

const Links = styled.div`
  margin: 20px 0;
  a {
    margin: 0 5px;
  }
`;

const Frame = styled.iframe`
  margin: 20px 0;
`;

export default function App() {
  return (
    <Container>
      <Hero>
        <img src="https://via.placeholder.com/800x400" alt="Hero" />
      </Hero>
      <Links>
        <a href="https://github.com/">GitHub</a> |
        <a href="https://youtube.com/">YouTube</a> |
        <a href="https://twitch.tv/">Twitch</a>
      </Links>
      <div>
        <h2>YouTube</h2>
        <Frame
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div>
        <h2>Twitch</h2>
        <Frame
          src="https://player.twitch.tv/?channel=monstercat&parent=github.io"
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          height="378"
          width="620"
        />
      </div>
    </Container>
  );
}
