class AvailableController {
  async index(req, res) {
    return res.json({ message: 'ok' });
  }
}

export default new AvailableController();
