import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [cardsFiltered, setCardsFiltered] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: response } = await axios.get("/games");

      console.log("response: ", response);
      setCards(response);
      setCardsFiltered(response);
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);

    event.target.value.length
      ? setCardsFiltered(cards.filter((card) => card.title.includes(filter)))
      : setCardsFiltered(cards);
  };

  return cards ? (
    <Grid
      style={{ marginTop: 24 }}
      container
      justifyContent="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Buscar pelo título..."
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {filter.length
            ? `Resultado para "${filter}" (${cardsFiltered.length})`
            : `Nenhum filtro aplicado (${cardsFiltered.length})`}
        </Typography>
      </Grid>

      {cardsFiltered.map((card) => (
        <Grid item key={card.id}>
          <Card
            {...{
              id: card.id,
              title: card.title,
              thumbnail: card.thumbnail,
              description: card.short_description,
            }}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <>Deu Ruim</>
  );
};

export default Home;
