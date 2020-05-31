const {MTProto} = require("@mtproto/core");

const api_id = "131236";
const api_hash = "61066cf4e9fe9d8c9704171f38ff40ba";

const mtproto = new MTProto({
  api_id,
  api_hash,

  // Use test servers
  test: true,
});

export default mtproto;
