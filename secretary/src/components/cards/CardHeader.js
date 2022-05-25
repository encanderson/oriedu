import React from "react";

// material-ui
import { Card, CardContent, Grid } from "@material-ui/core";

import SearchEvent from "./SearchEvent";

//-----------------------|| BREADCRUMBS ||-----------------------//

const SearchHeader = ({ search, handleSearch, value }) => {
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
            <SearchEvent
              search={search}
              handleSearch={handleSearch}
              value={value}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchHeader;
