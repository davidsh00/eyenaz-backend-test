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
  } else if (type == "EYENAZ_INIT") {
    res.status(200).json({
      type: "EYENAZ_SET",
      payload: {
        sessionId: "sI1",
        visitorId: "vI1",
      },
    });
  } else if (type == "EYENAZ_RECORDING_START") {
    res.status(200).json({
      type: "EYENAZ_RECORDING_START",
      payload: {
        mode: "pro",
      },
    });
  } else {
    res.status(200).json({});
  }
};
export default handler;
