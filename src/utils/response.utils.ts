export const ApiResponse = <DataType>(message: string, data: DataType, status: boolean = true) => {
  return {
    status,
    message,
    data
  };
};
