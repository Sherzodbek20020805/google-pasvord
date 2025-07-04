import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { GoogleStrategy } from "./strategy";
import { FacebookStrategy } from "./strategy/facebook.stratgy";

@Module({
    controllers:[AuthController],
    providers:[GoogleStrategy,FacebookStrategy]
})
export class AuthModule{}