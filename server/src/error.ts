export const createError = (status: any, message: string)=>{
    const err = new Error()
    status = status
    err.message = message
    return err
} 