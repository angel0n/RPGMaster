import { ArgumentsHost, Catch, ExceptionFilter, UnauthorizedException } from "@nestjs/common";
import { Response } from "express";

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>()
        return response.status(401).json({
            message: exception.message,
            error: "Unauthorized",
            statusCode: 401
        })
    }
}