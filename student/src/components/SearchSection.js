import React from "react";

// material-ui
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

import SearchSection from "./cards/SearchCard";

//-----------------------|| BREADCRUMBS ||-----------------------//

const SearchHeader = ({ title, search, setValue, value, handleSearch }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardContent>
        <Grid
          container
          spacing={1}
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <SearchSection
              search={search}
              setValue={setValue}
              value={value}
              handleSearch={handleSearch}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 400 }}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchHeader;
