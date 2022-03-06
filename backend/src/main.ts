import { App } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function start() {
    const PORT = process.env.PORT || 3100;
    const app = await NestFactory.create(App);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, forbidUnknownValues: true }));
    await app.listen(PORT, () => {
        console.log(`we are up on port ${PORT}`);
    });
}
start();
