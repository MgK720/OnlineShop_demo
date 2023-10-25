import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "./Item";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";

export default function ItemsList({
  dataFromDB,
  isLoggedIn,
  addItemToCart,
  handleChange,
  numberOfItems,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dataFromDB.length > 0) {
      setIsLoading(false);
    }
  }, [dataFromDB]);

  const renderItems = () => {
    const delay = 350;
    return dataFromDB.map((elem, index) => (
      <Grid xs={12} xl={2} lg={3} md={3} sm={6} key={elem.id}>
        <Grow
          in={!isLoading}
          timeout={delay * (index + 1)}
          transformorigin={"left"}
        >
          <div>
            <Item
              data={elem}
              isLoggedIn={isLoggedIn}
              numberOfItems={numberOfItems}
              handleChange={handleChange}
              addItemToCart={addItemToCart}
            />
          </div>
        </Grow>
      </Grid>
    ));
  };
  const renderSkeletons = () => {
    return Array.from({ length: 12 }).map((_, index) => (
      <Grid
        xs={12}
        xl={2}
        lg={3}
        md={3}
        sm={6}
        key={index}
        sx={{ textAlign: "center" }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={200} />
          <Skeleton variant="rounded" width="70%" height={50} sx={{ m: 1.5 }} />
          <Skeleton
            variant="rounded"
            width="40%"
            height={40}
            sx={{ m: 1, mt: 0, mb: 2 }}
          />
          <Skeleton
            variant="rounded"
            width="40%"
            height={40}
            sx={{ m: 1, mt: 0, mb: 2 }}
          />
          {isLoggedIn ? (
            <Skeleton variant="rectangular" width="100%" height={50} />
          ) : null}
        </Card>
      </Grid>
    ));
  };
  //https://mui.com/material-ui/transitions/
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {isLoading ? renderSkeletons() : renderItems()}
    </Grid>
  );
}
