import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const Detail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data: response } = await axios.get("/game", {
        params: { id },
      });

      setCard(response);
      console.log("response: ", response);
    }
    fetchData();
  }, [id]);

  return (
    card && (
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ marginTop: 24 }}>
          <Typography variant="h3">{card.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Carousel>
            {card.screenshots.map((screenshot) => (
              <div
                style={{
                  height: 400,
                  backgroundImage: `url(${screenshot.image})`,
                  backgroundSize: "cover",
                }}
                key={screenshot.id}
              ></div>
            ))}
          </Carousel>
        </Grid>
        <Grid item>
          <Typography>
            <strong>Gêneros:</strong> {card.genre}
          </Typography>
          <Typography>
            <strong>Plataforma:</strong> {card.platform}
          </Typography>
          <Typography>
            <strong>Descrição:</strong> {card.short_description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <strong>Requisitos do Sistema</strong>
          </Typography>
          <Typography>
            <strong>Sistema Operacional:</strong>{" "}
            {card.minimum_system_requirements.os}
          </Typography>
          <Typography>
            <strong>Processador:</strong>{" "}
            {card.minimum_system_requirements.processor}
          </Typography>
          <Typography>
            <strong>Memória:</strong> {card.minimum_system_requirements.memory}
          </Typography>
          <Typography>
            <strong>Gráficos:</strong>{" "}
            {card.minimum_system_requirements.graphics}
          </Typography>
          <Typography>
            <strong>Espaço em disco:</strong>{" "}
            {card.minimum_system_requirements.storage}
          </Typography>
        </Grid>
      </Grid>
    )
  );
};

export default Detail;
