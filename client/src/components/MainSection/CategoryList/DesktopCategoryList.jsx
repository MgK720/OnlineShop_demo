import * as React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Slide from '@mui/material/Slide';
import { useEffect, useState } from "react";

export default function CategoryList({categories, alignment, handleChange}){
    const containerRef = React.useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (categories.length > 0) {
        setIsLoading(false);
      }
    }, [categories]); 

    const renderCategoryButtons = () => {
      return (
        <Slide in={!isLoading} container={containerRef.current}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Categories"
          >
              {categories.map((elem, index) => { return <ToggleButton value={elem} key={index}>{elem}</ToggleButton>})}
          </ToggleButtonGroup>
        </Slide>
      )
    }

    const renderLoadingButtons = () => { 
      return(
        <>
            <LoadingButton loading variant="outlined" size="large" sx={{height:48}} key={'blank1'}>...</LoadingButton>
            <LoadingButton loading loadingIndicator="Loading…" variant="outlined" size="large" sx={{height:48}} key={'blank2'}>Loading…</LoadingButton>
            <LoadingButton loading variant="outlined" size="large" sx={{height:48}} key={'blank3'}>...</LoadingButton>
        </>
      );
    }

  
    return (
        <>
          {isLoading ? renderLoadingButtons() : renderCategoryButtons()}
        </>
    );
}