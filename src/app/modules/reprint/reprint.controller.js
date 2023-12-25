//-------create recycle
export const createReprint = catchAsync(async (req, res, next) => {
  const data = req?.body;
  const recycle = await createReprintService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "recycle created successfully!",
    data: recycle,
  });
});
