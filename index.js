require('./server/api/user/model');

const bootstrapper = require('./server/core/bootstrapper');
const shutDownManager = require('./server/core/shutdownManager');
const logger = require('./server/core/logger');
const config = require('./server/config');
const apiRoute = require('./server/api');

const app = bootstrapper.initiate();
const port = process.env.PORT || config.DEFAULT_PORT;

// apis are available under /api prefix
app.use('/api', apiRoute);

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
shutDownManager.manage(server);
