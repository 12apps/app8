exports.db = {
  uri: process.env.MONGO_URI || 'mongodb://localhost/notestracker' ,
  test: "whatever"
};

exports.port = process.env.port || 3000;

