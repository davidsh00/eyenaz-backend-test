const handler = (req, res) => {
  console.log(req.body);
  const { type, payload } = req.body;
  if (type == "EYENAZ_ERROR") {
    res.status(200).json({
      type: "EYENAZ_LOG",
      payload: {
        error: {
          Id: `error ${Math.random().toFixed(2)}`,
          Message: payload,
        },
      },
    });
  } else {
    res.status(200).json({
      type: "EYENAZ_SETt",
      payload: {
        sessionId: "sI1",
        pageId: "pI1",
      },
    });
  }
};
export default handler;
