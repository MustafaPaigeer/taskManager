const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://john:admin1234@nodeexpressprojects.fxrwfcb.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(()=> console.log('Connected to the DB...'))
  .catch((err) => console.log(err));