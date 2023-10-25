import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "./Item";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

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

  //https://mui.com/material-ui/transitions/
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {isLoading
        ? // Render skeletons while data is loading
          Array.from({ length: 10 }).map((_, index) => (
            <Grid
              xs={12}
              xl={2}
              lg={3}
              md={3}
              sm={6}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton
                  variant="rounded"
                  width="70%"
                  height={50}
                  sx={{ m: 1.5 }}
                />
                <Skeleton
                  variant="rounded"
                  width="40%"
                  height={40}
                  sx={{ m: 1, mt: 0 }}
                />
                <Skeleton
                  variant="rounded"
                  width="40%"
                  height={40}
                  sx={{ m: 1, mt: 0 }}
                />
                {isLoggedIn ? (
                  <Skeleton variant="rectangular" width="100%" height={50} />
                ) : null}
              </Box>
            </Grid>
          ))
        : // Render actual data once it's available
          dataFromDB.map((elem) => (
            <Grid xs={12} xl={2} lg={3} md={3} sm={6} key={elem.id}>
              <Item
                data={elem}
                isLoggedIn={isLoggedIn}
                numberOfItems={numberOfItems}
                handleChange={handleChange}
                addItemToCart={addItemToCart}
              />
            </Grid>
          ))}
    </Grid>
  );
}
