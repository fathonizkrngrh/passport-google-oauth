const express = require("express");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const app = express();

app.use("/api", routes);

app.get("/", (req, res) =>
  res
    .status(status.OK)
    .json(apiResponse(status.OK, "OK", "Welcome to Express Auth API."))
);

// catch 404 and forward to error handler
app.use((req, res) =>
  res
    .status(status.NOT_FOUND)
    .json(apiNotFoundResponse("The requested resource could not be found"))
);

// error handler
app.use((err, req, res, next) =>
  res
    .status(status.INTERNAL_SERVER_ERROR)
    .json(
      apiResponse(
        status.INTERNAL_SERVER_ERROR,
        "INTERNAL_SERVER_ERROR",
        err.message
      )
    )
);

app.listen(port, () => {
  console.info(`======= Server is running on http://localhost:${port} =======`);
});

module.exports = app;
