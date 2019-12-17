class ResponseHelper {
  constructor(err:string, data:object)
  {
    return {"error" : err, "data": data}
  }
}

export { ResponseHelper }