const handler = (req, res) => {
  const { type, payload } = req.body;
  console.log(req.body);
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
      EYENAZ_SET: {
        sessionId: "sI1",
        visitorId: "vI1",
        mouseMoveDelay: 500,
        recordLogPostDelay: 3000,
      },
      EYENAZ_RECORDING_START: {},
    });
  } else if (type == "EYENAZ_RECORDING_START") {
    res.status(200).json({
      type: "EYENAZ_RECORDING_START",
      payload: {
        mode: "pro",
      },
    });
  } else if (type === "EYENAZ_RECORDING_LOG") {
    res.status(200).json({});
  } else {
    res.status(200).json({});
  }
};
export default handler;
