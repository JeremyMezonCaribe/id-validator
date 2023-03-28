class Validator {
  async getIdValidated(req, res) {
    const { cedula = "" } = req.body;
    let sumas = [];
    "".split().map((char, i) => {
      let value = i % 2 == 0 ? char * 2 : char * 1;
      sumas.push(value);
    });
  }
}

module.exports = new Validator();
