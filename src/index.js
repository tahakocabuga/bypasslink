const axios = require("axios");
module.exports = {
  bypass: async function bypasser(url) {
    let axsres = await axios({
      method: "post",
      url: "https://api.bypass.vip/",
      data: new URLSearchParams({
        url: url,
      }),
    });
    return axsres.data;
  },
};
