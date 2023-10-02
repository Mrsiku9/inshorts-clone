import { Card, CardContent, Grid, Typography, styled } from "@mui/material";
const Image = styled("img")({
  height: 268,
  width: "95%",
  objectFit: "cover",
  borderRadius: 5,
});
const Component = styled(Card)`
  width: 65%;
  /* margin-bottom:20px; */
  margin: 20px auto 20px auto;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 5px 10px 0 rgb(0 0 0 / 12%);
`;
const Container = styled(CardContent)`
  padding: 8px;
  padding-bottom: 4px !important;
`;
const Text = styled(Typography)`
  font-size: 22px;
  font-weight: 300;
  color: #44444d;
  line-height: 22px;
`;
const Author = styled(Typography)`
  color: #808290;
  font-size: 12px;
  line-height: 22px;
`;
const Description = styled(Typography)`
  line-height: 22px;
  color: #44444d;
`;
const Publisher = styled(Typography)`
  margin-top: auto;

  margin-bottom: 10px;
`;
const RightContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const Article = ({ data }) => {
  return (
    <Component>
      <Container>
        <Grid container>
          <Grid lg={5} sm={5} xs={12} item>
            <Image src={data.url} alt="data.url" />
          </Grid>
          <RightContainer lg={7} md={7} sm={7} xs={12} item>
            <Text>{data.title}</Text>
            <Author>
              <b>short</b> by {data.author} /{" "}
              {new Date(data.timestamp).toDateString()}
            </Author>
            <Description>{data.description}</Description>
            <Publisher>
              read more at &nbsp;
              <a
                style={{ textDecoration: "none", color: "#44444d" }}
                href={data.link}
                target="_blank"
              >
                <b>{data.publisher}</b>
              </a>
            </Publisher>
          </RightContainer>
        </Grid>
      </Container>
    </Component>
  );
};

export default Article;
