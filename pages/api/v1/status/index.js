function status(request, response) {
  response.status(200).json({ texto: "Tudo certo!" });
}

export default status;
